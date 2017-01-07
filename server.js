const express = require('express');
const app = express();
const backpat = require('backpat').backpat;

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('favicon.ico', (req, res) => {
  res.sendFile(`${__dirname}/favicon.ico`);
});

// app.get('backpat', (req, res) => {
//   backpat().then(res.send.bind(res));
// });

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
