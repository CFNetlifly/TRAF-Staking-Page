const SubmitFooter = ({}) => {
    return (
        <nav className="navbar has-font-montserrat is-fixed-bottom has-background-hgrafooter">
            <div className="navbar-start">
                <div className="navbar-item has-text-white">
                    <div className="field is-grouped">
                        <p className="control ">Staking X NFTs</p>
                    </div>
                </div>
            </div>
            <section className="container">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <div className="control">
                                <button
                                    className="button is-rounded has-background-transparent has-text-hamber has-border-1-hamber-o-10 px-6"
                                    type="button"
                                >
                                    <span className="has-text-weight-bold">Stake</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default SubmitFooter;
