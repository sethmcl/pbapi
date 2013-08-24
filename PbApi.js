function PbApi() {
  this.backingPromise = bond();
  this.backingPromise.fulfill();
}

PbApi.prototype.queue = function (fn) {
  this.backingPromise = this.backingPromise.then(function () {
    var b;

    if (fn.length === 0) {
      return fn();
    } else {
      b = bond();

      function done() {
        b.fulfill();
      }

      fn(done);

      return b;
    }
  }, function (err) {
    console.log('error');
    throw err;
  });
};
