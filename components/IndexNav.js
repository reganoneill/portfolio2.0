import React from 'react';
import {prefixLink} from 'gatsby-helpers';
import { Link } from 'react-router';
import { config } from 'config';

const Navigation = (props) => (
	<nav>

		<ul>
			<li><a href={prefixLink('/about/')}>about</a></li>
			<li><a href={prefixLink('/portfolio/')}>portfolio</a></li>
			<li><a href={prefixLink('/contact/')}>contact</a></li>
			<li><a href={prefixLink('/blog/')}>blog</a></li>
		</ul>
	</nav>
);
//
export default Navigation;
