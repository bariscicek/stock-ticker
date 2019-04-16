# stock-ticker
Stock ticker getter using IEX Cloud api

## Install

Just run docker build after clonning this repository. 
```bash
docker build ./
```

After image is generated port 3000 is exposed. You can run your image using
following command:
```bash
docker run -p 3000:3000/tcp {IMAGE_ID} 
```

Stock quotes can be accessible from http://localhost:3000/quote/{SYMBOL} url.

## Configuration

Following environment variables are needes for API access:
```
IEX_CLOUD_SECRET_TOKEN={token}
IEX_CLOUD_API_URL=https://cloud.iexapis.com/beta/
```

Working examples aready embedded inside Dockerfile, for personalized access token can be
acquired from iexapis.com. 

## API

* **Url**
`/quote/:symbol`

* **Method**
`GET`

* **Success Response**
    * **Code:** `200`
    * **Content:** `{ symbol: Symbol, quote: 123, ... }`

* **Error Response**
    * **Code:** `403 UnauthorizedError`
    * **Code:** `404 SymbolNotFound`
    * **Code:** `422 UnprocessableRequest`
    * **Code:** `500 Others`
