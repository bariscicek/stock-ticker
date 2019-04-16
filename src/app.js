require('./env');
const express = require('express');

const app = express();

app.use(require('./middleware').logger);
app.use(require('./controllers'));
app.use(require('./middleware').errorLogger);
app.use(require('./middleware').errors);

module.exports = app;

