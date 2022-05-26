import {
    FETCH_WALLET_DATA_REQUEST,
    FETCH_WALLET_DATA_FAILURE,
    FETCH_WALLET_DATA_SUCCESS,
    CLEAN_WALLET_DATA,
} from '../constants';

const defaultState = {
    success: false,
    loading: false,
    error: false,
    data: {},
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_WALLET_DATA_REQUEST:
            return {
                ...defaultState,
                loading: true,
            };
        case FETCH_WALLET_DATA_FAILURE:
            return {
                ...defaultState,
                error: true,
            };
        case FETCH_WALLET_DATA_SUCCESS:
            return {
                ...defaultState,
                success: true,
                data: action.payload,
            };
        case CLEAN_WALLET_DATA:
            return {
                ...defaultState,
            };
        default:
            return state;
    }
};

export default reducer;
