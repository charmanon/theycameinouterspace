import React, { Component } from 'react';
import outerspace from '../images/outerspace.png';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem } from 'react-materialize';

class Header extends Component {
	render() {
		return (
			<div className="top-nav header-fixed">
				<a href="/" className="left">
					<img
						className="outerspace-logo"
						src={outerspace}
						alt={'Outerspace logo'}
					/>
				</a>
				<Navbar className="navbar-color">
					<a href="/" className="white-text">
						<h3 className="header-text">They Came in Outer Space!</h3>
					</a>
					<NavItem>
						<NavLink
							to="/bio"
							activeClassName="active"
							className="header-choice"
						>
							ABOUT
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="/music"
							activeClassName="active"
							className="header-choice"
						>
							MUSIC
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="/swag"
							activeClassName="active"
							className="header-choice"
						>
							SWAG
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							to="/play"
							activeClassName="active"
							className="header-choice"
						>
							PLAY
						</NavLink>
					</NavItem>
				</Navbar>
			</div>
		);
	}
}

export default Header;
