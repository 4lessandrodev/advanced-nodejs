# Criando um REPL customizado

É possível interagir com a linguagem javascript pelo terminal

basta digitar

```sh

$ node

```

No entanto é possível customizar o comportamento do interpretador

```ts

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

```

Veja mais nos arquivos `repl.ts` e `crepl.ts`
