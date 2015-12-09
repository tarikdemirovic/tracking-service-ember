import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
    tokenEndpoint: 'https://tracking-service-api.herokuapp.com/v1/login',
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                reject();
            }
        });
    },

    authenticate: function(options) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: this.tokenEndpoint,
                crossDomain: true,
				xhrFields: {
				  withCredentials: true
				},
                type: 'GET',
                beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Basic YWRuYW5hYmg6cGFzc3dvcmQxMjM=');}
            }).then(function(response) {
                Ember.run(function() {
                    resolve({
                        token: response.session_key
                    });
                });
            }, function(xhr, status, error) {
                var response = xhr.responseText;
                Ember.run(function() {
                    reject(response);
                });
            });
        });
    },

    invalidate: function() {
        console.log('invalidate...');
        return Ember.RSVP.resolve();
    }
});