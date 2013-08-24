/**
 * @venus-library mocha
 * @venus-include ../../node_modules/bond.js/bond.js
 * @venus-include ../../PbApi.js
 * @venus-code ../../Dreamer.js
 */
describe('Dreamer', function () {
  it('should execute in correct order', function (done) {
    var person = new Dreamer();
    person.sleep(500);
    person.sleep(100);
    person.mumble('foo fo fum');
    person.sleep(200);
    person.queue(function () {
      expect(person.log).to.eql([
        'Sleeping for 500ms...',
        'Wake up!',
        'Sleeping for 100ms...',
        'Wake up!',
        'foo fo fum',
        'Sleeping for 200ms...',
        'Wake up!'
      ]);
      done();
    });
  });
});
