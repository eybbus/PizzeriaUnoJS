import React from 'react';
import CartItem from '../CartItem/CartItem';

class CartList extends React.Component {
    constructor(props) {
        super(props);
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.state = {
            list: items
        };
    }
    removeItem(id) {
        var newList = this.state.list;
        newList.splice(id, 1);
        localStorage.setItem('cartItems', JSON.stringify(newList));
        newList = JSON.parse(localStorage.getItem('cartItems'));
        this.setState({ list: newList });
        
    }

    render () {
        const list = this.state.list;
        const cartItems = list.map((p, index) => 
            <CartItem key={index} index={index} pizza={p} remove={(id) => this.removeItem(id)} />
        );
        console.log(cartItems);
        return (
            <div className="pizza-container">
                <h1>Your Cart</h1>
                {cartItems.length > 0 ? cartItems : <h2 className="pizza-wrapper" >Cart is empty</h2>}
            </div>
        );
    }
};

export default CartList;