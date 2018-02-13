import DS from 'ember-data';
// import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:8000'
});
