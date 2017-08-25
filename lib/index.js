var render = module.exports = {};

const puppeteer = require('puppeteer');

render.getContent = (url) => {
  let browser, page, response;

  return puppeteer.launch()
    .then((_browser) => {
      browser = _browser;
      return browser.newPage();
    })
    .then((_page) => {
      page = _page;
      return page.goto(url, {waitUntil: 'networkidle'/*, networkIdleTimeout: 4000*/});
    })
    .then((_response) => {
      response = _response;
      return page.evaluate(() => {
        return new XMLSerializer().serializeToString(document);
      });
    })
    .then((content) => {
      browser.close();
      return content;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};