import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createExercise (workouts) {
      this.get('auth').createExercise(workouts)
      .then(() => this.transitionTo('application'))
      .then(() => {
        this.get('flashMessages')
        .success('You added an exercise!');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
