import React from 'react';

import { PropTypes } from 'prop-types';

class CartItem extends React.Component {

    handleClick() {
        this.props.remove(this.props.index);
    }

    render() {
        const { name, description, price } = this.props.pizza;
        return (
            <div className="pizza-wrapper-cart">
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price} ISK</div>
                <button className="remove" onClick={() => this.handleClick()}>&#10006;</button>
            </div>
        );
    }
};

CartItem.propTypes = {
    /* Detail information of pizza in cart. */
    pizza: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    }),
    /* removes pizza from cart. */
    remove: PropTypes.func,
    /* To send with remove function so we know which pizza we want to remove. */
    index: PropTypes.number
};

export default CartItem;