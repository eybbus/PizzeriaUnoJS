import React from 'react';
import { connect } from 'react-redux';
import { getPizza } from '../../actions/pizzaDetailActions';
import Popup from '../Popup/Popop';

class PizzaDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        }
    }
    componentDidMount() {
        // Dispatch action from Redux
        const { getPizza } = this.props;
        const { pizzaId } = this.props.match.params;+
        getPizza(pizzaId);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    addToCart() {
        var cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        var itemToAdd = this.props.pizzaDetail;
        cart.push(itemToAdd);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        this.togglePopup();
    }
    

    render() {
        //const { name, description, price, image } = this.props;
        const { pizzaDetail } = this.props;
        
        return (
            <div className="pizza-wrapper">
                <div>
                    <img src={pizzaDetail.image} alt="" />
                </div>
                <div className="pizza-name">{pizzaDetail.name}</div>
                <div className="pizza-description">{pizzaDetail.description}</div>
                <div className="pizza-price">{pizzaDetail.price}</div>
                <button onClick={()=> this.addToCart()}>Add to cart</button>
                {this.state.showPopup ? <Popup /> : null}
            </div>
        )
    }
    
};

const mapStateToProps = ({ pizzaDetail }) => {
    return { pizzaDetail }
}

export default connect(mapStateToProps, { getPizza })(PizzaDetails);