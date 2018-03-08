import React from 'react';

import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types';

const Pizza = ({ pizza }) => {
    const { id, name, description, price } = pizza;
    return (
        <div className="pizza-wrapper">
            <Link className="pizza-link" to={`/pizzas/${id}`}>
                <div className="pizza-name">{name}</div>
                <div className="pizza-description">{description}</div>
                <div className="pizza-price">{price}</div>
            </Link>
        </div>
    );
};

Pizza.propTypes = {
    /* Pizza object that contains all information of the pizza to display. */
    pizza: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};

export default Pizza;