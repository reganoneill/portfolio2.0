import React from 'react';
import {prefixLink} from 'gatsby-helpers';
import { Link } from 'react-router';
import { config } from 'config';
const FaBars = require('react-icons/lib/fa/Bars');

class Header extends React.Component {
	constructor(props) {
     super(props);
     this.state = {isToggleOn: true};
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
   };

	 showDropdownMenu() {
	 this.setState(prevState => ({
		 isToggleOn: !prevState.isToggleOn
	 }));

	 console.log('action.', this.state.isToggleOn)
	 if(this.state.isToggleOn){
		 console.log('wawawawwawawawa');

	 }
 }

	 render (){
		 return(
			<nav>
				<div onClick={this.showDropdownMenu} className="small">
					<FaBars />
					<ul>
						<li><a href={prefixLink('/about/')}>about</a></li>
						<li><a href={prefixLink('/portfolio/')}>portfolio</a></li>
						<li><a href={prefixLink('/contact/')}>contact</a></li>
						<li><a href={prefixLink('/blog/')}>blog</a></li>
					</ul>
				</div>
				<ul className="large">
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
