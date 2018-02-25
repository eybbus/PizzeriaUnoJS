import React from 'react';
import ReactDOM from 'react-dom';
//import { PropTypes } from 'prop-types'
import '../styles/site';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
	
    render() {
        return (
            <div> I am the ass </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));