import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),
  model () {
    let id = this.get('credentials.id')
    return this.get('store').findAll('exercise', id);
  },
// });
//
//
//   model () {
//     let id = this.get('credentials.id');
//     return this.get('store').findRecord('profile', id);
//   },

  actions: {
    display (id) {
      this.transitionTo('exercise', id);
    },

    createExercise (data) {
      let exercise = this.get('store').createRecord('exercise', data);
      exercise.submit();
        // this.transitionTo('exercises/new');
    },
  }
});
