import Ember from 'ember';

  export default Ember.Component.extend({
    tagName: 'form',
    classNames: ['form-group'],

    profile: {
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
  },
});
