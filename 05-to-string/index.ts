import { StringDecoder } from 'string_decoder';
const decoder = new StringDecoder('utf8');

process.stdin.on('data', (chunk: any) => {
    if(chunk !== null){
        const buffer = Buffer.from([chunk]);
        console.log('With .toString(): ', buffer.toString()); // ?
        console.log('With .toString(utf8): ', buffer.toString('utf8')); // ?
        console.log('With StringDecoder: ', decoder.write(buffer)); // €
        console.log('----------------');
    }
});

process.stdin.emit('data', '0xE2');
process.stdin.emit('data', '0x82');
process.stdin.emit('data', '0xAC');
process.exit(0);
