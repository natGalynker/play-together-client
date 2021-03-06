import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'play-together-client/config/environment';

export default AjaxService.extend({
  auth: Ember.inject.service(),
  host: ENV.apiHost,
  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),
});
