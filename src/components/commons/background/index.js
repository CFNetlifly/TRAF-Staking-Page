import styles from './bg.module.scss';

const { bg, bg_img } = styles;

const Background = () => {
    return (
        <div className={bg}>
            <div className={bg_img} />
        </div>
    );
};

export default Background;
