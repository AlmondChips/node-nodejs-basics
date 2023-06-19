import { stdout } from 'node:process';
import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';

const read = async () => {
    // Write your code here 
    const stream = fs.createReadStream(files + '/fileToRead.txt');
    stream.on('data', (data) => {
      stdout.write(data + '\n\n');
    })
};

await read();