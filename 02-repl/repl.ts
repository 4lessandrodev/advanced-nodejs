import repl from 'node:repl';

const terminal = repl.start({
    useColors: true,
    preview: true,
    ignoreUndefined: true,
    prompt: "$ ",
    replMode: repl.REPL_MODE_STRICT
});

// apply clear function as global alias
terminal.context.clear = console.clear;
