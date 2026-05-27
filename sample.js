const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.get('/hoge', (req, res) => {
  res.send(`<html><body><h1>User comment: ${req.query.comment || ''}</h1></body></html>`);
});
