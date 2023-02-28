import { IncomingMessage, request as httpRequest, get as httpGet, ClientRequest } from 'node:http';
import { request as httpsRequest, get as httpsGet } from 'node:https';

// # Option One
const httpRq: ClientRequest = httpRequest(
    { hostname: 'www.google.com', method: 'GET' },
    (res: IncomingMessage) => {
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', (chunk: Buffer) => {
            console.log(chunk.toString().slice(0, 42));
        });
    }
);

httpRq.on('error', (err: Error) => {
    console.log(err);
});

httpRq.end();


// ------

// # Option Two --> redirect to https
const httpReq: ClientRequest = httpGet('http://google.com', (res: IncomingMessage) => {
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', (chunk: Buffer) => {
        console.log(chunk.toString().slice(0, 42));
    });
});

httpReq.on('error', (err: Error) => {
    console.log(err);
});


// https request

const httpsReq: ClientRequest = httpsRequest({ hostname: 'postback-4dev.onrender.com', method: 'POST', path: '/test' }, (res: IncomingMessage) => {
    console.log(res.statusCode);
    console.log(res.headers);
    res.on('data', (chunk: Buffer) => {
        console.log(chunk.toString().slice(0, 42));
    })
});

httpsReq.on('error', (err: Error) => {
    console.log(err);
});

httpsReq.write(JSON.stringify({ echo: 'hello' }));
httpsReq.end();
