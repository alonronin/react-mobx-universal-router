import React from 'react';
import Link from './router/Link';

const ContactUs = ({ name, params }) => (
	<div>
		<h1>Contact Us {name}</h1>

		<Link to="/contact/test">test</Link>
		<pre>{JSON.stringify(params, null, 2)}</pre>
	</div>
);

export default ContactUs;
