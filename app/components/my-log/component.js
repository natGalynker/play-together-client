import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['my-log'],

actions: {
  toggleWorkoutDone(workout) {
    this.sendAction('toggleWorkoutDone', workout);
  },

  deleteWorkout(workout) {
    this.sendAction('deleteWorkout', workout);
  },
},
});
