import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: ('auth'),
  actions: {
    editAction () {
      this.transitionTo('profiles/edit');
    },
  }
});
