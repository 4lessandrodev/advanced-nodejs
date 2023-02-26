import EventEmitter from 'node:events';

// Example #01
class Event extends EventEmitter { };

const emitter = new Event();

emitter.on('count', (limit: number) => {
    if (typeof limit !== 'number') return;
    let i = 0;
    while (i < limit && limit > 0) {
        console.log(i);
        i++;
    }
});

emitter.emit('count', 10);


// Exemple #02
class Custom extends EventEmitter {
    execute(task: () => void) {
        this.emit('begin');
        task();
        this.emit('end');
    }
}

const custom = new Custom();

custom.on('begin', () => console.log('Starting...'));
custom.on('end', () => console.log('Ending...'));
custom.execute(() => console.log('Executing the task...'));


// Example #3 multiple listeners
const event = new Event();

event.on('event', (str: string) => {
    console.log('Chars: ', str);
});

event.on('event', (str: string) => {
    try {
        console.log('Length: ', str.length.toLocaleString());
    } catch (error) {
        event.emit('uncaughtException', (error));
    }
});

// always will be executed first
event.prependListener('event', (str: string) => {
    console.log('Is string: ', typeof str === 'string');
});

event.emit('event', 'hello');
event.once('uncaughtException', (error: Error) => {
    console.log(error.message);
    process.exit(1);
});
event.emit('event', 10);
