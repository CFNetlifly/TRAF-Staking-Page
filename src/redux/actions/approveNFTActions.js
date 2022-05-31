import { APPROVE_NFT_REQUEST, APPROVE_NFT_FAILURE, APPROVE_NFT_SUCCESS } from '../constants';

export const approve_nft_request = () => ({
    type: APPROVE_NFT_REQUEST,
});

export const approve_nft_success = () => ({
    type: APPROVE_NFT_SUCCESS,
});

export const approve_nft_failure = () => ({
    type: APPROVE_NFT_FAILURE,
});
