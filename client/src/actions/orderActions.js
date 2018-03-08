import { GET_ORDER_BY_TELEPHONE, SET_ORDER_BY_TELEPHONE } from '../constants/orderConstants';
import fetch from 'isomorphic-fetch';

export const setOrder = (telephone, order) => {
    console.log(order);
    console.log(JSON.stringify(order));
    
    
    return dispatch => fetch('http://localhost:3500/api/orders/'+telephone, { 
        method: 'POST', 
        headers: new Headers({ 'Content-Type': 'application/json' }), 
        body: JSON.stringify(order) 
    }).then(resp => {
        console.log(resp);
        if (resp.ok) { 
            dispatch(orderSuccessful()); 
        } else { dispatch(orderFailed()); }
    });
};

export const getOrder = (telephone) => {
    return dispatch => fetch('http://localhost:3500/api/orders/'+telephone).then(json => json.json()).then(data => dispatch(getOrderSuccess(data)));
};


const orderSuccessful = () => {
    console.log('yay');
    return {
        type: SET_ORDER_BY_TELEPHONE
    };
};

const orderFailed = () => {
    console.log('nay');
    return {
        type: SET_ORDER_BY_TELEPHONE
    };
}

const getOrderSuccess = (orders) => {
    console.log(orders);
    return {
        type: GET_ORDER_BY_TELEPHONE,
        payload: orders
    };
};