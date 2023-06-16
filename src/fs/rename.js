import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import ERROR from '../consts/Error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';

const rename = async () => {
    // Write your code here
    const properFile = files + '/properFilename.md';
    fs.stat(properFile)
    .catch(() => {
      fs.rename(files + '/wrongFilename.txt', properFile)
      .catch(() => {throw new Error(ERROR)});
    })
    .then(()=> {throw new Error(ERROR)});
};

await rename();