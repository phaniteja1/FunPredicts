import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  title: attr('string'),
  price: attr('number'),
  price_change_value: attr('number'),
  price_change: attr('string'),
  prediction: belongsTo('prediction', { async: true }),
});