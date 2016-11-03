var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var light = new five.Light({
    pin: "a7"
  });
  var nightlight = new five.Led("b6");
  light.on("change", () => {
    if (light.level < 0.5) {
      nightlight.on();
    } else {
      nightlight.off();
    }
  });
});
