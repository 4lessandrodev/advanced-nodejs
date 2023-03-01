import { createReadStream, readFile } from 'node:fs';
import { createServer } from 'node:http';
import { join } from 'node:path';

const server = createServer();

server.on('request', (req, res) => {
    if(req.url === '/big'){
        const file = join('big-file');
        const chunk = readFile(file, (err) => { if(err) throw err });
        return res.end(chunk);
    }

    const src = createReadStream(join('big-file'));
    res.writeHead(200, { 'Accept-Encoding': 'gzip, compress, br' });
    return src.pipe(res);
});

server.timeout = 90000;
server.listen(3000);
