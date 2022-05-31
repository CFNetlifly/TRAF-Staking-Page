const CardLayout = ({ content }) => {
    return (
        <div className="columns is-centered is-size-7-mobile">
            <div className="column is-narrow">{content}</div>
        </div>
    );
};

export default CardLayout;
