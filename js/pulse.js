var pulse = function (params) {

  // pluck the DOM element to pulsate
  var target = params.pulse.target;

  // set the background color
  target.style.background = params.pulse.color;

  // apply the pulse animation
  var duration            = 1000 / params.frequency;
  target.style.animation  = 'pulsate ' + duration + 'ms infinite linear';
};
