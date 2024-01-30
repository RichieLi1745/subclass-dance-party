var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function(timeBetweenSteps, node) {
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;
  //node = this.$node || this;

  node = node || this;
  node.step.callCount++;
  timeBetweenSteps = timeBetweenSteps || Math.random() * 1000;

  MakeDancer.prototype.step(timeBetweenSteps, MakeBlinkyDancer.prototype.step, node);
  node.$node.toggle();

};
//func.bind(orignalBlinky)
//this.$node;