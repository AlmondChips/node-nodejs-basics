import { stdin, stdout } from 'node:process';
import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';

const write = async () => {
    // Write your code here 
    const stream = fs.createWriteStream(files + '/fileToWrite.txt');

    stream.on('open', () => console.log("You can write only one message before Enter:\n"));

    stdin.on('data', (data) => {
      stream.write(data);
      stdout.write('\n');
      process.exit();
    })
};

await write();