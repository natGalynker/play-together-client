import Ember from 'ember';

export default Ember.Route.extend({
 auth: Ember.inject.service(),
 userName: Ember.computed.alias('auth.credentials.email'),

  model () {
    //console.log(params.profile_id);
    return this.get('store').findAll('profile');
  },
});
