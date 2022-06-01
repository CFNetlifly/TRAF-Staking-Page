import { useSelector } from 'react-redux';

const SubmitFooter = ({ approvalStatus, approvalAction, stakeHandler }) => {
    const { tokenSelectedReducer, stakeNFTReducer, approveNFTReducer } = useSelector(state => state);

    return approvalStatus ? (
        <nav className="navbar is-flex is-justify-content-space-between is-align-items-center has-font-montserrat is-fixed-bottom has-background-hgrafooter px-3">
            <div className="is-flex is-justify-content-flex-start">
                <h1 className="subtitle is-size-5 is-size-7-mobile has-text-white">
                    Staking {tokenSelectedReducer.genesisTokens.length} tokens
                </h1>
            </div>
            <div className="is-flex is-justify-content-flex-end">
                <button
                    className={`button ${
                        stakeNFTReducer.loading ? 'is-loading' : ''
                    }is-size-7-mobile is-rounded has-background-transparent has-text-hamber has-border-1-hamber-o-10 px-6`}
                    type="button"
                    onClick={stakeHandler}
                    disabled={tokenSelectedReducer.genesisTokens.length === 0}
                >
                    <span className="has-text-weight-bold">Stake</span>
                </button>
            </div>
        </nav>
    ) : (
        <nav className="navbar is-flex is-justify-content-space-between is-align-items-center has-font-montserrat is-fixed-bottom has-background-hgrafooter px-3">
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
                    onClick={approvalAction}
                >
                    <span className="has-text-weight-bold">Approve</span>
                </button>
            </div>
        </nav>
    );
};

export default SubmitFooter;
