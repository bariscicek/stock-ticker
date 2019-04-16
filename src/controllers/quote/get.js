const QuoteServiceDAO = require('../../dao/quote_service');

module.exports = [
  async (req, res, next) => {
    try {
      const { symbol } = req.params;

      if (!symbol) {
        return next({ name: 'SymbolNotFound' });
      }

      const quote = await new QuoteServiceDAO().getSymbolQuote(symbol);

      return res.status(200).send(quote);
    }
    catch (err) {
      return next(err);
    }
  }
];

