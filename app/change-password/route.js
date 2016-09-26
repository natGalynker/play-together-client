import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    changePassword (passwords) {
      this.get('auth').changePassword(passwords)

      .then(() => this.transitionTo('profiles', this.get('auth.credentials.id'))
      // .then(() => this.get('auth').signOut())
      // .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully changed your password!');
      })
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }));
    },
      submitProfile (profile) {
        profile.save();
        this.transitionTo('profile', profile);
      },
  },
});
