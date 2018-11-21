import Link from './router/Link';
import React from 'react';

const Navigation = () => (
	<ul>
		<li>
			<Link as="button" to="/" exact>
				Home
			</Link>
		</li>
		<li>
			<Link to="/about">About Us</Link>
		</li>
		<li>
			<Link to="/contact">Contact Us</Link>
		</li>
	</ul>
);

export default Navigation;
