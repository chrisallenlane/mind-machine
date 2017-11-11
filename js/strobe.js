var strobe = function (params) {

  // log debugging info
  console.log('strobe: ' + params.frequency + ' hz');

  // pluck the DOM element to pulsate
  var target = params.strobe.target;

  // set the background color
  target.style.background = params.strobe.color;

  // apply the strobe animation
  var duration            = 1000 / params.frequency;
  target.style.animation  = 'pulsate ' + duration + 'ms infinite linear';
};
