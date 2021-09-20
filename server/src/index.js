const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  getArticles,
  getMenus,
  getClients,
  getFooterLinks,
} = require('./endpoints');

const app = express();

const corsOptions = {
  origin: '*',
  methods: '*',
  preflightContinue: false,
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve('server', 'public')));
app.use(cors(corsOptions));

app.get('/articles', (req, res) => {
  res.send(getArticles(req));
});
app.get('/menus', (req, res) => {
  res.send(getMenus());
});
app.get('/clients', (req, res) => {
  res.send(getClients());
});
app.get('/footer-links', (req, res) => {
  res.send(getFooterLinks());
});

module.exports = app;
