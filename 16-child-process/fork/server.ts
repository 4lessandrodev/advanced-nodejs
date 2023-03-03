import { fork } from 'node:child_process';
import { createServer } from 'node:http';
import { resolve } from 'node:path';

const server = createServer();

server.on('request', (req, res) => {
    if(req.url === '/hard'){
        const hardFn = fork(resolve('fork', 'hard.js'));
        hardFn.send('Start');
        hardFn.on('message', (arg: string) => {
            console.log('Done!');
            return res.end(arg);
        });
    } else {
        return res.end(new Date().toISOString());
    }
});

server.listen(3000);
