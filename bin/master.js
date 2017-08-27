const cluster = require('cluster');
const Logger = require('logger');
const logger = new Logger();

const CPUCount = require("os").cpus().length;

logger.log(`Master ${process.pid} is running`);

cluster.on('disconnect', (worker, code, signal) => {
    logger.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
});

cluster.on('online', worker => {
    logger.log(`Worker ${worker.process.pid} is running`);
});

for (let i = 0; i < CPUCount; i++) {
    cluster.fork();
}