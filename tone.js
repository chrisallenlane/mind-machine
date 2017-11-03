var Tone = function (params) {

  // one context per document
  var context         = new (window.AudioContext || window.webkitAudioContext)();

  // left audio channel
  var left             = context.createOscillator();
  left.type            = params.type;
  left.frequency.value = params.frequency.left;
  left.connect(context.destination);
  left.start();

  // right audio channel
  var right             = context.createOscillator();
  right.type            = params.type;
  right.frequency.value = params.frequency.right;
  right.connect(context.destination);
  right.start();

  return {
    right : right,
    left  : left,
  };
};
