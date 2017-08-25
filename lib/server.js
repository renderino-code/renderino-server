const express = require('express');

const render = require('./index');
const utils = require('./utils');

const app = module.exports = express();


app.get('/render', (req, res, next)  => {
  let url = utils.getUrl(req.query.url);

  console.log('Request for url %s', url);

  render.getContent(url)
    .then((content)  => {
      res.send(content);
    })
    .catch((err)  => {
      console.log(err);
    });  
});


app.start = ()  => {
  console.log('Started');
  app.listen(3000);
};

