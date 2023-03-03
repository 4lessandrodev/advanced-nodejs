# Child

Exibir execução em background

```sh

$ ps -ef | grep timer

```

Executar bench mark no servidor

```sh


$ ab -c 10 -n 1000 http://localhost:3000/

# Em modo único nó
# Requests per second:    137.12 [#/sec] (mean)

# Em modo cluster
# Requests per second:    737.43 [#/sec] (mean)

```
