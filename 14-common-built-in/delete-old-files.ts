/** deletar arquivos criados a mais de 7 dias */
import { readdirSync, stat, unlink } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const dirname = join(__dirname, 'to-delete');
const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

const files = readdirSync(dirname);

files.forEach((file) => {
    const filePath = join(dirname, file);

    stat(filePath, (err, stats) => {
        if(err) throw err;

        const isGt7Days = Date.now() - stats.mtime.getTime() > 7 * ONE_DAY_IN_MS;
        if(isGt7Days) unlink(filePath, (err) => {
            if(err) throw err;

            console.log(file, 'deleted');
        })
    });
});

console.log(execSync('ls -lu --full-time to-delete').toString());