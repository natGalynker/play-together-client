import Ember from 'ember';

  export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['form-group'],

    profile: {
      location: null,
      motivation: null,
      favorite: null,
      username: null,

  },

  actions: {
    cancel () {
      let profile = this.get('profile');
      this.sendAction('reset', profile);
    },

    submitProfile () {
      let profile = this.get('profile');
      this.sendAction('submitProfile', profile);
    },
  }
});
