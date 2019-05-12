import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import './style/main.less';

function RenderApplication () {
    return (
        <div className="app-container">
            <Home />
        </div>
    );
}

ReactDOM.render(<RenderApplication />, document.getElementById('root'));
