import Ember from 'ember';

  export default Ember.Component.extend({
    tagName: 'form',
    classNames: ['form-group'],

    profile: {},
  actions: {
    reset () {
      let profile = this.get('profile');
      this.sendAction('reset', profile);
    },
      submitProfile () {
        console.log('form submitted', this.get('profile'));
        this.sendAction('submitProfile', this.get('profile'));
  },
}
});
