/** deletar arquivos criados a mais de 7 dias */
/** criar massa de testes */
import { mkdirSync, writeFile, utimes, existsSync, rm } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const dirname = join(__dirname, 'to-delete');

const exists = existsSync(dirname);

const createFiles = () => {
    mkdirSync(dirname);
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
    let index = 0;

    while (index <= 10) {
        const time = Math.trunc((Date.now() - index * ONE_DAY_IN_MS));
        const filePath = join(dirname, `file-${index}`);
        const date = new Date(time).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
        writeFile(filePath, date, (err): void => {
            if (err) throw err;

            const unixTmsInSec = time / 1000;
            utimes(filePath, unixTmsInSec, unixTmsInSec, (err) => {
                if (err) throw err;
            });
        });
        index++;
    };

    console.log(execSync('ls -lu --full-time to-delete').toString());
}

if (exists) {
    rm(dirname, { recursive: true }, (err) => {
        if (err) throw err;
        createFiles();
    });
} else {
    createFiles();
}
