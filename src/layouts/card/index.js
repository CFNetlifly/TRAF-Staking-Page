const CardLayout = ({ content }) => {
    return (
        <div className="columns is-mobile is-centered">
            <div className="column is-narrow">{content}</div>
        </div>
    );
};

export default CardLayout;
