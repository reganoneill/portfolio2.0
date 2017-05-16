import React from 'react';
import {prefixLink} from 'gatsby-helpers';
import { Link } from 'react-router';
import { config } from 'config';
var FaBars = require('react-icons/lib/fa/Bars');


class Header extends React.Component {
	constructor(props) {
     super(props);
     this.state = {isToggleOn: true};

     this.handleClick = this.handleClick.bind(this);
   }

	 handleClick() {
	 this.setState(prevState => ({
		 isToggleOn: !prevState.isToggleOn
	 }));
	 console.log('action.')
 }

	 render (){
		 return(
	<nav>
		<div onClick={this.handleClick} className="mobileNavIcon"><FaBars /></div>
		<ul>
			<li><a href={prefixLink('/about/')}>about</a></li>
			<li><a href={prefixLink('/portfolio/')}>portfolio</a></li>
			<li><a href={prefixLink('/contact/')}>contact</a></li>
			<li><a href={prefixLink('/blog/')}>blog</a></li>
		</ul>
	</nav>
)
}
};

export default Header;
