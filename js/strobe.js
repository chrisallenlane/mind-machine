var strobe = function (config) {

  // log debugging info
  console.log('strobe: ' + config.frequency + ' hz');

  // pluck the DOM element to pulsate
  var target = config.strobe.target;

  // set the background color
  target.style.background = config.strobe.color;

  // apply the strobe animation
  var duration            = 1000 / config.frequency;
  target.style.animation  = 'pulsate ' + duration + 'ms infinite linear';
};
