// put the app in fullscreen mode on click
params.strobe.target.onclick = function () {

  // if fullscreen is supported
  if (params.strobe.target.webkitRequestFullscreen) {

    // exit fullscreen if in fullscreen
    if (state.fullscreen) {
      document.webkitExitFullscreen();
    }

    // otherwise, enter fullscreen if not fullscreened
    else {
      params.strobe.target.webkitRequestFullscreen();
    }

    // change the screen state flag
    state.fullscreen = !state.fullscreen;
  }
};
