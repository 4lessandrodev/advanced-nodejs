import { watchFile } from 'node:fs';
import { join } from 'node:path';

const dir = join(__dirname, 'README.md');

watchFile(dir, (current, previous): void => {
    const opt = { timeZone: 'America/Sao_Paulo' } satisfies Intl.DateTimeFormatOptions;
    return console.log(`README.md changed at: ${current.ctime.toLocaleString('pt-BR', opt)} - ${current.blksize / 1024}K`);
});
