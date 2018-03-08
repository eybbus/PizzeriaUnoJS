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
            <div>
                <h1>Offers</h1>
                <div className="offer-container">
                    {offer.map(o => <Offer key={o.id} givenOffer={o} />)}
                </div>
            </div>
        )
    }
};

const mapStateToProps = ({ offer }) => {
    return { offer }
}

export default connect(mapStateToProps, { getAllOffers })(Menu);

