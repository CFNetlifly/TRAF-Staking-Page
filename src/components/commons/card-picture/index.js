/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-nested-ternary */

const CardPicture = ({ id }) => {
    return id >= 1 && id <= 333 ? (
        <figure className="image is-300x300">
            <img className="has-border-radius-30" src="media/nfts/episode1.jpg" alt="Episode 1" />
        </figure>
    ) : id >= 334 && id <= 666 ? (
        <figure className="image is-300x300">
            <img className="has-border-radius-30" src="media/nfts/episode2.jpg" alt="Episode 2" />
        </figure>
    ) : (
        <figure className="image is-300x300">
            <img className="has-border-radius-30" src="media/nfts/episode3.png" alt="Episode 3" />
        </figure>
    );
};

export default CardPicture;
