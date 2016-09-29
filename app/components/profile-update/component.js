import Ember from 'ember';

  export default Ember.Component.extend({
    tagName: 'form',
    classNames: ['form-group'],

    profile: {
      location: 'enter location',
      motivation: 'getting strong',
      favorite_exercises: 'yoga all day every day',
      username: 'thisExample',
    },


  actions: {
    reset () {
      let profile = this.get('profile');
      this.sendAction('reset', profile);
    },
      submitProfile () {
        console.log('form sbmitted');
          // this.sendAction('profile', params);
        this.sendAction('submitProfile', this.get('profile'));
    // submitProfile () {
    // let data = this.get('newProfile');
    // data.profiles = this.get('profiles');
    // this.sendAction('submitProfile', this.get('newProfile'));
    // this.sendAction('submitProfile', data);
    // this.get('profile', location);
    // this.set('profile', motivation);
    // this.set('profile', favorite_exercises);
    // this.set('profile');
    // this.set('profile');
    // },
  },
}
});
