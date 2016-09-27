import Ember from 'ember';
export default Ember.Route.extend({
  auth: Ember.inject.service(),
  actions: {
    createAction () {
      this.transitionTo('exercises/new');
    },
  }
});
