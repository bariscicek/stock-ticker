module.exports = (error, req, res, next) => {
  switch (error.name) {
  case 'UnauthorizedError':
    res.status(403).send({
      errors: [{ name: 'UnauthorizedError', message: 'Invalid token.' }]
    });
    break;
  case 'SymbolNotFound':
    res.status(404).send({
      errors: [{
        name: 'SymbolNotFound',
        message: 'We can\'t find the symbol you\'re looking for.'
      }]
    });
    break;
  case 'UnprocessableRequest':
    res.status(422).send({ errors: error.errors });
    break;
  default:
    error.message = error.message.replace(/token=.*/, '***');
    res.status(500).send({ errors: [{ name: error.name, message: error.message }] });
    break;
  }
  next();
};

