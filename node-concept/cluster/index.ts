import cluster from 'node:cluster';
import process from 'node:process';
import { availableParallelism } from 'node:os';
import http from 'node:http';

if (cluster.isPrimary) {
    console.log('Primary worker running in pid: ', process.pid);

    const totalCPUs = availableParallelism();
    console.log('Total CPUs available: ', totalCPUs);
    for (let i = 1; i <= totalCPUs; i++) 
        cluster.fork();

    cluster.on('fork', function(worker) {
        console.log('Worker', worker.isDead());
    });
    cluster.on('exit', function(worker) {
        console.log('Worker', worker.isDead());
    });
}
else {
    console.log('Worker process running in pid: ', process.pid);
    const server = http.createServer((req, res) => {
        console.log('Request handled by worker process: ', process.pid);
        res.write('I am fine');
        res.writeHead(200);
        res.end();
    })
    server.listen(3000);
}