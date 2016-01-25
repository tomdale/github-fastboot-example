import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  model() {
    return fetch('https://api.github.com/users/tomdale/events')
      .then(res => {
        return res.json();
      });
  }
});
