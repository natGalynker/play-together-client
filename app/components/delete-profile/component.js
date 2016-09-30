import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
  delete () {
    console.log(this.get('profile'));
  this.sendAction('delete', this.get('profile'));
},
},
});
