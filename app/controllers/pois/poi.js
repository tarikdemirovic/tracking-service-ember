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
	}.property('model'),

	pathChanged: false,

	init: function() {
		this.pathChanged = false;
	},

	runVar: 0,

	pollRecursive: function() {
		var _this = this;
		console.log(_this.pathChanged);
      	_this.runVar = Ember.run.later( function() {
        	_this.get('model').reload();
        	console.log('blablabla');
        	if(!_this.pathChanged) {
         		_this.pollRecursive();
        	}
      	}, 3000);
	},

	poll: function() {
		this.pathChanged = false;
		this.pollRecursive();
    }.observes('model')
});