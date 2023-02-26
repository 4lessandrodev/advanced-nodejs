import { argv } from "process";

const isRunningFromCli = require.main === module;

if(!isRunningFromCli){
    // importing on check.ts
    // import some from './some-where';
    console.log('You are importing the file on: ', require.main?.filename);
} else {
    // node from-where.js
    console.log('You are running node cli: ', argv[1]);
}
