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
                        className="nav-link">More Pizzas?</Link>
                    <button>close me</button>
                </div>
            </div>
        );
    }
}

export default Popup;