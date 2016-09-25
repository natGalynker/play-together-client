import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  motivation: DS.attr('string'),
  aliases: DS.attr('string'),
  favorite: DS.attr('string'),
  //user: DS.belongsTo('user'),
  user_id: DS.attr(),
  username: DS.attr('string'),
  // exercises: DS.hasMany('exercise')
});
