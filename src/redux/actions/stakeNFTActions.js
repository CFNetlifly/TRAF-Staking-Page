import { STAKE_NFT_REQUEST, STAKE_NFT_FAILURE, STAKE_NFT_SUCCESS } from '../constants';

export const stake_nft_request = () => ({
    type: STAKE_NFT_REQUEST,
});

export const stake_nft_success = () => ({
    type: STAKE_NFT_SUCCESS,
});

export const stake_nft_failure = () => ({
    type: STAKE_NFT_FAILURE,
});
