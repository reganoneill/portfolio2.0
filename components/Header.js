import React from 'react';
import {prefixLink} from 'gatsby-helpers';
import { Link } from 'react-router';
import { config } from 'config';
const FaBars = require('react-icons/lib/fa/Bars');

class Header extends React.Component {
	constructor(props) {
     super(props);
     this.state = {
			 isToggleOn: true,
			 windowWidth: window.innerWidth,
			 isMobileNavVisible: false
		 };
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
   };

	 handleResize() {
		 this.setState({windowWidth: window.innerWidth});
	 }

	 componentDidMount(){
		 window.addEventListener('resize', this.handleResize.bind(this));
	 }

	 componentWillUnmount(){
		 window.removeEventListener('resize', this.handleResize.bind(this));
	 }
	 //end new stuff

	 //getting rid of this i think?
	 showDropdownMenu() {
	 this.setState(prevState => ({
		 isToggleOn: !prevState.isToggleOn
	 }));
 	}

	navigationList(){
		return (
			<ul className="">
				<li><a href={prefixLink('/about/')}>about</a></li>
				<li><a href={prefixLink('/portfolio/')}>portfolio</a></li>
				<li><a href={prefixLink('/contact/')}>contact</a></li>
				<li><a href={prefixLink('/blog/')}>blog</a></li>
			</ul>
		);
	}

	renderMobileNav(){
		if(this.state.isMobileNavVisible){
			return this.navigationList();
		}
	}

	handleNavClick(){
		if(!this.state.isMobileNavVisible){
			this.setState({isMobileNavVisible: true});
		} else {
			this.setState({isMobileNavVisible: false});
		}
	}

	renderNavbar(){
		if(this.state.windowWidth <= 900){
			return(
				<div className="mobileNav">
					<div onClick={this.handleNavClick.bind(this)} className="mobileNavIcon"><FaBars />
					{this.renderMobileNav()}
					</div>
				</div>
			)
		} else {
			return (
				<div className="full_nav">
					{this.navigationList()}
				</div>
			)
		}
	}

	 render (){
		 return(
			<nav>
				{this.renderNavbar()}
			</nav>
)
}
};

export default Header;
