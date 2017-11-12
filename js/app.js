// global parameters
var params = {

  // strobe frequency
  frequency : 8,

  // time spent at each frequency
  interval  : 1.5 * 60 * 1000, // 1.5 minutes

  // frequency to step down per step (in hz)
  step      : 0.5,

  // strobe parameters
  strobe: {
    target : document.getElementsByTagName('main')[0],
    color  : '#00F',
  },

  // audio parameters
  tone: {
    type      : 'sine',
    frequency : 150,
  },
};

// app state vars
var state = {
  fullscreen: false,
};

// put the app in fullscreen mode on click
params.strobe.target.onclick = function () {

  // if fullscreen is supported
  if (params.strobe.target.webkitRequestFullscreen) {

    // exit fullscreen if in fullscreen
    if (state.fullscreen) {
      document.webkitExitFullscreen();
    }

    // otherwise, enter fullscreen if not fullscreened
    else {
      params.strobe.target.webkitRequestFullscreen();
    }

    // change the screen state flag
    state.fullscreen = !state.fullscreen;
  }

};

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
