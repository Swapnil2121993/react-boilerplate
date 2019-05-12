import React from 'react';
import Button from './Button';
import HomePageContext from './HomePageContext';
import './Logo.less';

function Logo () {
    return (
        <div className="logo-container">
            <div className="logo">MOVIEFLEX</div>
            <Button />
            <HomePageContext />
        </div>
    );
}

export default Logo;
