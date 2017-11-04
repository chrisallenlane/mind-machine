// TODO: play tones on appropriate audio channels, if possible

// one context per document
var context = new (window.AudioContext || window.webkitAudioContext)();

// left and right audio channels
var left  = null;
var right = null;

// tone-generation function
var tone = function (params) {

  // initialize the audio channels if uninitialized
  if (left == null) {
    left                  = context.createOscillator();
    right                 = context.createOscillator();
    left.type             = params.tone.type;
    right.type            = params.tone.type;
    left.frequency.value  = params.tone.frequency;
    right.frequency.value = params.tone.frequency + params.frequency;

    left.connect(context.destination);
    right.connect(context.destination);

    left.start();
    right.start();
  }

  // otherwise, update the frequency
  else {
    left.frequency.value  = params.tone.frequency;
    right.frequency.value = params.tone.frequency + params.frequency;
  }
};
