const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const urls = require('./db/urls');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(express.static('./public'));

app.get('/:name', async (req, res) => {
  const puny = await urls.find(req.params.name);
  if (puny) {
    res.redirect(puny.url);
  } else { 
    res.redirect(`/404.html?name=${req.params.name}`);
  }
});

app.post('/api/puny', async (req, res) => {
  console.log(req.body);
  try {
    const url = await urls.create(req.body);
    res.json(url);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});