import { useCelesteSelector } from '@celeste-js/react';
import { useSelector, useDispatch } from 'react-redux';
import { approve_nft_request, approve_nft_failure, approve_nft_success } from 'src/redux/actions';
import { useEffect, useState } from 'react';
import TRAFProxy from 'src/abi-functions/TRAF-Proxy';
import { addressBook } from 'celeste.config';

const SubmitFooter = () => {
    const dispatch = useDispatch();
    const { tokenSelectedReducer, lockTimeReducer, approveNFTReducer } = useSelector(state => state);
    const { walletReducer } = useCelesteSelector(state => state);

    const [isApproved, setIsApproved] = useState(false);

    const checkApproval = async () => {
        const { address } = walletReducer;
        const { trafStake } = addressBook;
        const TRAF = TRAFProxy();

        const approval = await TRAF.isApprovedForAll({ owner: address, operator: trafStake });

        return approval;
    };

    const approveAll = async () => {
        const { trafStake } = addressBook;
        const TRAF = TRAFProxy();
        try {
            dispatch(approve_nft_request());
            const tx = await TRAF.setApprovalForAll(
                {
                    address: trafStake,
                    approved: true,
                },
                {
                    from: walletReducer.address,
                }
            );
            dispatch(approve_nft_success());
            setIsApproved(true);
        } catch (e) {
            dispatch(approve_nft_failure(e));
            console.log(e);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const approval = await checkApproval();
                setIsApproved(approval);
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    const handleStake = async () => {
        const nftData = lockTimeReducer.nfts.filter(item => tokenSelectedReducer.genesisTokens.includes(item.tokenId));
        console.log('🚀 ~ file: index.js ~ line 15 ~ handleStake ~ nftData', nftData);

        const TRAF = TRAFProxy();
        try {
            dispatch(approve_nft_request());
            const stake = await TRAF.stake(
                {
                    ids: nftData.map(item => item.tokenId),
                    lockTimes: nftData.map(item => item.value),
                },
                {
                    from: walletReducer.address,
                }
            );
            dispatch(approve_nft_success());
        } catch (e) {
            dispatch(approve_nft_failure(e));
            console.log(e);
        }
    };

    return isApproved ? (
        <nav className="navbar is-flex is-justify-content-space-between is-align-items-center has-font-montserrat is-fixed-bottom has-background-hgrafooter px-3">
            <div className="is-flex is-justify-content-flex-start">
                <h1 className="subtitle is-size-5 is-size-7-mobile has-text-white">
                    Staking {tokenSelectedReducer.genesisTokens.length} tokens
                </h1>
            </div>
            <div className="is-flex is-justify-content-flex-end">
                <button
                    className={`button ${
                        approveNFTReducer.loading ? 'is-loading' : ''
                    }is-size-7-mobile is-rounded has-background-transparent has-text-hamber has-border-1-hamber-o-10 px-6`}
                    type="button"
                    onClick={handleStake}
                    disabled={tokenSelectedReducer.genesisTokens.length === 0}
                >
                    <span className="has-text-weight-bold">Stake</span>
                </button>
            </div>
        </nav>
    ) : (
        <nav className="navbar is-flex is-justify-content-space-between is-align-items-center has-font-montserrat is-fixed-bottom has-background-hgrafooter px-5">
            <div className="is-flex is-justify-content-flex-start">
                <h1 className="subtitle is-size-6 is-size-7-mobile has-text-white">
                    Please approve token usage to stake your TRAF NFTs
                </h1>
            </div>
            <div className="is-flex is-justify-content-flex-end">
                <button
                    className={`button ${
                        approveNFTReducer.loading ? 'is-loading' : ''
                    } is-rounded is-size-7-mobile has-background-transparent has-text-hamber has-border-1-hamber-o-10 px-6`}
                    type="button"
                    onClick={approveAll}
                >
                    <span className="has-text-weight-bold">Approve</span>
                </button>
            </div>
        </nav>
    );
};

export default SubmitFooter;
