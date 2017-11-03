console.log('newer 2');

var params = {

  // visual
  pulse: {
    //color     : '#00F',
    color     : '#F00',
    frequency : 4,
  },

  // audio
  tone: {
    type: 'sine',
    frequency: {
      //left  : 60,
      //right : 60.5,
      left  : 20,
      right : 20.5,
    },
  },

};

// start the visual pulses
//var pulse = Pulse(params.pulse);

// start the tones
var tone  = Tone(params.tone);
