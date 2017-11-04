// hide the address bar on mobile
window.scrollTo(0, 1);

// app configs
var params = {

  // global parameters
  frequency: 5,

  // pulse parameters
  pulse: {
    target : document.getElementsByTagName('main')[0],
    color  : '#008',
  },

  // audio parameters
  tone: {
    type      : 'sine',
    frequency : 50, // base tone in hz
  },

};

// start the visual pulses
pulse(params);

// start the tones
tone(params);
