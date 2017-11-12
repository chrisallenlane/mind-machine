// Closure that returns a `fullscreen` method

var Fullscreen = function () {

  // initialize a nosleep instance
  var noSleep = new NoSleep();

  // the fullscreen function
  var fullscreen = function (target) {

    // put the app in fullscreen mode on click
    target.onclick = function () {

      // prevent the screen from sleeping
      noSleep.enable();

      // if fullscreen is supported
      if (target.webkitRequestFullscreen) {

        // exit fullscreen if in fullscreen
        if (state.fullscreen) {
          document.webkitExitFullscreen();
        }

        // otherwise, enter fullscreen if not fullscreened
        else {
          target.webkitRequestFullscreen();
        }

        // change the screen state flag
        state.fullscreen = !state.fullscreen;
      }
    };
  };

  return fullscreen;
};
