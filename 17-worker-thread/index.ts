import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';

if (isMainThread) {
    console.log('Starting the main thread');
    const worker = new Worker(__filename, {
        // dados a ser compartilhado entre as threads
        workerData:{
           outputPrefix: 'Received message',
           timeToWaste: 5000
        }
    });
    worker.on('message', (msg) => {
        console.log(`Worker: ${msg}`);
    });

    worker.postMessage('Done with my work');

    console.log('Still in the main thread');
}
else {
    if ((typeof parentPort?.postMessage === 'function')) {
        parentPort.on('message', (msg) => {
            console.log(`${workerData.outputPrefix}: ${msg}`);
        })
        parentPort.postMessage('Getting started');
        sleep(workerData);
        parentPort.postMessage('In the middle');
        sleep(workerData);
        parentPort.postMessage('All done!');
    }
}

function sleep(delay: number): void {
    const end = Date.now() + delay;
    while (Date.now() < end) { };
}
