const {URL} = require('url');
const utils = module.exports;

utils.getUrl = (url) => {
  
  url = new URL(url);
  let retrive_url = new URL(url);

  return url.toString();
};