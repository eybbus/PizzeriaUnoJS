import { GET_ORDER_BY_TELEPHONE, SET_ORDER_BY_TELEPHONE } from '../constants/orderConstants';
import fetch from 'isomorphic-fetch';

export const setOrder = (telephone, order) => {
    return dispatch => fetch('http://localhost:3500/api/orders/'+telephone, { 
        method: 'POST', 
        headers: new Headers({ 'Content-Type': 'application/json' }), 
        body: JSON.stringify(order) 
    }).then(resp => {
        if (resp.ok) { 
            dispatch(setOrderSuccessful()); 
        } else { 
            dispatch(setOrderFailed()); 
        }
    });
};

export const getOrder = (telephone) => {
    return dispatch => fetch('http://localhost:3500/api/orders/'+telephone).then(resp => resp.ok ? resp.json() : []).then(data => dispatch(getOrderSuccess(data)));
    /*{ 
        if (resp.ok) {
            dispatch(getOrderSuccess(resp.json()))
        } else {
            dispatch(getOrderFailed())
        }    
    });*/

};


const setOrderSuccessful = () => {
    return {
        type: SET_ORDER_BY_TELEPHONE
    };
};

const setOrderFailed = () => {
    return {
        type: SET_ORDER_BY_TELEPHONE
    };
}


const getOrderSuccess = (orders) => {
    return {
        type: GET_ORDER_BY_TELEPHONE,
        payload: orders
    };
};
