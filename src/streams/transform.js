import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = __dirname + '/files';

const transform = async () => {
    // Write your code here 
    const reverse = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join('').replace(/\r?\n|\r/g, ""))
      }
    })

    reverse.on('data', (transformedData) => {
      stdout.write(`Your reversed text: ${transformedData}\n\n`);
      stdout.write(`Type new text (or press Ctrl + C to exit): `);
    })

    stdout.write('Write your text: ');
    stdin.pipe(reverse);
};

await transform();