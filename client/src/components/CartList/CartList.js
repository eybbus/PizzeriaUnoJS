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
        console.log('test button pressed');
        console.log(this.state.list);
        console.log(id);

        var newList = this.state.list;
        newList.splice(id, 1);
        
        localStorage.setItem('cartItems', JSON.stringify(newList));
        console.log(newList);
        newList = JSON.parse(localStorage.getItem('cartItems'));
        this.setState({ list: newList });
        
    }

    render () {
        const list = this.state.list;
        const cartItems = list.map((p, index) => 
            <CartItem key={index} index={index} pizza={p} remove={(id) => this.removeItem(id)} />
        );
        return (
            <div className="pizza-container">
                {cartItems}
            </div>
        );
    }
};

export default CartList;