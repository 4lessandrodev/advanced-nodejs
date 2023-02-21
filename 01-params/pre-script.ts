import { execSync } from 'child_process';

const result = execSync('node --version');

console.clear();
console.log(`${result.toString().trim()} from pre-script!\n`);
