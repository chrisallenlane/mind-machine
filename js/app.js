// log the runtime
var time = (params.frequency / params.step) * params.interval / 60 / 1000;
console.log('runtime: ' + time + ' minutes');

// begin
strobe(params);
tone(params);

// establish frequencies stepdowns
var interval;
var step = function () {

  // bounds-check frequency
  if (params.frequency <= 0.6) {
    clearInterval(interval);
    return;
  }

  // step down the "master" frequency
  params.frequency      -= params.step;
  params.tone.frequency -= params.frequency;

  // and derive new specific frequencies
  strobe(params);
  tone(params);
};

// step down at specified intervals
interval = setInterval(step, params.interval);
