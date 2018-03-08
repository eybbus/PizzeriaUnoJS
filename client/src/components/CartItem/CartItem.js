import React from 'react';

import { PropTypes } from 'prop-types';

class CartItem extends React.Component {

    handleClick() {
        console.log(this.props.index)
        this.props.remove(this.props.index);
    }

    render() {
        const { name, description, price } = this.props.pizza;
        return (
            <div className="pizza-wrapper-cart">
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price}</div>
                <button className="remove" onClick={() => this.handleClick()}>&#10006;</button>
            </div>
        );
    }
};

CartItem.propTypes = {
    pizza: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    }),
    remove: PropTypes.func.isRequired,
    index: PropTypes.number
};

export default CartItem;