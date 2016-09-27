import Ember from 'ember';
// import { storageFor } from 'ember-local-storage';
export default Ember.Route.extend({
  auth: Ember.inject.service(),
  // credentials: storageFor('auth'),

  // model () {
  //   // let id = this.get('auth.credentials.id');
  //   return this.get('store').findRecord('profile');
  // },

  actions: {
    submitProfile (profile) {
      profile.save();
      this.transitionTo('profile', profile);
    },

    cancel (profile) {
      this.get('store').unloadAll('profile');
      this.get('store').findRecord('profile', profile.id)
      .then((test) => {
        //this.get('store').unloadAll('profile');
        this.transitionTo('profile', test);
        console.log(test.id);
      });
    }
  }
});
