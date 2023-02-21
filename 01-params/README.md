# Como buscar parâmetros

## Buscando parâmetros na cli do nodeJS

A cli do nodeJS tem várias opções a ser explorada

```sh

# lista de ajuda
$ node --help

# opções do motor javascript v8
$ node --v8-options | grep trace

# imprimir a variável de ambiente (usuário)
$ node -p "process.env" | grep USER

# imprimir os argumentos informado ao executar
$ node -p "process.argv.slice(1)" hello 42

```
## Debugar um arquivo .js

É possível debugar um arquivo usando o debug do navegador

```sh

# Execute o comando
$ node --inspect --inspect-brk ./index.js

# um link será exibido no terminal.
# abra o link em modo inspecionar (f12) e click no ícone devTools nodeJS
ws://127.0.0.1:9229/1f5d6b0f-86f8-4005-a9d1-9c71d0832842

```

## Execute um pre-script

É possível executar qualquer pre-script antes de iniciar um arquivo

```sh

# basta usar a opção -r e informar o caminho do script
$ node -r ./pre-script ./index.js

```

## Monitorar arquivos

É possível monitorar modificações de um arquivo com o filesystem com a função:

`watchFile` saiba mais analisando o arquivo `watch.ts`
