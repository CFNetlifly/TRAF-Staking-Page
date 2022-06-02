import { ConnectButton } from '@celeste-js/react';
import { providers } from '@celeste-js/core/dist/constants';

const ConnectWallet = () => {
    return (
        <div className="py-6">
            <ConnectButton
                className="button is-rounded has-text-black has-background-hamber-o-7 has-text-weight-bold is-borderless has-box-shadow-0-0-10-hamber"
                providerType={providers.INJECTED}
                onErrorCB={() => {}}
            >
                <span className="icon">
                    <i className="fas fa-wallet" />
                </span>
                <span>Connect Wallet</span>
            </ConnectButton>
        </div>
    );
};

export default ConnectWallet;
