import { readdirSync, watch } from "node:fs";
import { join } from "node:path";

const dirname = join('watch');
const files = readdirSync(dirname);
let lastModify = Date.now();

const Log = (message: string) => console.log(message);

watch(dirname, (eventType, fileName) => {
    const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo'});

    if(eventType === 'rename'){
        const index = files.indexOf(fileName);
        if(index >= 0){
            files.splice(index, 1);
            Log(`${fileName} foi removido ${now}`);
            return;
        }

        files.push(fileName);
        Log(`${fileName} foi adicionado ${now}`);
        return;
    }

    // notify if diff is greater than 1 sec.
    if(lastModify > (Date.now() - 1000)) return;
    Log(`${fileName} foi modificado ${now}`);
    lastModify = Date.now();
});
