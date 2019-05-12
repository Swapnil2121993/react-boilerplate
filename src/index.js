import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo';
import './style/main.less';

function RenderApplication () {
    return (
        <div className="app-container">
            <Logo />
        </div>
    );
}

ReactDOM.render(<RenderApplication />, document.getElementById('root'));
