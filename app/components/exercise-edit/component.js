import Ember from 'ember';

export default Ember.Component.extend({
  actions : {

togglePublic () {
  let project = this.get('project');
  project.toggleProperty('public');
  return this.get('project');
},
reset () {
  let exercise = this.get('exercise');
  this.sendAction('reset', exercise);
},

submitExercise () {
  console.log('exercise submitted');
  this.sendAction('submitExercise', this.get('exercise'));
},
},
});
