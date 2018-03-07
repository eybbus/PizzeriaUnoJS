import React from 'react';
import { connect } from 'react-redux';
import { getPizza } from '../../actions/pizzaDetailActions';

class PizzaDetails extends React.Component {
    componentDidMount() {
        // Dispatch action from Redux
        const { getPizza } = this.props;
        const { pizzaId } = this.props.match.params;+
        getPizza(pizzaId);
    }

    addToCart() {
        var cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        console.log(cart);

        var itemToAdd = this.props.pizzaDetail;

        console.log(itemToAdd);
        

        cart.push(itemToAdd);
        console.log(cart);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        console.log(this.props.pizzaDetail);
        console.log(Object.keys(localStorage).length);
        //localStorage.setItem('pizza', JSON.stringify(this.pizzaDetail));
        console.log(Object.keys(localStorage));
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
            </div>
        )
    }
    
};

const mapStateToProps = ({ pizzaDetail }) => {
    return { pizzaDetail }
}

export default connect(mapStateToProps, { getPizza })(PizzaDetails);