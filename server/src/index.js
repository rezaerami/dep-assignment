const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const {
  getArticles,
  getMenus,
  getClients,
  getFooterLinks,
} = require('./endpoints');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve('server', 'public')));

app.get('/articles', async (req, res) => {
  res.send(getArticles(req));
});
app.get('/menus', async (req, res) => {
  res.send(getMenus());
});
app.get('/clients', async (req, res) => {
  res.send(getClients());
});
app.get('/footer-links', async (req, res) => {
  res.send(getFooterLinks());
});

// eslint-disable-next-line consistent-return
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server listening to`, port);
});
