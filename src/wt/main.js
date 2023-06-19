import { Worker } from 'worker_threads'
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CpuCores = os.cpus();
const performCalculations = async () => {
    // Write your code here
    const workerPromises = CpuCores.map((value, idx) => {
      return new Promise((resolve, rejects) =>{ 
        const worker = new Worker(__dirname + '/worker.js',{
          workerData: {
            value: 10 + idx,
            path: '/worker.js',
          }
        })
        worker.on('message', (data) => resolve({status: 'resolved', data}))
        worker.on('error', () => rejects({status: 'error', data: null}))
      })
    })
    
    Promise.all(workerPromises)
    .then((values) => console.log(values));
};

await performCalculations();