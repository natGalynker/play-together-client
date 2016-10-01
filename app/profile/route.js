import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: ('auth'),
  actions: {
    editAction () {
      this.transitionTo('profiles/edit');
    },
    deleteProfile(profile) {
      // console.log('this is a test');
      // console.log(profile);
    return profile.destroyRecord();
  },

    changeAction(profile){
      return profile.save();
    },
},
});
