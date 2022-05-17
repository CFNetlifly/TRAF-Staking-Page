import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { ConnectedWrapper } from '@celeste-js/react';
import ConnectWallet from 'src/components/commons/connect-wallet';
import StakingCard from './staking-card';
import SubmitFooter from './staking-footer';

const Staking = () => {
    return (
        <>
            <section className="section has-text-centered has-font-montserrat ">
                <h3 className="subtitle is-size-7-mobile has-text-weight-bold has-text-hamber">
                    Welcome to TRAF Genesis Staking
                </h3>

                <div className="container">
                    <ConnectedWrapper
                        disconnectedComponent={
                            <>
                                <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                    In order to stake your NFTs, please connect your wallet
                                </p>
                                <ConnectWallet />
                            </>
                        }
                    >
                        <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                            Stake your TRAF NFTs to earn $TRAF tokens
                        </p>
                        <StakingCard />
                    </ConnectedWrapper>
                </div>
            </section>
            <SubmitFooter />
        </>
    );
};

Staking.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Staking');
export default Staking;
