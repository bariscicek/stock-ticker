const supertest = require('supertest');
const app = require('../../src/app');
const { ApiNock } = require('../_helpers/iex_nock');

const symbol = 'aapl';
const unknownSymbol = 'aaplas';

describe('controllers/quote', () => {
  describe('#get', () => {
    it('should be success for known symbol', () => {
      ApiNock.getSymbolQuote();
      const request = supertest(app)
        .get(`/quote/${symbol}`)
        .expect(200);

      return request;
    });

    it('should be failure for unknown symbol', () => {
      ApiNock.getSymbolQuoteFail();
      const request = supertest(app)
        .get(`/quote/${unknownSymbol}`)
        .expect(404);
      return request;
    });
  });
});

