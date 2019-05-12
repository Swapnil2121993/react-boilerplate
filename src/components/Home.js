import React from 'react';
import Logo from './Logo';
import Button from './Button';
import HomePageContext from './HomePageContext';
import './Logo.less';

function Home () {
    return (
        <div>
            <Logo />
            <Button />
            <HomePageContext />
        </div>
    );
}

export default Home;
