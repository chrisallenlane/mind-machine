// one context per document
var context = new (window.AudioContext || window.webkitAudioContext)();

// left and right audio channels
var left   = null;
var right  = null;

// an audio merger
var merger = null;

// tone-generation function
var tone = function (params) {

  // initialize the audio channels if uninitialized
  if (left == null) {

    // initialize the left and right audio channels
    left                  = context.createOscillator();
    right                 = context.createOscillator();
    left.type             = params.tone.type;
    right.type            = params.tone.type;
    left.frequency.value  = params.tone.frequency;
    right.frequency.value = params.tone.frequency + params.frequency;

    // create a channel merger
    merger = context.createChannelMerger();

    // merge the audio channels
    left.connect(merger, 0, 0);
    right.connect(merger, 0, 1);

    // connec the merger to the audio sink
    merger.connect(context.destination);

    // start the oscillators
    left.start();
    right.start();
  }

  // otherwise, update the frequency
  else {
    left.frequency.value  = params.tone.frequency;
    right.frequency.value = params.tone.frequency + params.frequency;
  }

  console.log('tone (L): ' + params.tone.frequency + ' hz');
  console.log('tone (R): ' + (params.tone.frequency + params.frequency) + ' hz');
};
