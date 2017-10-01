

var Rainbow = require('rainbowvis.js');


var rainbow = new Rainbow();
rainbow.setSpectrum('#5D4A66', '#6A5D7B', '#749C75', '#B2BD7E', '#E9D985');
rainbow.setNumberRange(1, 100);

for(var i = 1; i <= 101; ++i) {
    console.log(rainbow.setSpectrumByArray().);
}