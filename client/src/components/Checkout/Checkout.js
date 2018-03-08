import React from 'react';
import PickupForm from '../PickupForm/PickupForm';
import DeliveryForm from '../DeliveryForm/DeliveryForm';
import OrderReview from '../OrderReview/OrderReview';


class Checkout extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            orderKind: this.props.location.state.linkState,
            userInfoExists: false
        }
    }

    temp() {
        this.setState({ userInfoExists: true })
    }
    
    render() {
        console.log(this.state);
        if(this.state.userInfoExists) {
            return (
                <div>
                    <OrderReview orderKind={this.state.orderKind}/>
                </div>
            );
        } else if (this.state.orderKind == 'delivery') {
            return (
                <div>
                    <DeliveryForm  temp={() => this.temp()} />
                </div>
            );
        } else if (this.state.orderKind == 'pickup') {
            return (
                <div>
                    <PickupForm temp={() => this.temp()} />
                </div>
            );
        }
    }
}

export default Checkout;