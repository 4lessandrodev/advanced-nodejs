import { cpus, networkInterfaces, type, freemem, userInfo, release, constants } from 'node:os';

console.log('CPUS:');
console.log(cpus());

console.log('NETWORKS:');
console.log(networkInterfaces());

console.log('SYSTEM:');
console.log(type());

console.log('MEMORY:');
console.log(freemem());

console.log('USER INFO:');
console.log(userInfo());

console.log('SYSTEM VERSION:');
console.log(release());

console.log('ERRORS SIGNALS:');
console.log(constants.signals);
