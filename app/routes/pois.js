import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	session: Ember.inject.service('session'),
	
	model: function(){
		return this.store.findAll('poi');
		//should get pois from service
		//return this.store.findAll('poi');
	}
  }
);
