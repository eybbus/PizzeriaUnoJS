import { GET_ORDER_BY_TELEPHONE } from '../constants/orderConstants';

const orderReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ORDER_BY_TELEPHONE: return action.payload;
        default: return state;
    }
}

export default orderReducer;