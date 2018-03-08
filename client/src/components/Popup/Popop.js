import React from 'react';
import { Link } from 'react-router-dom';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>POPUS</h1>
                    <Link
                        to="/pizzas"
                        className="button">More Pizzas?</Link>
                    <Link
                        to={{
                            pathname: '/cart',
                            state: { checkout: true }
                        }}
                        className="button">checkout?</Link>
                </div>
            </div>
        );
    }
}

export default Popup;