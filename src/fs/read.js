import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import ERROR from '../consts/Error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';

const read = async () => {
    // Write your code here 
    fs.readFile(files + '/fileToRead.txt', { encoding: 'utf-8'})
    .then((data) => console.log(`Content from file:\n${data}`, ))
    .catch(() => {throw new Error(ERROR)});
};

await read();