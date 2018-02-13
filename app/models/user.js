import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: attr('string'),
  money: attr('number'),
  user_stock: hasMany('stock', { async: true }),
});
