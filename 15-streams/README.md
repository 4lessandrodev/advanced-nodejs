# Streams

### Readable Streams

**Events**
- data
- end
- error
- close
- readable

**Functions**
- pipe(), unpipe()
- read(), unshift(), resume()
- pause(), isPaused()
- setEncoding()

### Writable Streams

**Events**
- drain
- finish
- error
- close
- pipe/unpipe

**Functions**
- write()
- end()
- cork(), uncork()
- setDefaultEncoding()