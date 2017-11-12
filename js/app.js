// TODO: onready/onload

// log the runtime
var time = (config.frequency / config.step) * config.interval / 60 / 1000;
console.log('runtime: ' + time + ' minutes');

// initialize methods
var fullscreen = Fullscreen();
var strobe     = Strobe();
var tone       = Tone();

// bind the fullscreen functionality
fullscreen(config.strobe.target);

// begin
strobe(config);
tone(config);

// establish frequencies stepdowns
var interval;
var step = function () {

  // bounds-check frequency
  if (config.frequency <= 0.6) {
    clearInterval(interval);
    return;
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
