import { appendFile, readFile, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Duplex } from "node:stream";

const inboundOutbound = new Duplex(
    {
        read(size){},
        write(chunk: Buffer, encoding, callback) {
            const letter = chunk.toString().charCodeAt(0).toString();
            appendFile(resolve('output'), letter + '\n', 'utf8', callback)
        }
    }
);

process.stdin.pipe(inboundOutbound).pipe(process.stdout);
