import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createExercise (passwords) {
      this.get('auth').createExercise(passwords)
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
