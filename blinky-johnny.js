// 1
var five = require("johnny-five");
// 2
var Tessel = require("tessel-io");
// 3
var board = new five.Board({
  // 4
  io: new Tessel()
});
// 5
board.on("ready", function() {
  // 6
  var led = new five.Led("a0");
  // 7
  led.blink(500);
});
