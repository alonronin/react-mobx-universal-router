import React from 'react';
import './style.css';

import { Router } from './router';
import App from './App';
import Homepage from './Homepage';
import About from './About';
import ContactUs from './Contact';

const routes = [
	{
		path: '',
		action: async ({ next }) => {
			const Component = await next();

			return <App children={Component} />;
		},
		children: [
			{
				path: '/',
				action: () => <Homepage />
			},

			{
				path: '/about',
				action: () => <About />
			},

			{
				path: '/contact/:name?',
				action: ContactUs
			},

			{
				path: '(.*)',
				action: () => <h1>404 - Not Found!</h1>
			}
		]
	}
];

Router(routes).catch(console.error);
