import React from 'react';
import Helmet from 'react-helmet';

import details from '../data/contact';

const ContactPage = () => {
	return(
		<div>
			<h1>Contact</h1>
			<h4>Fastest: </h4>
			<div>
				<p>{details.phone}</p>
			</div>
			<h4>Faster: </h4>
			<div>
				<p>{details.email}</p>
			</div>
			<h4>Fast: {}</h4>
			<div>
				<p>{details.linkedIn}</p>
			</div>

		</div>
	)
}


export default ContactPage;
