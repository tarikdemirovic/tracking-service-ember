import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	actions: {
		authenticate() {
			var credentials = this.getProperties('username', 'password');
			this.get('session').authenticate('authenticator:ts-auth', credentials);

			console.log(this.get('session').isAuthenticated);
		}
	}
});
