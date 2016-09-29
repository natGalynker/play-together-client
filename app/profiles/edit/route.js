import Ember from 'ember';
// import { storageFor } from 'ember-local-storage';
export default Ember.Route.extend({
      auth: Ember.inject.service(),
      // credentials: storageFor('auth'),

      // model () {
      //   return this.get('store').findRecord('profile');
      // },
      actions: {
        submitProfile(data) {
          console.log('test');
          console.log(data);
          let profile = this.get('store').createRecord('profile', data);
           profile.save();
          // this.set('profiles').submitProfile(data)
          //   .then(() => this.transitionTo('profile')
          //     .then(() => {
          //         this.get('flashMessages')
          //           .success('Exercise Created!');
          //       })
          //     );
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
