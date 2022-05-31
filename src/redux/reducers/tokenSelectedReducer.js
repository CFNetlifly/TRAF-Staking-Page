import { ADD_TOKEN, REMOVE_ALL_TOKENS, REMOVE_TOKEN } from '../constants';

const defaultState = {
    genesisTokens: [],
    stakedTokens: [],
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TOKEN:
            return {
                ...state,
                [action.payload.tokenType]: [...state[action.payload.tokenType], action.payload.token],
            };
        case REMOVE_TOKEN:
            return {
                ...state,
                [action.payload.tokenType]: state[action.payload.tokenType].filter(
                    token => token !== action.payload.token
                ),
            };
        case REMOVE_ALL_TOKENS:
            return {
                ...state,
                [action.payload.tokenType]: [],
            };
        default:
            return state;
    }
};

export default reducer;
