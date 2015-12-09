import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service('session'),

	actions: {
		authenticate() {
			let {username, password} = this.getProperties('username', 'password');

			this.get('session').authenticate('authenticator:ts-auth', username, password).catch((reason) => {
				this.set('errorMessage', reason.error);
			});
		}
	}
});
