import React from 'react';
import Logo from './Logo';
import Button from './Button';
import './SignInForm.less';

function SignInForm () {
    return (
        <div className="signin-form-container">
            <Logo />
            <div className="signin-form-wrapper">
                <h2>Welcome Back !</h2>
                <label>
          Email or Phone Number
                    <input type="text" value=" " />
                </label>
                <label>
          Password
                    <input type="password" value=" " />
                </label>
                <Button />
            </div>
        </div>
    );
}

export default SignInForm;
