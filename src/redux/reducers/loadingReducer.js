import { SET_LOADING_REQUEST, SET_LOADING_SUCCESS, SET_LOADING_FAILURE } from '../constants';

const defaultState = {
    loading: false,
    success: false,
    error: false,
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_LOADING_REQUEST:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case SET_LOADING_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
            };
        case SET_LOADING_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;
