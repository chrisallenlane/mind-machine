var tone = function (params) {

  // one context per document
  var context         = new (window.AudioContext || window.webkitAudioContext)();

  // left audio channel
  var left             = context.createOscillator();
  left.type            = params.tone.type;
  left.frequency.value = params.tone.frequency;
  left.connect(context.destination);
  left.start();

  // right audio channel
  var right             = context.createOscillator();
  right.type            = params.tone.type;
  right.frequency.value = params.tone.frequency + params.frequency;
  right.connect(context.destination);
  right.start();

  /*
  return {
    right : right,
    left  : left,
  };
  */
};
