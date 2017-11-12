// Binds event listeners to the strobe object

var Fullscreen = function (target) {

  // track fullscreen state
  var fullscreened = false;

  // put the app in fullscreen mode on click
  var fullscreen   = function () {

    // do nothing if fullscreen is unsupported
    if (! target.webkitRequestFullscreen) {
      return;
    }

    // toggle fullscreen state
    if (fullscreened) {
      document.webkitExitFullscreen();
    } else {
      target.webkitRequestFullscreen();
    }

    // change the screen state flag
    fullscreened = !fullscreened;
  };

  // bind to the click event listener
  target.addEventListener('click', fullscreen);
};
