import React from 'react';
import { PropTypes } from 'prop-types';
import { getOrder } from '../../actions/orderActions';
import { connect } from 'react-redux';
import toastr from 'toastr';
import Pizza from '../Pizza/Pizza';

class PreviouseOrders extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        const { getOrder } = this.props;
        getOrder(JSON.parse(localStorage.getItem('userInfo')).telephone);
        
    }

    addToCart() {
        var cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        const { order } = this.props;
        order[order.length-1].map(o => cart.push(o));

        localStorage.setItem('cartItems', JSON.stringify(cart));
        toastr.success('order added to cart', 'Success!', {timeOut: 1000});
        this.props.toggle();
    }

    
    render() {
        const { order } = this.props;
        var pizzas;
        if(order.length > 0) {
            
            pizzas = order[order.length-1].map((o, index) =><Pizza key={index} pizza={o} />)
        }
        return (
            <div className='popup'>
                <div className='popup_inner popup_inner-previous'>
                    <span className="close" onClick={() => this.props.toggle()}>&times;</span>
                    <h1>Want to add previous order to cart?</h1>
                    <button onClick={()=> this.addToCart()}>Add to cart</button>
                    <div className="pizza-container previous">
                        {pizzas}
                    </div>
                </div>
            </div>
        );
    }
}

PreviouseOrders.propTypes = {
    /* closes the popup */
    toggle: PropTypes.func.isRequired
};

const mapStateToProps = ({ order }) => {
    return { order }
}

export default connect(mapStateToProps, { getOrder })(PreviouseOrders);