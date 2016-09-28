import Ember from 'ember';

  export default Ember.Component.extend({
    tagName: 'form',
    classNames: ['form-group'],

    newProfile: {
      location: 'enter location',
      motivation: 'getting strong',
      favorite: 'yoga all day every day',
      username: 'thisExample',
    },


  actions: {
    cancel () {
      let profile = this.get('profile');
      this.sendAction('reset', profile);
    },
      submitProfile () {
        console.log('form sbmitted');
        this.sendAction('submitProfile', this.get('newProfile'));
    // submitProfile () {
    // let data = this.get('newProfile');
    // data.profiles = this.get('profiles');
    // this.sendAction('submitProfile', this.get('newProfile'));
    // this.sendAction('submitProfile', data);
    // this.get('newProfile', location);
    // this.set('newProfile', motivation);
    // this.set('newProfile', favorite);
    // this.set('newProfile');
    // this.set('newProfile');
    // },
  },
}
});
