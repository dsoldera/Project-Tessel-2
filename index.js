//https://github.com/soapdog/evento-webbr2016

// Importar a Interface para o Hardware
var tessel = require('tessel');

// Ligar um LED antes do loop.
tessel.led[2].on();

// Piscar!!!
setInterval(function () {
  tessel.led[2].toggle(); // essa porta 2 é um LED
  tessel.led[3].toggle(); // essa porta 3 é um LED
}, 100);

console.log("Pisca! (Aperte CTRL + C para interromper)");
