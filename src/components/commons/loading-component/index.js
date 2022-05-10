/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @next/next/no-img-element */
import styles from './loading.module.scss';

const { loading_component, lds_circle } = styles;

const LoadingComponent = ({ msg, ...rest }) => {
    return (
        <div className={loading_component} {...rest}>
            <div className={lds_circle}>
                <img src="media/logos/traf-logo.png" alt="" />
            </div>
            <h1 className="subtitle has-text-white">{msg || 'Loading ...'}</h1>
        </div>
    );
};

export default LoadingComponent;
