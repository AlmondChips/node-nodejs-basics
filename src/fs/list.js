import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import ERROR from '../consts/Error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';

const list = async () => {
    // Write your code here 
    fs.stat(files).then(async (data) => {
      const filesList = await fs.readdir(files);
      console.log('Files in folder: ', filesList);
    }).catch(() => {throw new Error(ERROR)})
};

await list();