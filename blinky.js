var leds = require('tessel').leds;
var c = 0;
var d = -1;

setInterval(function(){
	for(var i = 0; i < leds.length; i++) leds[i].off();
		leds[c].on();
		if(c == 0 || c ==leds.length - 1) d = - d;
		c += d;
}, 100);
