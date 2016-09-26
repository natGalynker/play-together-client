import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),
  actions: {
    editAction () {
      this.transitionTo('profiles/edit');
    },
  }
});
