var Start = function (target, callback) {

  // track application state
  var started = false;

  // function to invoke on start
  var start = function () {

    // do nothing if the application has already been started
    if (started) {
      return;
    }

    // otherwise, start it
    started = true;

    // hide the "tap to begin" notice
    document.getElementsByTagName('header')[0].remove();

    // start
    callback();
  };

  // listen for click events
  target.addEventListener('click', start);
};
