import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  actions: {
    editAction () {
      this.transitionTo('profiles/edit');
    },
  }
});
