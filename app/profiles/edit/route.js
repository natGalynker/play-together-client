import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  model () {
    let id = this.get('credentials.id');
    return this.get('store').findRecord('profile', id);
  },

  actions: {
    save (profile) {
      profile.save();
      this.transitionTo('profile', profile);
    },

    cancel (profile) {
      this.get('store').unloadAll('profile');
      this.get('store').findRecord('profile', profile.id)
      .then((result) => {
        //this.get('store').unloadAll('profile');
        this.transitionTo('profile', result);
        console.log(result.id);
      });
    }
  }
});
