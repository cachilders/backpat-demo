const express = require('express');
const backpat = require('backpat').backpat;

const deps = express();

deps.get('/', (req, res) => {
  backpat().then(res.send.bind(res));
});

const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));
app.use(express.static('static'));
app.use('/images', express.static('static/images'));
app.use('/deps', deps);

app.get('/favicon.ico', (req, res) => {
  res.sendFile(`${__dirname}/favicon.ico`);
});

app.get('/deps', (req, res) => {
  backpat().then(res.send.bind(res));
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
