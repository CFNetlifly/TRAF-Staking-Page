import { FETCH_GENESIS_TOKENS_FAILURE, FETCH_GENESIS_TOKENS_REQUEST, FETCH_GENESIS_TOKENS_SUCCESS } from '../constants';

const defaultState = {
    loading: true,
    error: false,
    success: false,
    data: [],
};

const defaultRequest = {
    genesisTokens: { ...defaultState },
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultRequest, action) => {
    switch (action.type) {
        case FETCH_GENESIS_TOKENS_REQUEST:
            return {
                ...state,
                genesisTokens: {
                    ...defaultState,
                    loading: true,
                },
            };
        case FETCH_GENESIS_TOKENS_SUCCESS:
            return {
                ...state,
                genesisTokens: {
                    ...defaultState,
                    success: true,
                    data: action.payload.data,
                },
            };
        case FETCH_GENESIS_TOKENS_FAILURE:
            return {
                ...state,
                genesisTokens: {
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
