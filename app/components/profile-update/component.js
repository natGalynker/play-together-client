import Ember from 'ember';

  export default Ember.Component.extend({
    tagName: 'form',
    classNames: ['form-group'],

    profile: {},
      actions: {
        reset () {
          this.set('profile',  {});
          },
      submitProfile () {
        console.log('form submitted', this.get('profile'));
        this.sendAction('submitProfile', this.get('profile'));
  },
}
});
