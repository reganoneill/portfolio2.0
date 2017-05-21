import React from 'react';
import {prefixLink} from 'gatsby-helpers';
import { Link } from 'react-router';
import { config } from 'config';
const FaBars = require('react-icons/lib/fa/Bars');

class MainNav extends React.Component {
	constructor(props) {
     super(props);
     this.state = {
			 windowWidth: window.innerWidth,
			 isMobileNavVisible: false
		 };
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
					</div>
					{this.renderMobileNav()}
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
			<nav className="navBar">
				{this.renderNavbar()}
			</nav>
)
}
};

export default MainNav;
