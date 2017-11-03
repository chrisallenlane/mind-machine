var pulse = function (params) {

  // set the background color
  params.target.style.background = params.color;

  // apply the pulse animation
  var duration                   = 1000 / params.frequency;
  params.target.style.animation  = 'pulsate ' + duration + 'ms infinite linear';
};
