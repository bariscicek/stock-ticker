const nock = require('nock');

class ApiNock {
  constructor(url) {
    this.url = url;
  }

  sNock() {
    return nock(this.url);
  }

  getSymbolQuote(options = {}) {
    const { code = 200, data = {
      'symbol': 'AAPL',
      'companyName': 'Apple, Inc.',
      'calculationPrice': 'close',
      'open': 198.53
    } } = options;

    this.sNock().get('/stock/aapl/quote')
      .query(true)
      .reply(code, data);
  }
  getSymbolQuoteFail(options = {}) {
    const { code = 404, data = { } } = options;

    this.sNock().get('/stock/aaplas/quote')
      .query(true)
      .reply(code, data);
  }
}

module.exports = {
  ApiNock: new ApiNock(process.env.IEX_CLOUD_API_URL)
};

