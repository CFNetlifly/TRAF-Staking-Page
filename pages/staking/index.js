/* eslint-disable no-nested-ternary */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { ConnectedWrapper, NetworkWrapper, SwitchNetworkButton, useCelesteSelector } from '@celeste-js/react';
import { useState, useEffect } from 'react';
import TRAFProxy from 'src/abi-functions/TRAF-Proxy';
import { addressBook } from 'celeste.config';
import ConnectWallet from 'src/components/commons/connect-wallet';
import { useSelector, useDispatch } from 'react-redux';
import splitEvery from 'src/static/array-splitter';
import {
    approve_nft_request,
    approve_nft_failure,
    approve_nft_success,
    fetch_wallet_data_request,
} from 'src/redux/actions';
import LoadingComponent from 'src/components/commons/loading-component';
import StakingCard from './staking-card';
import SubmitFooter from './staking-footer';

const Staking = () => {
    const dispatch = useDispatch();

    const { walletDataReducer, lockTimeReducer, tokenSelectedReducer } = useSelector(state => state);

    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);

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
            await TRAF.setApprovalForAll(
                {
                    address: trafStake,
                    approved: true,
                },
                {
                    from: walletReducer.address,
                }
            );
            dispatch(approve_nft_success());
            dispatch(fetch_wallet_data_request({ userAddress: walletReducer.address }));
            setIsApproved(true);
        } catch (e) {
            dispatch(approve_nft_failure(e));
        }
    };

    useEffect(() => {
        (async () => {
            if (!web3Reducer.initialized || walletReducer.address === null) return;
            try {
                const approval = await checkApproval();
                setIsApproved(approval);
            } catch (e) {
                setIsApproved(false);
            }
        })();
    }, [walletReducer.address, web3Reducer.initialized]);

    const handleStake = async () => {
        const TRAF = TRAFProxy();
        const nftData = lockTimeReducer.nfts.filter(item => tokenSelectedReducer.genesisTokens.includes(item.tokenId));
        try {
            dispatch(approve_nft_request());
            await TRAF.stake(
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
        }
    };

    return (
        <section className="section has-text-centered has-font-montserrat ">
            <h3 className="subtitle is-size-7-mobile has-text-weight-bold has-text-hamber">
                Welcome to TRAF Genesis Staking
            </h3>

            <div className="container">
                <ConnectedWrapper
                    disconnectedComponent={
                        <div className="content">
                            <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                In order to stake your NFTs, please connect your wallet
                            </p>
                            <ConnectWallet />
                        </div>
                    }
                >
                    <NetworkWrapper
                        info={
                            <div className="content">
                                <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                    In order to view your dashboard, please change your network to ethereum mainnet
                                </p>
                                <div className="py-6">
                                    <SwitchNetworkButton
                                        chainId={4}
                                        className="button is-rounded has-text-black has-background-hamber-o-7 has-text-weight-bold is-borderless has-box-shadow-0-0-10-hamber"
                                        onErrorCB={e => console.log(e)}
                                    >
                                        <span className="icon">
                                            <i className="fas fa-exchange-alt" />
                                        </span>
                                        <span>Switch to ETH Mainnet</span>
                                    </SwitchNetworkButton>
                                </div>
                            </div>
                        }
                    >
                        {walletDataReducer.success ? (
                            <>
                                <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                    Stake your TRAF NFTs to earn $TRAF tokens
                                </p>
                                {walletDataReducer.data.genesisTokens.genesisholder ? (
                                    splitEvery(walletDataReducer.data.genesisTokens.nfts, 3)
                                        .slice(0, 3)
                                        .map(nfts => (
                                            <div className="columns is-centered" key={nfts}>
                                                {nfts.map(genesisToken => (
                                                    <div className="column" key={genesisToken}>
                                                        <StakingCard tokenId={genesisToken} />
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                ) : (
                                    <div className="content py-4">
                                        <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                            You currently don&#39;t own any TRAF NFTs, please purchase one to stake.
                                        </p>
                                    </div>
                                )}
                                {walletDataReducer.data.genesisTokens.genesisholder ? (
                                    <SubmitFooter
                                        approvalStatus={isApproved}
                                        approvalAction={approveAll}
                                        stakeHandler={handleStake}
                                    />
                                ) : null}
                            </>
                        ) : walletDataReducer.loading ? (
                            <div className="content py-6">
                                <LoadingComponent />
                                <div className="py-6" />
                            </div>
                        ) : (
                            <div className="content">
                                <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                    An error occurred while loading your wallet data. Please try again later.
                                </p>
                                <div className="py-6" />
                                <br />
                            </div>
                        )}
                    </NetworkWrapper>
                </ConnectedWrapper>
            </div>
        </section>
    );
};

Staking.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Staking');
export default Staking;
