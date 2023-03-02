import { Transform } from "stream";

const transform = new Transform({
    transform(chunk: Buffer, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    },
});

process.stdin.pipe(transform).pipe(process.stdout);
