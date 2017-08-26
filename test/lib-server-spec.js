describe('Renderino test for server library file', () => {

  const portfinder = require('portfinder');
  let port;
  let server;

  beforeEach((done) => {
    server = require('../lib/server.js');
    return portfinder.getPortPromise()
      .then((_port) => {
        port = _port;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it('should return renderino library',  () => {
    expect(server).toBeDefined();
  });

  describe('test start method', () => {

    it('the port should be available',  (done) => {
      const port_used = require('tcp-port-used');

      port_used.check(port)
        .then((inUse) => {
          expect(inUse).toBe(false);
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });


    it('the port should be NOT available after server start',  (done) => {
      const port_used = require('tcp-port-used');

      server.start(port);

      port_used.check(port)
        .then((inUse) => {
          expect(inUse).toBe(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .done(() => {
          done();
        });
    });

  });

});