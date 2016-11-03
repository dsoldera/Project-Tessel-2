var Barcli = require("barcli");
var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel(),
  // Experiment 3 explains these options
  repl: false,
  debug: false,
});

board.on("ready", function() {
  var graph = new Barcli({
    color: "white",
    label: "Light Level",
    range: [0, 1],
  });
  var light = new five.Light("a7");

  light.on("change", () => {
    graph.update(light.level);
  });
});
