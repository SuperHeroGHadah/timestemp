/******************************************************
 * Timestamp Microservice - freeCodeCamp compatible
 ******************************************************/
'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// Root message (optional, helpful for live demo)
app.get('/', (req, res) => {
  res.type('text').send('Timestamp Microservice is running. Try /api or /api/2015-12-25 or /api/1451001600000');
});

// Core endpoint
app.get('/api/:date?', (req, res) => {
  const { date } = req.params;

  let dateObj;
  if (!date) {
    dateObj = new Date();
  } else {
    // If all digits -> treat as UNIX ms
    if (/^\d+$/.test(date)) {
      // parse as integer milliseconds
      const ms = parseInt(date, 10);
      dateObj = new Date(ms);
    } else {
      // parse string (ISO, RFC, etc.)
      dateObj = new Date(date);
    }
  }

  if (dateObj.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  return res.json({
    unix: dateObj.getTime(),
    utc: dateObj.toUTCString(),
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Your app is listening on port ' + port);
});
