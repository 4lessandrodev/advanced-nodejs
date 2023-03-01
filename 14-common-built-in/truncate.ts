import { readdirSync, stat, truncate } from 'node:fs';
import { join } from 'node:path';

const dirname = join(__dirname, 'duplicated');
const files = readdirSync(dirname);

/**
 * remove valores duplicados nos arquivos da pasta 'duplicated'
{
    "file": "sample",
    "age": 21
}
{
    "file": "sample",
    "age": 21
}
 */

files.forEach((file): void => {
    const filePath = join(dirname, file);
    stat(filePath, (err, stats): void => {
        if(err) throw err;

        truncate(filePath, Math.trunc(stats.size/2), (err): void => {
            if(err) throw err;
        });
    });
});
