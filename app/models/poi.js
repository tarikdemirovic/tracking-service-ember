import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	date_added: DS.attr('date'),
	description: DS.attr('string'),
	lat: DS.attr('number'),
	lng: DS.attr('number')
});
