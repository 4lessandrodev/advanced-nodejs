import { randomUUID } from 'node:crypto';
import udp, { RemoteInfo } from 'node:dgram';
const PORT = 3333;
const HOST = 'localhost';

// server - mensageiro - TCP / UDP
const server = udp.createSocket('udp4');
server.on('listening', () => console.log(`listening on ${HOST}:${PORT}`));

server.on('message', (msg: Buffer, info: RemoteInfo) => {
    console.log(msg.toString('utf8'));
    console.log(info.size);
});

server.bind(PORT, HOST);

// client - one msg per 10 sec
const Id = () => randomUUID();
setInterval(() => {
    const client = udp.createSocket('udp4');
    const msg = JSON.stringify({ message: 'Hello World', id: Id() });
    client.send(msg, PORT, HOST, (err, bytes) => {
        if(err) return console.log(err);
        console.log(`Message sent: ${bytes} bytes`);
        client.close();
    });
}, 10000);
