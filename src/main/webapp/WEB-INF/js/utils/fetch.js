import Ajax from 'metal-ajax';
import {MultiMap} from 'metal-structs';

const fetch = (app, url) => {
	const headers = new MultiMap();

	headers.add('content-type', 'application-json');

	return Ajax.request(`/api/${app}/${url}`, 'get', null, headers)
		.then(response => {
			return JSON.parse(response.responseText);
		});
};

export default fetch;
