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
    
    content(order) {
        if(order.length > 0) {
            pizzas = order[order.length-1].map((o, index) =><Pizza key={index} pizza={o} />)
            return(
                <div className='popup_inner popup_inner-previous'>
                    <span className="close" onClick={() => this.props.toggle()}>&times;</span>
                    <h1>Want to add previous order to cart?</h1>
                    <button onClick={()=> this.addToCart()}>Add to cart</button>
                    <div className="pizza-container previous">
                        {pizzas}
                    </div>
                </div>
            );
        } else {
            return (
                <div className='popup_inner popup_inner-previous'>
                    <span className="close" onClick={() => this.props.toggle()}>&times;</span>
                    <h1> There is not record of you ordering from us :( </h1>
                    <h1> Recommend changing that ;) </h1>
                    <img src="https://i.imgur.com/isHNXSF.png" alt="oven is dead"/>
                </div>
            );
        }
    }

    
    render() {
        const { order } = this.props;
        return (
            <div className='popup'>
                {this.content(order)}
            </div>
        );
    }
}

PreviouseOrders.propTypes = {
    /* sends signal to parent to close this component */
    toggle: PropTypes.func.isRequired
};

const mapStateToProps = ({ order }) => {
    return { order }
}

export default connect(mapStateToProps, { getOrder })(PreviouseOrders);