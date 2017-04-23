import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({
  // The model properties are defined in camelCase
  // The API responds with properties in snake case
  // The keyForAttribute method converts the properties
  // from Camelcase to snake case and vice versa.
  keyForAttribute: function (attr) {
    return Ember.String.underscore(attr);
  }
});
