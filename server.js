/* eslint no-param-reassign: "off" */
/* eslint camelcase: "off" */

require('dotenv').config({ silent: true });
const http = require('http');
const express = require('express');

const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

const app = express();

const path = require('path');
const proxy = require('express-http-proxy');
const url = require('url');

const PORT = process.env.PORT || 8080;
const API_SERVER_URL = process.env.API_SERVER_URL;
// http.listen(process.env.SOCKET_PORT);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/v1/users', proxy(API_SERVER_URL, {
  forwardPath: (req) => `/v1/users${url.parse(req.url).path}`,
}));

app.use('/v1/vehicles', proxy(API_SERVER_URL, {
  forwardPath: (req) => `/v1/vehicles${url.parse(req.url).path}`,
}));

app.use('/v1/clients', proxy(API_SERVER_URL, {
  forwardPath: (req) => `/v1/clients${url.parse(req.url).path}`,
}));

app.use('/v1/fees', proxy(API_SERVER_URL, {
  forwardPath: (req) => `/v1/fees${url.parse(req.url).path}`,
}));

app.use('/v1/payments', proxy(API_SERVER_URL, {
  forwardPath: (req) => `/v1/payments${url.parse(req.url).path}`,
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const server = new http.Server(app);

server.listen(PORT, err => {
  if (err) {
    console.error(err);
  }
  console.warn(`Listening at ${process.env.PORT}`);
});
