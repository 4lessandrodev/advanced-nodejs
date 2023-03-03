import { createServer } from 'node:http';
const isRunningFromCli = require.main === module;
export const bootstrap = () => {
    const server = createServer();

    server.on('request', (req, res) => {
        let i = 0; while(i<3e7){ i++ };
        res.end(JSON.stringify({ pid: process.pid, date: new Date().toISOString() }));
    });

    server.listen(3000, () => console.log('running on localhost:3000'));
}

export default bootstrap;
if(isRunningFromCli) bootstrap();
