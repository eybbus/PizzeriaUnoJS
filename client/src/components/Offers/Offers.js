import React from 'react';
import { connect } from 'react-redux';
import Offer from '../Offer/Offer';
import { getAllOffers } from '../../actions/offerActions'

class Menu extends React.Component {
    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }
    render() {
        const { offer } = this.props;
        return (
            <div className="offer-container">
                <h1>Offers</h1>
                {offer.map(o => <Offer key={o.id} givenOffer={o} />)}
            </div>
        )
    }
};

const mapStateToProps = ({ offer }) => {
    return { offer }
}

export default connect(mapStateToProps, { getAllOffers })(Menu);

