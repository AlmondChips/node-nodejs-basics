import { createUnzip } from 'node:zlib';

import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';
const toDecompress = files + '/archive.gz';
const DecompressTo = files + '/fileToCompress.txt';

const decompress = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(toDecompress);
    const writeStream = fs.createWriteStream(DecompressTo);

    writeStream.on('close', () => {
      fs.unlink(toDecompress,
         () => console.log('File has been succsessfully decompressed!'));
    });

    readStream.pipe(createUnzip()).pipe(writeStream);
};

await decompress();