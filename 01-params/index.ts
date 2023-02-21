function message(msg: string): void {
    console.info(msg);
}

function sum(a: number, b: number): number {
    return a + b;
}

function main(argv: string[], argv0: string): void {
    message('running...');
    const a = 21;
    const files = argv.slice(0, 2);
    files.forEach(message);
    message('argv received after files: ' + argv.slice(2));
    const total = sum(a, a);
    message(`${a} + ${a} = ${total}`);
    message(`argv0: ${argv0}`);
}
main(process.argv, process.argv0);
