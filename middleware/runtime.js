const Logger = require('logger');
const logger = new Logger();

module.exports = (req, res, next) => {
    const beginTime = Date.now();
    res.on('finish', () => {
        const d = Date.now();
        logger.log(`${req.method} ${res.statusCode}  url: "${req.url}" time: ${d - beginTime} ms`);
    });
    next();
};