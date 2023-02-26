import { randomUUID } from "node:crypto";
import EventEmitter from "node:events";
import readLine from 'node:readline';

interface Data {
    uid: string;
    args: string[];
}

export class Server extends EventEmitter {
    private users: Data[] = [];
    constructor(client: EventEmitter) {
        super();
        this.users = [];
        process.nextTick((): void => {
            console.log('Digite um comando, ou help para ajuda.')
        });
        client.on('command', (command, args) => {
            switch(command){
                case 'list':
                case 'help':
                case 'add':
                case 'delete':
                case 'exit':
                    /** @ts-ignore */
                    this[command](args);
                    break;
                default:
                    this.emit('response', 'Comando inválido');
            }
        });
    }

    help(): void {
        this.emit('response', 'list, add args, help, delete uid, exit');
    }

    list(): void {
        this.emit('response', this.users);
    }

    delete(args: string[]): void {
        const id = args[0];
        this.users = this.users.filter((u): boolean => u.uid !== id);
        this.emit('response', 'deleted!');
    }

    add(args: string[]): void {
        const user = { uid: randomUUID(), args };
        this.users.push(user)
        this.emit('response', user);
    }

    exit(): void {
        process.exit(0);
    }
};


/** Client */
export class Client extends EventEmitter { };

export const ui = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const client = new Client();
const server = new Server(client);
server.on('response', (args) => {
    console.log('Resp: ', args);
});

ui.on('line', (input: string) => {
    const [command, ...args] = input.split(' ');
    client.emit('command', command, args);
});
