import React from 'react';
import './Button.less';

function Button () {
    return (
        <div className="button-container">
            <a className="waves-effect waves-light red" href="/login">
        Sign In
            </a>
        </div>
    );
}

export default Button;
