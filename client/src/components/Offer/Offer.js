import React from 'react';
import { PropTypes } from 'prop-types';

const Offer = ({ givenOffer }) => {
    const { offer, price, validFor } = givenOffer;
    if (price == 0) {
        return (
            <div className="offer-wrapper">
                <div className="offer-offer">{offer}</div>
                <div className="offer-valid">{validFor}</div>
                <button>Buy</button>
            </div>
        );
    } else {
        return (
            <div className="offer-wrapper">
                <div className="offer-offer">{offer}</div>
                <div className="offer-price">{price}</div>
                <div className="offer-valid">{validFor}</div>
                <button>Buy</button>
            </div>
        );
    }
};

Offer.propTypes = {
    offers: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string
    })
};

export default Offer;