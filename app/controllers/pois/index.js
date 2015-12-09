import Ember from 'ember';

export default Ember.Controller.extend({
	zoom: 12,
  	centerLat: 43.8667,
  	centerLng: 18.4167,

  	actions: {
		showOnMap: function() {
			this.set('zoom', 15);
		}
	}
});