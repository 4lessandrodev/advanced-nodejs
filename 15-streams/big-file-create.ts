import { appendFileSync } from 'node:fs';
import { join } from 'node:path';

const path = join('big-file');

let i = 0;
while(i < 2e7){

    const lorem = 'lorem ipsum info dol la sit fume lorem sweet dol';
    appendFileSync(path, lorem, 'utf8');
    i++;
}
