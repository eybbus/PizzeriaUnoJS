import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';



const NavigationBar = ( ) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src="https://i.imgur.com/yavcMYN.png" alt="" />
            </div>
            <NavigationBarLinkWrapper>
                <NavLink
                    exact
                    to="/pizzas"
                    activeClassName="active"
                    className="nav-link">Menu</NavLink>
                <NavLink
                    to="/offers"
                    activeClassName="active"
                    className="nav-link">Offers</NavLink>
                <NavLink
                    to="/about"
                    activeClassName="active"
                    className="nav-link">About us</NavLink>
                <NavLink
                    to="/Cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};

NavigationBar.contextTypes = {
    user: PropTypes.shape({
        loginId: PropTypes.string,
        displayName: PropTypes.string
    })
};


// Fix for react-router-dom, known bug with NavLink
export default NavigationBar;