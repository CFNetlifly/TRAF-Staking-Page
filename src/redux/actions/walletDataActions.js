import {
    FETCH_WALLET_DATA_REQUEST,
    FETCH_WALLET_DATA_FAILURE,
    FETCH_WALLET_DATA_SUCCESS,
    CLEAN_WALLET_DATA,
} from '../constants';

export const fetch_wallet_data_request = fetchData => {
    return {
        type: FETCH_WALLET_DATA_REQUEST,
        payload: fetchData,
    };
};

export const fetch_wallet_data_failure = () => {
    return {
        type: FETCH_WALLET_DATA_FAILURE,
    };
};

export const fetch_wallet_data_success = data => {
    return {
        type: FETCH_WALLET_DATA_SUCCESS,
        payload: data,
    };
};

export const clean_wallet_data = () => {
    return {
        type: CLEAN_WALLET_DATA,
    };
};
