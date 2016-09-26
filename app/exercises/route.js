import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: ('auth'),

  model () {
    let id = this.get('credentials.id');
    return this.get('store').findRecord('profile', id);
  },

  actions: {
    display (id) {
      this.transitionTo('exercise', id);
    },

    createExercise () {
        this.transitionTo('exercises/new');
    },
  }
});
