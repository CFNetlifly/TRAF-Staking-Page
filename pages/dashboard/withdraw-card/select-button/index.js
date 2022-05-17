const WithDrawButton = () => {
    return (
        <div className="columns is-centered">
            <div className="column is-6">
                <button
                    className="button is-fullwidth is-rounded is-borderless has-background-hamber-o-2 has-text-hamber"
                    type="button"
                >
                    <span className="has-text-weight-bold">Select</span>
                </button>
            </div>
        </div>
    );
};

export default WithDrawButton;
