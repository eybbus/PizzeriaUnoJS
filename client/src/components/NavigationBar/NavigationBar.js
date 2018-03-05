import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationBarLinkWrapper from '../NavigationBarLinkWrapper/NavigationBarLinkWrapper';

const NavigationBar = ( ) => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src="https://static.giantbomb.com/uploads/original/1/13691/2327134-ryan_dc.png" alt="" />
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
                    to="/cart"
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
export default connect(({ language }) => { return { language }; }, null, null, { pure: false })(NavigationBar);