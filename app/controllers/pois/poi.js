import Ember from 'ember';

export default Ember.ObjectController.extend({
	centerLat: function() {
		var model = this.get('model');
		return model.lat;
	}.property('model'),

	centerLng: function() {
		var model = this.get('model');
		return model.lng;
	}.property('model'),

	zoom: function() {
		return 16;
	}.property('model')
});