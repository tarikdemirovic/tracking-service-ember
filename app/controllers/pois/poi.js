import Ember from 'ember';

export default Ember.Controller.extend({
	/*centerLat: function() {
		var model = this.get('model');
		return model[0].lat;
	}.property(),

	centerLng: function() {
		var model = this.get('model');
		return model[0].lng;
	}.property()*/

	centerLat: Ember.computed.oneWay('model.firstObject.lat'),
  	centerLng: Ember.computed.oneWay('model.firstObject.lng')
});