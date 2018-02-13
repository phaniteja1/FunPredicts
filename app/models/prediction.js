import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  title: attr('string'),
  image_url: attr('string'),
  stocks: hasMany('stock', { async: true }),
});