import { WITHDRAW_NFT_REQUEST, WITHDRAW_NFT_FAILURE, WITHDRAW_NFT_SUCCESS } from '../constants';

export const withdraw_nft_request = () => ({
    type: WITHDRAW_NFT_REQUEST,
});

export const withdraw_nft_success = () => ({
    type: WITHDRAW_NFT_SUCCESS,
});

export const withdraw_nft_failure = () => ({
    type: WITHDRAW_NFT_FAILURE,
});
