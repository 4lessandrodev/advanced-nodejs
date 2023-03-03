import { spawn } from 'node:child_process';

const child = spawn('node', ['timer.js'], {
    detached: true,
    stdio: 'ignore'
});

child.unref();
