import Ember from 'ember';

  export default Ember.Component.extend({
    tagName: 'form',
    classNames: ['form-group'],

    profile: {
      location: 'enter location',
      motivation: 'getting strong',
      favorite: 'yoga all day every day',
      username: 'thisExample',
    },

    // createItem () {
    //     let data = this.get('newItem');
    //     data.list = this.get('list');
    //     this.sendAction('createItem', data);
    //     this.set('newItem.content', null);
    //   },
  actions: {
    cancel () {
      let profile = this.get('profile');
      this.sendAction('reset', profile);
    },
      submitProfile () {
        console.log('form sbmitted');
        // console.log(profile);
          // this.sendAction('profile', params);
        this.sendAction('submitProfile', this.get('profile'));
},
    // submitProfile () {
    // let data = this.get('profile');
    // data.profile = this.get('profile');
    // this.sendAction('submitProfile', data);
    // this.sendAction('submitProfile', this.get('newProfile'));
    // this.sendAction('submitProfile', data);
    // this.get('profile', location);
    // this.set('profile', motivation);
    // this.set('profile', favorite);
    // this.set('profile');
    // this.set('profile');
    // },
  },
});
