// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  //this.dancer = {};
  //debugger;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  //console.log(this);
  this.step(timeBetweenSteps);

  console.log(this);
  this.setPosition(top, left);

  this.step.callCount = 0;
};

MakeDancer.prototype.step = function(timeBetweenSteps, func, node) {
  setTimeout(func.bind(node), timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};