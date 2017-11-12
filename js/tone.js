// Closure that returns a `tone` method

var Tone = function() {

  // one context per document
  var context = new (window.AudioContext || window.webkitAudioContext)();

  // left and right audio channels
  var left    = null;
  var right   = null;

  // an audio merger
  var merger  = null;

  // tone-generation function
  var tone    = function (config) {

    // initialize the audio channels if uninitialized
    if (left == null) {

      // initialize the left and right audio channels
      left                  = context.createOscillator();
      right                 = context.createOscillator();
      left.type             = config.tone.type;
      right.type            = config.tone.type;
      left.frequency.value  = config.tone.frequency;
      right.frequency.value = config.tone.frequency + config.frequency;

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
      left.frequency.value  = config.tone.frequency;
      right.frequency.value = config.tone.frequency + config.frequency;
    }

    console.log('tone (L): ' + config.tone.frequency + ' hz');
    console.log('tone (R): ' + (config.tone.frequency + config.frequency) + ' hz');
  };

  return tone;
};
