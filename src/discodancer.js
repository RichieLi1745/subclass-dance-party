var MakeDiscoDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  $(this.$node).addClass('discoball');
  $(this.$node).append('<span class="inner1"></span>');
  $(this.$node).append('<span class="inner2"></span>');
  $(this.$node).append('<span class="inner3"></span>');
};

MakeDiscoDancer.prototype = Object.create(MakeDancer.prototype);

MakeDiscoDancer.prototype.constructor = MakeDiscoDancer;

MakeDiscoDancer.prototype.step = function() {
  //console.log('Hitting step');
};