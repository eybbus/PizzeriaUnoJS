import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getAllPizzas } from '../../actions/pizzaActions';
import toastr from 'toastr';

class AddOffer extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        const { getAllPizzas } = this.props;
        getAllPizzas();
    }

    onFormSubmit(e) {
        e.preventDefault();
        /*var cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        var itemToAdd =
        cart.push(itemToAdd);
        localStorage.setItem('cartItems', JSON.stringify(cart));*/
        /* Ran out of time */
        toastr.warning('RAN OUT OF TIME', 'NOT IMPLEMENTED!', {timeOut: 5000});
        this.props.toggle();
    }

    content(offer) {
        const { pizza } = this.props;
        console.log(this.props);
        if(pizza) {
            if (offer.includes('expensive')) {
                return(
                    <div className="selector-container">
                        <div>
                            <h2>First Pizza.</h2>
                            <select name="firstPizza">
                                <option value="">Select</option>
                                {pizza.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                            </select>
                        </div>
                    </div>
                );
            } else if (offer.includes('Two pizzas')) {
                return(
                    <div className="selector-container">
                        <div>
                            <h2>First Pizza.</h2>
                            <select name="firstPizza">
                                <option value="">Select</option>
                                {pizza.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <h2>Second pizza.</h2>
                            <select name="Second pizza">
                                <option value="">Select</option>
                                {pizza.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                            </select>
                        </div>
                        
                    </div>
                );
            } else {
                return(
                    <div className="selector-container">
                        <div>
                            <h2>Select Pizza.</h2>
                            <select name="firstPizza">
                                <option value="">Select</option>
                                {pizza.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                            </select>
                        </div>
                    </div>
                );
            }
        }
    }
    
    render() {
        const { offer } = this.props
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <span className="close" onClick={() => this.props.toggle()}>&times;</span>
                    <h2>{offer.offer}</h2>
                    <form action="" method="get" onSubmit={(e) => this.onFormSubmit(e)}>
                        {this.content(offer.offer)}
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

AddOffer.propTypes = {
    /* sends signal to parent to close this component */
    toggle: PropTypes.func.isRequired
}

const mapStateToProps = ({ pizza }) => {
    return { pizza }
}

export default connect(mapStateToProps, { getAllPizzas })(AddOffer);
