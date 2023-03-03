function hardComputation() {
    let sum = 0;
    let i = 0;
    while (i < 8e9) {
        sum += i;
        i++;
    }
    return sum;
}

process.on('message', (args) => {
    console.log(args);
    const result = hardComputation();
    process.send(result.toString());
});
