import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignInForm from './components/SignInForm';
import './style/main.less';

function RenderApplication () {
    return (
        <Router>
            <div className="app-container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={SignInForm} />
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(<RenderApplication />, document.getElementById('root'));
