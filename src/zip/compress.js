import { stdin, stdout } from 'node:process';
import { createGzip } from 'node:zlib';

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { write } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';
const toCompress = files + '/fileToCompress.txt';
const compressTo = files + '/archive.gz';

const compress = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(toCompress);
    const writeStream = fs.createWriteStream(compressTo);

    writeStream.on('close', () => console.log('File has been succsessfully compressed!'));
    readStream.pipe(createGzip()).pipe(writeStream);
};

await compress();