import fs, { constants }  from 'fs/promises';
import path from 'path';
import { env } from 'process';
import { fileURLToPath } from 'url';
import ERROR from '../consts/Error.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const folderToCopy = __dirname + '/files';
const folderCopy = folderToCopy + '_copy'

const copy = async () => {
    // Write your code here 
    fs.stat(folderToCopy)
    .then(() => {
      fs.mkdir(folderCopy)
      .then(async () => {
        const files = await fs.readdir(folderToCopy);
        files.forEach(file => {
          fs.copyFile(`${folderToCopy}/${file}`, `${folderCopy}/${file}`);
        })
      })
      .catch(() => {throw new Error(ERROR)})
    })
    .catch(() => {throw new Error(ERROR)})
};

await copy();