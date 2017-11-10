// global parameters
var params = {

  // strobe frequency
  frequency : 8,

  // ratio of visual frequency to audio hertz
  // TODO: this might be better as a log or something
  ratio     : 100,

  // time spent at each frequency
  interval  : 3 * 60 * 1000, // 3 minutes

  // frequency to step down per step (in hz)
  step      : 0.5,
};

// strobe parameters
params.strobe = {
  target : document.getElementsByTagName('main')[0],
  color  : '#00F',
};

// audio parameters
params.tone = {
  type      : 'sine',
  frequency : params.frequency * params.ratio, // base tone in hz
};

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
  params.tone.frequency  = params.ratio * params.frequency;

  // and derive new specific frequencies
  strobe(params);
  tone(params);
};

// log the runtime
var time = (params.frequency / params.step) * params.interval / 60 / 1000;
console.log('runtime: ' + time + ' minutes');

// step down at specified intervals
interval = setInterval(step, params.interval);
