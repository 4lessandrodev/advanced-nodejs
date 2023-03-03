import { cpus } from 'node:os';
import cluster from 'node:cluster';
import bootstrap from './server';

if (cluster.isPrimary) {
    const processors = cpus().length;
    console.log(`Forking ${processors} Cpus`);
    let i = 0;
    while(i < processors){
        cluster.fork();
        i++;
    }

    // criar novo worker se algum der erro
    cluster.on('exit', (worker, code, signal) => {
        // garantir que foi um erro no worker
        const canCreateNewOne = code !== 0 && !worker.exitedAfterDisconnect;
        if(canCreateNewOne) cluster.fork();
    });

} else {
    bootstrap();
}
