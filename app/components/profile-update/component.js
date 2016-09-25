import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],

  actions: {
    cancel () {
      let profile = this.get('profile');
      this.sendAction('cancel', profile);
    },

    submit () {
      let profile = this.get('profile');
      this.sendAction('submit', profile);
    },
  }
});
