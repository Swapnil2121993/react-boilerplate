/*eslint-disable*/
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Form from './components/Form';
import DemoCarousel from './components/DemoCarousel';

function RenderApplication() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/carousel" component={DemoCarousel} />
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<RenderApplication />, document.getElementById('root'));
