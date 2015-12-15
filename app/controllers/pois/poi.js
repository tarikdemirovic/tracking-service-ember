import Ember from 'ember';

export default Ember.ObjectController.extend({
	centerLat: function() {
		var model = this.get('model');
		return model.get('firstObject').lat;
	}.property('model'),

	centerLng: function() {
		var model = this.get('model');
		console.log(model.get('firstObject').lng);
		return model.get('firstObject').lng;
	}.property('model'),

	zoom: function() {
		return 16;
	}.property('model')
});