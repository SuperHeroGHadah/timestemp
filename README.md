# Timestamp Microservice (freeCodeCamp)

Endpoints:
- `GET /api` → current time
- `GET /api/:date` where `:date` is either an ISO date like `2015-12-25` or a UNIX timestamp in milliseconds like `1451001600000`.

Responses:
```json
{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
```

Invalid example:
`/api/this-is-bad` → `{ "error": "Invalid Date" }`

## Run locally
```bash
npm install
npm start   # http://localhost:3000
```

## Deploy (Render)
1. Push this folder to a new GitHub repo.
2. Create a **Web Service** on Render from your repo.
3. Build command: `npm install`
4. Start command: `npm start`
5. Copy the live URL into freeCodeCamp "Solution Link".
6. Put your GitHub repo URL into "Source Code Link".
