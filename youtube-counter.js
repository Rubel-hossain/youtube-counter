// Change the value inside this array with your YouTube embed code
var code = ["UQx4YklXKww", "D3mC14NfJwc"];

var totalView = 0;
var index = 0;
var casper = require('casper').create();

casper.start('', function() {});

casper.then(function() {
  this.eachThen(code, function() {
    this.thenOpen(('https://www.youtube.com/watch?v=' + code[index]), function() {
      if(casper.exists('.watch-view-count')) {
        var viewEl = this.getElementInfo('.watch-view-count'); 
        var view = viewEl.html.trim().split(" ");

        if(!isNaN(parseInt(view[0]))) {
          totalView = totalView + parseInt(view[0]);
        }
        console.log(index+1 + " - Youtube Code: " + code[index] + " and current total view: " + totalView);
      }
      index++;
    });
  });
});

casper.then(function() {
  console.log("Total View: " + totalView);
});

casper.run();
