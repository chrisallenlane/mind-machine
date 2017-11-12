// log the runtime
var time = (config.frequency / config.step) * config.interval / 60 / 1000;
console.log('runtime: ' + time + ' minutes');

// initialize methods
var strobe     = Strobe();
var tone       = Tone();

// starts the session
var start = function () {
  strobe(config);
  tone(config);

  // establish frequencies stepdowns
  var interval;
  var step = function () {

    // bounds-check frequency
    if (config.frequency <= config.step) {
      // assert that we reach 0.5hz regardless of the step value
      config.step = 0.5;

      // when we've hit 0.5hz, remove this interval timer
      clearInterval(interval);
    }

    // step down the "master" frequency
    config.frequency      -= config.step;
    config.tone.frequency -= config.frequency;

    // and derive new specific frequencies
    strobe(config);
    tone(config);
  };

  // step down at specified intervals
  interval = setInterval(step, config.interval);
};

// bind the fullscreen functionality
Fullscreen(config.strobe.target);

// bind the app start
Start(config.strobe.target, start);
