var params = {

  // pulse parameters
  pulse: {
    target    : document.getElementsByTagName('main')[0],
    color     : '#00F',
    frequency : 0.5,
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
pulse(params.pulse);

// start the tones
var tone  = Tone(params.tone);
