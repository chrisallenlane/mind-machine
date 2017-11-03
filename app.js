var params = {

  // global parameters
  frequency: 0.5,

  // pulse parameters
  pulse: {
    target    : document.getElementsByTagName('main')[0],
    color     : '#00F',
  },

  // audio parameters
  tone: {
    type: 'sine',
    frequency: {
      left  : 20,
      right : 20.5,
    },
  },

};

// start the visual pulses
pulse(params);

// start the tones
var tone  = Tone(params.tone);
