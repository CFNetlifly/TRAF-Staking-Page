import {
    FETCH_APP_DATA_REQUEST,
    FETCH_APP_DATA_SUCCESS,
    FETCH_APP_DATA_FAILURE,
    SET_APP_LOADING_PERCENTAGE,
} from '../constants';

const defaultState = {
    data: [],
    loading: true,
    ready: false,
    error: false,
    errorData: null,
    loadingPercent: 0,
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case FETCH_APP_DATA_REQUEST:
            return {
                ...defaultState,
                loading: true,
            };

        case FETCH_APP_DATA_SUCCESS:
            return {
                ...defaultState,
                loading: false,
                ready: true,
                data: payload,
            };

        case FETCH_APP_DATA_FAILURE:
            return {
                ...defaultState,
                error: true,
                errorData: payload,
            };

        case SET_APP_LOADING_PERCENTAGE:
            return {
                ...state,
                loadingPercent: payload,
            };

        default:
            return state;
    }
};

export default reducer;
