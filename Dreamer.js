function Dreamer() {
  PbApi.call(this);
  this.log = [];
}

Dreamer.prototype = Object.create(PbApi.prototype);
Dreamer.prototype.constructor = Dreamer;

Dreamer.prototype.sleep = function (time) {
  var log = this.log;
  time = time || 100;

  this.queue(function (done) {
    log.push('Sleeping for ' + time + 'ms...');
    console.log(log[log.length - 1]);


    setTimeout(function () {
      log.push('Wake up!');
      console.log(log[log.length - 1]);
      done();
    }, time);
  });
};

Dreamer.prototype.mumble = function (words) {
  var log = this.log;

  this.queue(function () {
    log.push(words);
    console.log(words);
  });
};

