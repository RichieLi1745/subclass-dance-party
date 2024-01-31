var direction = 1;
var MakePacmanDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node class = sssss
  $(this.$node).addClass('pacman');
  if (direction % 2 === 0) {
    $(this.$node).addClass('pacManX');
    direction ++;
  } else {
    $(this.$node).addClass('pacManY');
    direction ++;
  }
  $(this.$node).append('<span class="pacman_eye"></span>');
  $(this.$node).append('<span class="pacman_mouth"></span>');
  $(this.$node).append('<span class="pacman_food"></span>');
};

// var MakePacmanDancer = function(top, left, timeBetweenSteps) {
//   MakeDancer.call(this, top, left, timeBetweenSteps);
//   //this.$node class = sssss
//   $(this.$node).addClass('pacman');
//   if (direction % 2 === 0) {
//     $(this.$node).addClass('pacManX');
//     $(this.$node).append('<span class="pacman_eye"></span>');
//     $(this.$node).append('<span class="pacman_mouth"></span>');
//     $(this.$node).append('<span class="pacman_food"></span>');
//     direction ++;
//   } else {
//     $(this.$node).addClass('pacManY');
//     $(this.$node).append('<span class="pacman_eyeY"></span>');
//     $(this.$node).append('<span class="pacman_mouthY"></span>');
//     $(this.$node).append('<span class="pacman_foodY"></span>');
//     direction ++;
//   }
// };

MakePacmanDancer.prototype = Object.create(MakeDancer.prototype);
MakePacmanDancer.prototype.constructor = MakePacmanDancer;
/*MakePacmanDancer.prototype.animate = function() {
  var newPosition =
};*/
MakePacmanDancer.prototype.step = function() {
  console.log('Hitting step');
};