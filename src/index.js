import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.less';

class Welcome extends React.Component {
    render () {
        return <h2>React Configuration</h2>;
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
