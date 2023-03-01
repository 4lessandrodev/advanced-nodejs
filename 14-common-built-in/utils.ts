import util from 'node:util';

util.format({ hey: "message" })
"{ hey: 'message' }"

util.inspect({})
'{}'

util.inspect({ hello: "world"})
"{ hello: 'world' }"

util.inspect({ hello: "world"}, { depth: 1})
"{ hello: 'world' }"

util.inspect({ hello: "world"}, { depth: 0})
"{ hello: 'world' }"

util.inspect({ hello: "world", obj: { hey: { there: "hy"}}}, { depth: 0})
"{ hello: 'world', obj: [Object] }"

util.inspect({ hello: "world", obj: { hey: { there: "hy"}}}, { depth: 1})
"{ hello: 'world', obj: { hey: [Object] } }"

util.inspect({ hello: "world", obj: { hey: { there: "hy"}}}, { depth: 2})
"{ hello: 'world', obj: { hey: { there: 'hy' } } }"
