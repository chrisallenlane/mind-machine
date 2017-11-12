// global parameters
var config = {

  // strobe frequency
  frequency : 15,

  // time spent at each frequency
  interval  : 3 * 60 * 1000, // 3 minutes

  // frequency to step down per step (in hz)
  step      : 2,

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
