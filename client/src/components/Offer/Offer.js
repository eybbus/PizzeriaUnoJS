import React from 'react';
import { PropTypes } from 'prop-types';
//import PropTypes from 'prop-types';
import AddOffer from '../AddOffer/AddOffer';

class Offer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddOffer: false
        };
    }

    togglePopup() { 
        this.setState({
            showAddOffer: !this.state.showAddOffer
        });
    }
    
    render() {
        const { offer, price, validFor } = this.props.givenOffer;
        if (price == 0) {
            return (
                <div className="offer-wrapper">
                    <div className="offer-offer">{offer}</div>
                    <div className="offer-valid">{validFor}</div>
                    <button className="button" onClick={() => this.togglePopup()}>Buy</button>
                    {this.state.showAddOffer ? <AddOffer offer={this.props.givenOffer} toggle={() => this.togglePopup()} /> : null}
                </div>
            );
        } else {
            return (
                <div className="offer-wrapper">
                    <div className="offer-offer">{offer}</div>
                    <div className="offer-price">{price} ISK</div>
                    <div className="offer-valid">{validFor}</div>
                    <button className="button" onClick={() => this.togglePopup()}>Buy</button>
                    {this.state.showAddOffer ? <AddOffer offer={this.props.givenOffer} toggle={() => this.togglePopup()} /> : null}
                </div>
            );
        }
    }
}

Offer.propTypes = { 
    /* offer information, offertext, price and how long it's valid for */
    givenOffer: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string
    })
};

export default Offer;