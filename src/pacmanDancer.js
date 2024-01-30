var MakePacmanDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node class = sssss
  $(this.$node).addClass('pacman');
  $(this.$node).addClass('pacManAll');
  $(this.$node).append('<span class="pacman_eye"></span>');
  $(this.$node).append('<span class="pacman_mouth"></span>');
  $(this.$node).append('<span class="pacman_food"></span>');
  //<span class="pacman_eye"></span>

};

MakePacmanDancer.prototype = Object.create(MakeDancer.prototype);
MakePacmanDancer.prototype.constructor = MakePacmanDancer;

MakePacmanDancer.prototype.step = function() {
  console.log('Hitting step');
};
