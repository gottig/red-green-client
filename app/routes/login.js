import Ember from 'ember';
import UnAuthenticateRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnAuthenticateRouteMixin, {
  session: Ember.inject.service(),
  actions: {
    login(username, password) {
      this.controller.set('isLoggingIn', true);
      this.get('session').authenticate('authenticator:oauth2', username, password)
        .catch(() => this.controller.set('errorMessage', "Invalid Login."))
        .finally(() => this.controller.set('isLoggingIn', false));
    }
  }
});
