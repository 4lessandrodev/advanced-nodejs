import repl from 'node:repl';

// custom auto complete
function completer(line: string): (string| string[])[] {
    const completions = '.help .break .clear .exit .load .save console.log('.split(' ');
    const hits = completions.filter((c): boolean => c.startsWith(line));
    // Show all completions if none found
    return [hits.length ? hits : completions, line];
}

const terminal = repl.start({
    useColors: true,
    preview: true,
    ignoreUndefined: true,
    prompt: "$ ",
    replMode: repl.REPL_MODE_STRICT,
    completer: completer, // overwrites the original completer,
});

// apply clear function to a global alias
terminal.context.clear = console.clear;
