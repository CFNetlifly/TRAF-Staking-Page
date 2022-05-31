import { ADD_TOKEN, REMOVE_ALL_TOKENS, REMOVE_TOKEN } from '../constants';

export const add_token = ({ token, tokenType }) => {
    return {
        type: ADD_TOKEN,
        payload: { token, tokenType },
    };
};

export const remove_all_tokens = ({ tokenType }) => {
    return {
        type: REMOVE_ALL_TOKENS,
        payload: { tokenType },
    };
};

export const remove_token = ({ token, tokenType }) => {
    return {
        type: REMOVE_TOKEN,
        payload: { token, tokenType },
    };
};
