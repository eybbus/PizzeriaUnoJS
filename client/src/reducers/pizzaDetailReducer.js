import { GET_PIZZA, CLEAR } from '../constants/pizzaDetailConstants';
//import { LOCATION_CHANGE } from 'react-router-redux';

const pizzaDetailReducer = (state = [], action) => {
    switch (action.type) {
        case CLEAR: 
            return '';
        case GET_PIZZA: return action.payload;
        
        default: return state;
    }
}

export default pizzaDetailReducer;