/* eslint-disable no-nested-ternary */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { ConnectedWrapper, NetworkWrapper, SwitchNetworkButton } from '@celeste-js/react';
import ConnectWallet from 'src/components/commons/connect-wallet';
import { useSelector } from 'react-redux';
import LoadingComponent from 'src/components/loading-component';
import StakingCard from './staking-card';
import SubmitFooter from './staking-footer';

const Staking = () => {
    const { walletDataReducer } = useSelector(state => state);
    // console.log('🚀 ~ file: index.js ~ line 13 ~ Staking ~ walletDataReducer', walletDataReducer);

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
                                    <div className="columns">
                                        {walletDataReducer.data.genesisTokens.nfts.slice(0, 3).map(genesisToken => (
                                            <div className="column" key={genesisToken}>
                                                <StakingCard tokenId={genesisToken} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="content py-4">
                                        <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                            You currently don&#39;t own any TRAF NFTs, please purchase one to stake.
                                        </p>
                                    </div>
                                )}
                                {walletDataReducer.data.genesisTokens.genesisholder ? <SubmitFooter /> : null}
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
