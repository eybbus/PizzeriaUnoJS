import React from 'react';
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import PreviousOrders from '../PreviousOrders/PreviousOrders';
import { getAllPizzas } from '../../actions/pizzaActions';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }
    
    componentDidMount() {
        const { getAllPizzas } = this.props;
        getAllPizzas();
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    
    render() {
        const { pizza } = this.props;
        
        return (
            <div className="pizza-container">
                <h1> The Shameless Pizzas </h1>
                <button className="button prev" onClick={()=> this.togglePopup()}>Previous Orders</button>
                {this.state.showPopup ? <PreviousOrders toggle={() => this.togglePopup()}/> : null}
                {pizza.map(p => <Pizza key={p.id} pizza={p} />)}
            </div>
        )
    }
};

const mapStateToProps = ({ pizza }) => {
    return { pizza }
}

export default connect(mapStateToProps, { getAllPizzas })(Menu);