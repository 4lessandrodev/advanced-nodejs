# Event Loop

Operações lentas bloqueiam o event loop. como por exemplo um loop que demora ser finalizado.

---

![Alt text](event-loop.png)

---npm start----> ( event loop ) ---process.exit--->

## V8
Interpretador javascript

### heap
Memória, variáveis, funções...

### call stack
Execução...  Elementos ou funções que são adicionadas ao processo para ser executada ou salvo na memoria. Por ser single-thread só pode executar uma coisa por vez.

## Event Loop
Loop de execução. Joga as funções da "queue" à call stack quando a "call stack" está vazia.

### queue
Fila de callbacks* execuções que precisam ser adicionadas à stack quando um determinado evento ocorrer.
