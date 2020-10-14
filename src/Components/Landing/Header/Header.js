import React from 'react';
import HeaderMain from './HeaderMain/HeaderMain';
import Navigation from './Navigation/Navigation';
import './Header.css'
const Header = () => {
    return (
        <header className="Header-Header">
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
        </header>
    );
};

export default Header;