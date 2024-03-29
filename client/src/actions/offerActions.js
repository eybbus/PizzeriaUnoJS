import { GET_ALL_OFFERS } from '../constants/offerConstants';
import fetch from 'isomorphic-fetch';

export const getAllOffers = () => {
    return dispatch => fetch('http://localhost:3500/api/offers').then(json => json.json()).then(data => dispatch(getAllOfferSuccess(data)));
};

const getAllOfferSuccess = (offers) => {
    return {
        type: GET_ALL_OFFERS,
        payload: offers
    };
};