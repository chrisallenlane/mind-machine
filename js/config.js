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
