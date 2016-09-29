import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  motivation: DS.attr('string'),
  favorite_exercise: DS.attr('string'),
  user: DS.belongsTo('user'),
  user_id: DS.attr(),
  username: DS.attr('string'),
});
