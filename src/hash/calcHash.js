import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';
const fileToCalculateHashFor = files + '/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    // Write your code here 
    fs.readFile(fileToCalculateHashFor)
    .then(data => {
      const hash = crypto.createHash('sha256');
      hash.update(data);
      console.log(`Hash of the 'fileToCalculateHashFor' as hex: `, hash.digest('hex'));
    })
};

await calculateHash();