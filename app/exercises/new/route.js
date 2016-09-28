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
      submitExercise(data) {
        let exercise = this.get('store').createRecord('exercise', data);
        exercise.save()
        .then(() => this.transitionTo('exercises'));
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
