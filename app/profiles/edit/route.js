import Ember from 'ember';
// import { storageFor } from 'ember-local-storage';
export default Ember.Route.extend({
      auth: Ember.inject.service(),
      actions: {
        submitProfile(data) {
          console.log('test');
          console.log(data);
          let profile = this.get('store').createRecord('profile', data);
          console.log(data);
           profile.save();

            },

        cancel(profile) {
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
