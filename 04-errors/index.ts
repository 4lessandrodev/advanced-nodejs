process.on('exit', (code) => {
    // only sync methods. Event Loop do not works any more on this step
    console.log(`Algo deu errado no servidor: ${code}`);
});

process.on('uncaughtException', (error, origin) => {
    // do something with error. create a log file etc...
    console.log({ message: error.message, origin  });
    process.exit(1);
});

// keep process busy
process.stdout.resume();

// force an error
/** @ts-ignore */
console.log(myVar);
