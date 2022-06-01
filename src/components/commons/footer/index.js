const Footer = () => {
    return (
        <footer className="footer py-5 has-font-montserrat">
            <div className="content has-text-centered">
                <div className="columns is-centered">
                    <div className="column has-text-centered">
                        <div className="is-flex is-flex-direction-row is-justify-content-center">
                            <div className="column is-narrow">
                                <a href="https://twitter.com/TheRedApeFamily" target="_blank" rel="noopener noreferrer">
                                    <span className="icon has-text-white is-size-4">
                                        <i className="fab fa-twitter" />
                                    </span>
                                </a>
                            </div>
                            <div className="column is-narrow">
                                <a
                                    href="https://www.instagram.com/theredapefamily/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon has-text-white is-size-4">
                                        <i className="fab fa-instagram" />
                                    </span>
                                </a>
                            </div>
                            <div className="column is-narrow">
                                <a
                                    href="https://www.youtube.com/channel/UCLCsACZQEeKOzjfbK2kIo9A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon has-text-white is-size-4">
                                        <i className="fab fa-youtube" />
                                    </span>
                                </a>
                            </div>
                            <div className="column is-narrow">
                                <a href="https://discord.gg/JeqSUsVQQC" target="_blank" rel="noopener noreferrer">
                                    <span className="icon has-text-white is-size-4">
                                        <i className="fab fa-discord" />
                                    </span>
                                </a>
                            </div>
                            <div className="column is-narrow">
                                <a
                                    href="https://opensea.io/collection/theredapefamily"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="icon has-text-white is-size-4">
                                        <i className="fas fa-sailboat" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="pt-5">
                            <p className="subtitle has-text-hamber is-6 mb-3">
                                <a
                                    className="has-text-hamber"
                                    href="https://whitepaper.theredapefamily.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Whitepaper
                                </a>
                            </p>

                            <p className="subtitle has-text-hamber is-6 mb-3 pt-4">Contract Address</p>
                            <a
                                href="https://etherscan.io/address/0x81f296145c5555d7b4b426d97e4e2260c017f5d0"
                                className="has-text-hamber"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="subtitle has-text-hamber is-6">
                                    0x81f296145c5555d7b4b426d97e4e2260c017f5d0
                                </p>
                            </a>
                            <p className="subtitle has-text-hamber is-6 mb-3 pt-5">traf@zainimedia.com</p>
                            <p className="subtitle has-text-hamber is-6 mb-3">
                                © 2022 The Red Ape Family. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
