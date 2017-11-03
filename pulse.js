var Pulse = function (params) {
    
  // dom buffering
  //var body      = document.documentElement;
  var body      = document.getElementsByTagName('main')[0];

  // colors
  var colorOn   = params.color;
  var colorOff  = '#000';

  // timings
  var frequency = params.frequency;
  var onTime    = 10;
  var delay     = (1000 / frequency) - onTime;

  // pause time expects milliseconds
  var pause = function (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // change the screen color
  var color = function (color) {
    body.style.backgroundColor = color;
  };

  // pulse the screen color
  var pulse = function (colorOn, colorOff) {
    color(colorOn);
    pause(onTime).then(() => {
      color(colorOff);
    })
  };

  // looping pulse
  return setInterval(function () {
    pulse(colorOn, colorOff);
  }, delay);
};
