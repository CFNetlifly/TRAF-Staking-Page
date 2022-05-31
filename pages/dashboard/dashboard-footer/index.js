import { useCelesteSelector } from '@celeste-js/react';
import { useSelector, useDispatch } from 'react-redux';
import { withdraw_nft_request, withdraw_nft_failure, withdraw_nft_success } from 'src/redux/actions';
// import { useEffect, useState } from 'react';
import TRAFProxy from 'src/abi-functions/TRAF-Proxy';

const SubmitFooter = () => {
    const dispatch = useDispatch();
    const { tokenSelectedReducer, withdrawNFTReducer } = useSelector(state => state);
    const { walletReducer } = useCelesteSelector(state => state);
    // console.log('🚀 ~ file: index.js ~ line 11 ~ SubmitFooter ~ tokenSelectedReducer', tokenSelectedReducer);

    const handleWithdraw = async () => {
        const nftData = tokenSelectedReducer.stakedTokens;
        console.log('🚀 ~ file: index.js ~ line 15 ~ handleWithdraw ~ nftData', nftData);

        const TRAF = TRAFProxy();

        try {
            dispatch(withdraw_nft_request());
            const unstake = await TRAF.unstake(
                {
                    ids: nftData,
                },
                {
                    from: walletReducer.address,
                }
            );
            dispatch(withdraw_nft_success());
        } catch (e) {
            dispatch(withdraw_nft_failure(e));
            console.log(e);
        }
    };

    return (
        <nav className="navbar is-flex is-justify-content-space-between is-align-items-center has-font-montserrat is-fixed-bottom has-background-hgrafooter px-3">
            <div className="is-flex is-justify-content-flex-start">
                <h1 className="subtitle is-size-5 is-size-7-mobile has-text-white">
                    Withdrawing {tokenSelectedReducer.stakedTokens.length} NFTs
                </h1>
            </div>
            <div className="is-flex is-justify-content-flex-end">
                <button
                    className={`button ${
                        withdrawNFTReducer.loading ? 'is-loading' : ''
                    } is-rounded is-size-7-mobile has-background-transparent has-text-hamber has-border-1-hamber-o-10 px-6`}
                    type="button"
                    onClick={handleWithdraw}
                    disabled={tokenSelectedReducer.stakedTokens.length === 0}
                >
                    <span className="has-text-weight-bold">Withdraw</span>
                </button>
            </div>
        </nav>
    );
};

export default SubmitFooter;
