import { randomUUID } from 'node:crypto';
import net, { Socket } from 'node:net';

const sockets: Map<string, Socket> = new Map();
const server = net.createServer();

server.on('connection', (socket) => {
    const key = randomUUID();
    console.log('Socket connected!');
    socket.write('Please type your name:\n');
    socket.on('data', (data: Buffer) => {
        const exists = sockets.has(key);
        if (!exists) {
            const name = data.toString('utf8').trim();
            /** @ts-ignore */
            socket['name'] = name;
            /** @ts-ignore */
            socket['key'] = key;
            socket.write(`Welcome ${name}\n`);
            sockets.set(key, socket);
            return;
        }
        sockets.forEach((sk) => {
            /** @ts-ignore */
            if (socket['key'] === sk['key']) return;
            const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
            sk.write(`--------------------- ${now}\n`);
            /** @ts-ignore */
            sk.write(`${socket['name']}: `);
            sk.write(data + '\n');
        });
    });

    socket.on('close', () => {
        /** @ts-ignore */
        const name = socket['name'];
        /** @ts-ignore */
        sockets.delete(socket['key']);
        sockets.forEach((sk) => {
            /** @ts-ignore */
            sk.write(`${name} saiu da conversa\n`);
        });
        console.log('Socket disconnected!');
    })
});

server.listen(8000);
