import React from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setOrder, getOrder } from '../../actions/orderActions';

class OrderReview extends React.Component {
    constructor(props) {
        super(props);
        const cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const user = JSON.parse(localStorage.getItem('userInfo')) || {};
        this.state = {
            orderKind: this.props.orderKind,
            cartList: cart,
            userList: user,
            confirmation: false
        };
    }

    submitOrder() {
        console.log(this.state.userList.telephone);
        console.log(this.props);
        const { setOrder, getOrder } = this.props;

        console.log(JSON.parse(localStorage.getItem('cartItems')));
        setOrder(this.state.userList.telephone, JSON.parse(localStorage.getItem('cartItems')));
        getOrder(this.state.userList.telephone);
        this.setState({ confirmation: true });
    }
    
    amount(item) {
        return item.price;
    }

    sum(prev, next) {
        return prev + next;
    }

    render() {
        var totalPrice = this.state.cartList.map(this.amount).reduce(this.sum);
        const cartItems = this.state.cartList.map((p, index) => 
            <li key={index}>{p.name} - {p.price}</li>
        );
        const userItems = Object.keys(this.state.userList).map((key, index) => 
            <li key={index}>{key} - {this.state.userList[key]}</li>
        );
        if (this.state.confirmation) {
            return (<Redirect push to="/confirmation" />);
        } else if(this.state.orderKind == 'delivery') {
            return(
                <div>
                    <div className="userInfo">
                        <h2>Delivery Info</h2>
                        <ul>
                            {userItems}
                        </ul>
                    </div>
                    <div className="cartInfo">
                        <h2>Pizzas Ordered</h2>
                        <ul>
                            {cartItems}
                        </ul>
                    </div>
                    <h3>total Price</h3>
                    <p>{totalPrice}</p>
                    <button className="button" onClick={() => this.submitOrder()}>Confirm Order</button>
                </div>
            );
        } else if (this.state.orderKind == 'pickup') {
            return(
                <div>
                    <div className="userInfo">
                        <h2>Pickup Info</h2>
                        <ul>
                            {userItems[0]}
                            {userItems[1]}
                        </ul>
                    </div>
                    <div className="cartInfo">
                        <h2>Pizzas Ordered</h2>
                        <ul>
                            {cartItems}
                        </ul>
                    </div>
                    <h3>total Price</h3>
                    <p>{totalPrice}</p>
                    {/*<Link to="/confirmation" onClick={() => this.submitOrder()}>Confirm Order</Link>*/}
                    <button className="button" onClick={() => this.submitOrder()}>Confirm Order</button>
                </div>
            );
        } else {
            return(
                <div>
                    <h2>DATA_ERROR</h2>
                    <p>orderKind undefined, you should maybe not be here</p>
                </div>
            );
        }

    }
}


export default connect(null, { setOrder, getOrder })(OrderReview);