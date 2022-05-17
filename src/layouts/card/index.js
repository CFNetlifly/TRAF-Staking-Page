const CardLayout = ({ content }) => {
    return (
        <div className="columns is-centered is-size-7-mobile">
            <div className="column is-narrow">
                <div className="card has-background-hblack2 has-border-radius-20 has-box-shadow-4-4-10-hamber">
                    <div className="card-content">{content}</div>
                </div>
            </div>
        </div>
    );
};

export default CardLayout;
