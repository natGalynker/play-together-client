import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: ('auth'),

  model (params) {
  return this.get('store').findRecord('exercise', params.exercise_id);

},

  // model () {
  //   let id = this.get('credentials.id');
  //   return this.get('store').findRecord('profile');
  // },

    actions: {
      submitExercise(exercise) {
        exercise.submit()
        .then(() => this.transitionTo('exercises'));
      },
      saveList(list) {
  list.save()
  //uses promise to transition to the name of the route
  .then(() =>this.transitionTo('lists'));
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
  },
  });
