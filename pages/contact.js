import React from 'react';
import Helmet from 'react-helmet';

import details from '../data/contact';

const ContactPage = () => {
	return(
		<div className='contact'>
			<h1>Contact</h1>
			<h4>{details.email}</h4>
			<h4><a href={details.linkedIn}>LinkedIn</a></h4>
		</div>
	)
}


export default ContactPage;
