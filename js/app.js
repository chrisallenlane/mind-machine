// global parameters
var params = {

  // strobe frequency
  frequency : 10,

  // ratio of visual frequency to audio hertz
  // TODO: this might be better as a log or something
  ratio     : 40,
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
  if (params.frequency <= 0.5) {
    clearInterval(interval);
    return;
  }

  // step down the "master" frequency
  params.frequency      -= 0.5;
  params.tone.frequency  = params.ratio * params.frequency;

  // and derive new specific frequencies
  strobe(params);
  tone(params);
};

// step down every minute
//interval = setInterval(step, 1.5 * 60 * 1000);
interval = setInterval(step, 1.5 * 60 * 100);
