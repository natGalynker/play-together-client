import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('user');
  },

  actions : {
    test(){
      console.log(this.get('user.id'));
    }
  }
});
