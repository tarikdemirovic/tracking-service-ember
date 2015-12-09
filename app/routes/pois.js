import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function(){
		var POIS = [
			{
				id: '1',
				title: 'Home',
				lat: 43.861868,
				lng: 18.412322,
				description: "This is a sample description"
			},
			{
				id: '2',
				title: 'Stadium',
				lat: 43.855433,
				lng: 18.406746
			},
			{
				id: '3',
				title: 'Vehicle',
				lat: 43.856782,
				lng: 18.396680
			},
			{
				id: '4',
				title: 'Person',
				lat: 43.873547,
				lng: 18.408036
			},
			{
				id: '5',
				title: 'Object',
				lat: 43.863622,
				lng: 18.408036
			}
		];
		//should get pois from service
		//return this.store.findAll('poi');
		return POIS;
	}
});
