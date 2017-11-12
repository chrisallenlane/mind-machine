// put the app in fullscreen mode on click
config.strobe.target.onclick = function () {

  // if fullscreen is supported
  if (config.strobe.target.webkitRequestFullscreen) {

    // exit fullscreen if in fullscreen
    if (state.fullscreen) {
      document.webkitExitFullscreen();
    }

    // otherwise, enter fullscreen if not fullscreened
    else {
      config.strobe.target.webkitRequestFullscreen();
    }

    // change the screen state flag
    state.fullscreen = !state.fullscreen;
  }
};
