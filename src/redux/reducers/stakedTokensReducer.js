import { FETCH_STAKED_TOKENS_FAILURE, FETCH_STAKED_TOKENS_REQUEST, FETCH_STAKED_TOKENS_SUCCESS } from '../constants';

const defaultState = {
    loading: true,
    error: false,
    success: false,
    data: [],
};

const defaultRequest = {
    stakedTokens: { ...defaultState },
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultRequest, action) => {
    switch (action.type) {
        case FETCH_STAKED_TOKENS_REQUEST:
            return {
                ...state,
                stakedTokens: {
                    ...defaultState,
                    loading: true,
                },
            };
        case FETCH_STAKED_TOKENS_SUCCESS:
            return {
                ...state,
                stakedTokens: {
                    ...defaultState,
                    success: true,
                    data: action.payload.data,
                },
            };
        case FETCH_STAKED_TOKENS_FAILURE:
            return {
                ...state,
                stakedTokens: {
                    ...defaultState,
                    error: true,
                    errorData: action.payload.errorData,
                },
            };
        default:
            return state;
    }
};

export default reducer;
