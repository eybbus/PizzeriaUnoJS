import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
//import { PropTypes } from 'prop-types'
import '../styles/site';
import Menu from './components/Menu/Menu';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
	
    render() {
        return (
            <Menu />
        );
    }
}

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><App /></Provider>, document.getElementById('app'));