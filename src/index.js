const http = require('http');
const app = require('./app');
const { logger } = require('./helpers');

app.server = http.createServer(app);

const server = app.listen(process.env.PORT, () => {
  const { address, port } = server.address();
  logger.info(`Started app listening at http://${address}:${port}`);
});

