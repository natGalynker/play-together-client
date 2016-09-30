import Ember from 'ember';

export default Ember.Route.extend({
 auth: Ember.inject.service(),
 user: Ember.computed.alias('auth.credentials.email'),

  model () {
    return this.get('store').findAll('profile');
  },

  deleteProfile (profile) {
  profile.destroyRecord();
},
});
