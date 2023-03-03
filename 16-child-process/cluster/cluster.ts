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
} else {
    bootstrap();
}
