import fs, { constants }  from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files'

const create = async () => {
  // Write your code here 
  const freshFilePath = files + '/Fresh.txt';
  fs.open(freshFilePath, 'wx')
  .then(() => {
    fs.writeFile(freshFilePath, 'I am fresh and young')
  })
  .catch((err) => {throw new Error("FS operation failed")})

};

await create();