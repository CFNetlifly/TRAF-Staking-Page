import {
    // SET_LOCK_TIME,
    // SET_LOCK_TIME_NAME,
    // SET_ROI,
    // SET_APR,
    // SET_LOCK_TIME_BUTTON_NAME,
    // SET_ROI_DISPLAY,
    ADD_GENESIS_NFT,
    EDIT_GENESIS_NFT,
    REMOVE_GENESIS_NFT,
    CLEAN_GENESIS_NFT,
} from '../constants';

const defaultState = {
    nfts: [],
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_GENESIS_NFT:
            return {
                ...state,
                nfts: [...state.nfts, ...action.payload],
            };
        case EDIT_GENESIS_NFT:
            return {
                ...state,
                nfts: [...state.nfts.filter(nft => nft.tokenId !== action.payload.tokenId), action.payload],
            };
        case REMOVE_GENESIS_NFT:
            return {
                ...state,
                nfts: [...state.nfts.filter(nft => nft.tokenId !== action.payload)],
            };

        case CLEAN_GENESIS_NFT:
            return {
                ...state,
                nfts: [],
            };

        default:
            return state;
    }
};
export default reducer;
