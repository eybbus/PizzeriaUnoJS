import React from 'react';
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import { getAllPizzas } from '../../actions/pizzaActions';

class Menu extends React.Component {
    componentDidMount() {
        const { getAllPizzas } = this.props;
        getAllPizzas();
    }
    render() {
        const { pizza } = this.props;
        
        return (
            <div className="pizza-container">
                <h1> The Shameless Pizzas </h1>
                {pizza.map(p => <Pizza key={p.id} pizza={p} />)}
            </div>
        )
    }
};

const mapStateToProps = ({ pizza }) => {
    return { pizza }
}

export default connect(mapStateToProps, { getAllPizzas })(Menu);