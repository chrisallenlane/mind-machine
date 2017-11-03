// one context per document
var context         = new (window.AudioContext || window.webkitAudioContext)();
var osc             = context.createOscillator(); // instantiate an oscillator
osc.type            = 'sine';                     // this is the default - also square, sawtooth, triangle
//osc.frequency.value = 440;                        // Hz
osc.frequency.value = 200;                        // Hz
osc.connect(context.destination);                 // connect it to the destination
osc.start();                                      // start the oscillator

var osc2             = context.createOscillator(); // instantiate an oscillator
osc2.type            = 'sine';                     // this is the default - also square, sawtooth, triangle
osc2.frequency.value = 440;                        // Hz
osc2.connect(context.destination);                 // connect it to the destination
osc2.start();                                      // start the oscillator





//osc.stop(context.currentTime + 2);                // stop 2 seconds after the current time
