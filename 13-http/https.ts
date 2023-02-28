import { IncomingMessage, ServerResponse, Server } from 'node:http';
import { createServer } from 'node:https';
import fs from 'node:fs';

const server: Server = createServer({
    cert: fs.readFileSync('./cert.pem'),
    key: fs.readFileSync('./key.pem')
});

server.on('request', (req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200);
    res.end('Success!\n');
});

server.on('listening', () => console.log('running on https://localhost:8000'));
server.listen(8000);
