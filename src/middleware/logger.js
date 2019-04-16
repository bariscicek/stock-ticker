const winston = require('winston');
const expressWinston = require('express-winston');

const logger = expressWinston.logger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.prettyPrint()
  ),
  meta: true,
  expressFormat: true
});

const errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.prettyPrint()
  )
});

module.exports = {
  logger,
  errorLogger
};

