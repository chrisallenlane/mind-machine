// TODO: play tones on appropriate audio channels, if possible

// one context per document
var context = new (window.AudioContext || window.webkitAudioContext)();

// left and right audio channels
var left  = null;
var right = null;

// tone-generation function
var tone = function (params) {

  // if a tone was already being played, stop it
  if (left !== null) {
    left.stop();
    right.stop();
  }

  // assign or re-assign the audio channels
  left  = context.createOscillator();
  right = context.createOscillator();

  // left audio channel
  left.type            = params.tone.type;
  left.frequency.value = params.tone.frequency;
  left.connect(context.destination);
  left.start();

  // right audio channel
  right.type            = params.tone.type;
  right.frequency.value = params.tone.frequency + params.frequency;
  right.connect(context.destination);
  right.start();
};
