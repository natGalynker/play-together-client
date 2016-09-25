import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('exercise', params.exercise_id);
},

actions: {
  // toggleWorkout (workout) {
  //   workout.toggleProperty('done');
  //   workout.save();
  // },
  //
  // deleteWorkout (item) {
  //   item.destroyRecord();
  // },

  // createWorkout(data) {
  //   let workout = this.get('store').createRecord('workout', data);
  //   workout.save();
  // },
},
});
