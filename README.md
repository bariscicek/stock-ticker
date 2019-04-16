# stock-ticker
Stock ticker getter using IEX Cloud api service.

## Install

Just run docker build inside the directory after clonning this repository. 
```bash
docker build ./
```

After the image is generated port 3000 will exposed on run. You can run your image using
the following command:
```bash
docker run -p 3000:3000/tcp {IMAGE_ID} 
```

Stock quotes will be accessible from http://localhost:3000/quote/{SYMBOL} url.

## Configuration

Following environment variables are needed for API access:
```
IEX_CLOUD_SECRET_TOKEN={token}
IEX_CLOUD_API_URL=https://cloud.iexapis.com/beta/
```

Working examples for token and url already embedded inside Dockerfile, for personalized access, a new token can be
acquired from https://iexcloud.io/. Free plan is enough for getting quotes with limited request.

## API

* **Url**
`/quote/:symbol`

* **Method**
`GET`

* **Success Response**
    * **Code:** `200`
    * **Content:** `{ "symbol": "Symbol", "companyName": "Symbol Inc.", "close": 123, ... }`

* **Error Response**
    * **Code:** `403 UnauthorizedError`
    * **Code:** `404 SymbolNotFound`
    * **Code:** `422 UnprocessableRequest`
    * **Code:** `500 Others`
