// index.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// VULNERABLE CODE FOR DEMO
app.get('/search', (req, res) => {
  let searchTerm = req.query.q;
  // This line is insecure!
  res.send('<h1>You searched for: ' + searchTerm + '</h1>'); 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
