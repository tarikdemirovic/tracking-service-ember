import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	pathForType: function(modelName) {
		return Ember.String.decamelize(modelName);
	},
	host: 'https://tracking-service-api.herokuapp.com/v1'
});
