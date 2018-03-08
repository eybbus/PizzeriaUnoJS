import React from 'react';
import CartItem from '../CartItem/CartItem';
import DeliveryOptions from '../DeliveryOptions/DeliveryOptions';

class CartList extends React.Component {
    constructor(props) {
        super(props);
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (this.props.location.state == undefined) {
            var checkout = false;
        } else {
            var checkout = true;
        }
        this.state = {
            list: items,
            showDeliveryOptions: checkout || false
        };
    }
    removeItem(id) {
        var newList = this.state.list;
        newList.splice(id, 1);
        localStorage.setItem('cartItems', JSON.stringify(newList));
        newList = JSON.parse(localStorage.getItem('cartItems'));
        this.setState({ list: newList });
    }

    togglePopup() { 
        this.setState({
            showDeliveryOptions: !this.state.showDeliveryOptions
        });
    }

    render () {
        const list = this.state.list;
        const cartItems = list.map((p, index) => 
            <CartItem key={index} index={index} pizza={p} remove={(id) => this.removeItem(id)} />
        );
        console.log(this.state);
        console.log(this.props);
        return (
            <div className="pizza-container">
                <h1>Your Cart</h1>
                {cartItems.length > 0 ? cartItems : <h2 className="pizza-wrapper" >Cart is empty</h2>}
                {cartItems.length > 0 ? <button onClick={() => this.togglePopup()}>Procced to checkout</button> : null}
                {this.state.showDeliveryOptions ? <DeliveryOptions toggle={() => this.togglePopup()} /> : null}
            </div>
        );
    }
};

export default CartList;