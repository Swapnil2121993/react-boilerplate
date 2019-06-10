import React from 'react';
import './HomePageContext.less';

function HomePageContext () {
    return (
        <div className="home-page-context-container">
            <h2>See What's next</h2>
            <h3>Watch anywhere</h3>
            <a className="waves-effect waves-dark red">Try 30 Days Free Trial ></a>
            <div className="btn-signin">
        Have an account ?<a href="/login">SignIn</a>
            </div>
        </div>
    );
}

export default HomePageContext;
