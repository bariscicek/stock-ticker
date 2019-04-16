const fetch = require('node-fetch');

const apiUrl = process.env.IEX_CLOUD_API_URL;
const token = process.env.IEX_CLOUD_SECRET_TOKEN;

class QuoteServiceDAO {
  constructor() {
    this.apiUrl = apiUrl;
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  joinUrl(...parts) {
    return parts
      .map(part => (part.substr(-1) === '/' ? part.substr(0, part.length - 1) : part))
      .filter(i => i.length !== 0)
      .join('/')
      .concat(`?token=${token}`);
  }

  async apiRequest(props) {
    try {
      const headers = { ...this.headers, ...props.headers };
      const body = JSON.stringify(props.data);

      const url = this.joinUrl(this.apiUrl, props.url);
      const request = await fetch(url, {
        mode: 'cors',
        method: props.method,
        headers,
        body
      });

      await this.handleErrors(request);

      return request.json();
    }
    catch (err) {
      throw err;
    }
  }

  async handleErrors (request) {
    if (!request || !request.status) {
      throw new Error('Invalid request');
    }

    if (request.status === 404) {
      const e = new Error();
      e.name = 'SymbolNotFound';
      throw e;
    }
    else if (request.status === 403) {
      const e = new Error();
      e.name = 'UnauthorizedError';
      throw e;
    }
    else if (request.status === 422) {
      const e = new Error();
      e.name = 'UnprocessableRequest';
      throw e;
    }
    else if (request.status !== 200) {
      const errorText = await request.text();
      const e = new Error(errorText);
      throw e;
    }
  }

  getSymbolQuote(symbol) {
    const apiSymbol = String(symbol).toLowerCase();
    return this.apiRequest({ url: `stock/${apiSymbol}/quote`, method: 'GET' });
  }
}

module.exports = QuoteServiceDAO;
