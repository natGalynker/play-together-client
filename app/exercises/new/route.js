import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: ('auth'),

  // model () {
  //   let id = this.get('credentials.id');
  //   return this.get('store').findRecord('profile');
  // },

  actions: {
    submitExercise (exercise) {
      exercise.save();
      this.transitionTo('exercise', exercise);
    },

    cancel (exercise) {
      this.get('store').unloadAll('exercise');
      this.get('store').findRecord('exercise', exercise.id)
      .then((test) => {
        //this.get('store').unloadAll('exercise');
        this.transitionTo('exercise', test);
        console.log(test.id);
      });
    }
  }
});
