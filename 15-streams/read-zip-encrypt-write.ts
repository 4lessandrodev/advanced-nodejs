import { createCipheriv, scryptSync } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { resolve } from "node:path";
import { Transform } from "node:stream";
import { createGzip } from "node:zlib";

const inbound = resolve('in');
const outbound = resolve('encrypted.gz');
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.
const cipher = createCipheriv(algorithm, key, iv);

const progress = new Transform({
    transform(chunk, encoding, callback){
        process.stdout.write('.');
        callback(null, chunk);
    }
})

createReadStream(inbound)
.pipe(progress)
.pipe(cipher)
.pipe(createGzip())
.pipe(createWriteStream(outbound))
.on('finish', () => console.log('\n Done!'));
