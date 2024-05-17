<h1 align="center">URL Shortener API</h1>

<div align="center">
  
  ![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY290c2NvcGU2cGNuM2hsYmZnb2M2OWJuOGJnZjRjazQxMmVpenhwaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qyIf0prdUCyla2WbEv/giphy.gif)
</div>

This project implements a URL shortener API built with TypeScript and NestJS. It allows users to shorten long URLs and retrieve the original URL from the shortened version.

<h2>Features</h2>

- Shorten URLs
- Redirect to original URL from shortened version

<h2>Getting Started</h2>
<h3>Prerequisites:</h3>

- Node.js installed

<h2>Running the Application:</h2>

1. Clone this repository.
2. Run `npm install`
3. Run the application using:

```bash
$ npm run start
```

<h1>API Endpoint: (/docs to open Swagger UI)</h1>

- <b>Shorten a URL:</b>

  - <b>Method</b>: POST
  - <b>URL</b>: /shorten
  - <b>Request Body</b>:
    - <b>url</b>: The original URL to be shortened (JSON format)
  - <b>Response</b>:
    - <b>On success</b>: JSON object containing the shortened URL
    - <b>On failure</b>: Error message

- <b>Redirect to original URL:</b>

  - <b>Method</b>: GET
  - <b>URL</b>: /{shortened_url} (Replace {shortened_url} with the actual shortened URL)
  - <b>Response</b>:
    - Redirects to the original URL

<h2>Configuration:</h2>

Create `.env` file in project root folder and see the `.example.env` file.

<h2>Technologies Used</h2>

- Typescript 5.1.3
- TypeORM
- SQLite
- Swagger
