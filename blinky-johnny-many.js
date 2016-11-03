var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});
board.on("ready", function() {
  var index = 0;
  var step = 1;
  var leds = new five.Leds(["a0", "a1", "a2", "a3", "a4", "a5"]);

  // 1
  this.loop(200, function() {
    // 1.1
    leds.off();
    // 1.2
    leds[index].on();
    // 1.3
    index += step;
    if (index === 0 || index === leds.length - 1) {
      step *= -1;
    }
  });
});
  
