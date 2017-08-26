const express = require('express');

const render = require('./index');
const utils = require('./utils');

const app = module.exports = express();


app.get('/render', (req, res, next)  => {
  let url = utils.getUrl(req.query.url);

  console.log('Request for url %s', url);

  return render.getContent(url)
    .then((content)  => {
      return res.send(content);
    })
    .catch((err)  => {
      console.log(err);
    });  
});


app.start = (port)  => {
  app.port = port;
  return app.listen(port);
};

// TODO: find a way to stop express server
// app.stop = () => {
//   return app.listen(app.port).close();
// };

