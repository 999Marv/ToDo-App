const express = require('express');
const logger = require('./middleware/logger');
const app = express();

app.use(express.json());
app.use(express.static('./public'));
app.use(logger);

app.get('/yo', (req, res) => {
  res.send('yo');
});

app.listen(3000);
