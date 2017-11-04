// ratio of visual frequency to audio hertz
// TODO: this might be better as a log or something
var ratio = 40;

// app configs
var params = {

  // global parameters
  frequency: 13,

  // pulse parameters
  pulse: {
    target : document.getElementsByTagName('main')[0],
    color  : '#00F',
  },

  // audio parameters
  tone: {
    type      : 'sine',
    frequency : 10 * ratio   , // base tone in hz
  },

};

// begin
pulse(params);
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
  params.tone.frequency  = ratio * params.frequency;

  // and derive new specific frequencies
  pulse(params);
  tone(params);
};

// step down every minute
interval = setInterval(step, 1.5 * 60 * 1000);
