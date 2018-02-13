import DS from 'ember-data';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  number_of_stocks: attr('number'),
  user: belongsTo('user', { async: true }),
  stock: belongsTo('stock', { async: true }),
});