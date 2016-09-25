import DS from 'ember-data';

export default DS.Model.extend({
workouts: DS.hasMany('workout'),
duration: DS.attr('string'),
description: DS.attr('string'),

});
