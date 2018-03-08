import React from 'react';
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
                    to="/cart"
                    activeClassName="active"
                    className="nav-link">Cart</NavLink>
            </NavigationBarLinkWrapper>
        </nav>
    );
};

export default NavigationBar;