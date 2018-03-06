import { GET_PIZZA, CLEAR } from '../constants/pizzaDetailConstants';
import fetch from 'isomorphic-fetch';

export const getPizza = (id) => {
    return dispatch => {
        dispatch(clearPizza());
        return fetch('http://localhost:3500/api/pizzas/' + id).then(json => json.json()).then(data => dispatch(getPizzaSuccess(data)));
    };
};

export const clearPizza = () => {
    return {
        type: CLEAR,
        
    };
};

const getPizzaSuccess = (pizzaDetail) => {
    return {
        type: GET_PIZZA,
        payload: pizzaDetail
    };
};

