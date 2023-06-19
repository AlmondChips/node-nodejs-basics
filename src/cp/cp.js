import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    // Write your code here
  const childProcess = spawn('node', [__dirname +'/files/script.js', ...args]);

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgs1', 'someArgs2', 'someArgs3']);
