// dom buffering
var body = document.documentElement;

// colors
var colorOn   = '#00F';
var colorOff  = '#000';

// timings
var frequency = 4;
var onTime    = 50;
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
setInterval(function () {
  pulse(colorOn, colorOff);
}, delay);
