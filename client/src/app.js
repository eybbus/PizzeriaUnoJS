import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { PropTypes } from 'prop-types'
import '../styles/site';
import NavgationBar from './components/NavigationBar/NavigationBar'
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Offers from './components/Offers/Offers';
import CartList from './components/CartList/CartList';
import PizzaDetails from './components/PizzaDetails/PizzaDetails';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Confirmation/Confirmation';



class App extends React.Component {
    constructor(props) {
        super(props);
    }
	
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavgationBar />
                    <div className="container">
                        <Switch>
                            <Route path="/pizzas/:pizzaId" component={PizzaDetails}/>
                            <Route path="/pizzas" component={Menu} />
                            <Route path="/about" component={About} />
                            <Route path="/offers" component={Offers} />
                            <Route path="/cart/checkout" component={Checkout} />
                            <Route path="/cart" component={CartList} />
                            <Route path="/confirmation" component={Confirmation} />
                            <Redirect to="/pizzas" />
                        </Switch>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app'));