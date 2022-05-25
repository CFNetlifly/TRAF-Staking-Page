/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import { Provider } from 'react-redux';
import store from 'src/redux/store';

import { ReactNotifications } from 'react-notifications-component';
import { custom_notification_types } from 'src/static/notifications';

import appConfig from 'src/static/app.config';
import LockTimeModal from 'src/components/modals/lock-time-modal';
import WithdrawEarlyModal from 'src/components/modals/withdraw-early-modal';

import 'src/scss/main.scss';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import PreComponent from 'src/pre';

const CelesteProvider = dynamic(() => import('src/components/celeste'), { ssr: false });

const { FONT_AWESOME_KEY } = process.env;
const { appName } = appConfig;

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => page);
    return (
        <Provider store={store}>
            <CelesteProvider>
                {/* <PreComponent> */}
                <Head>
                    <title>{appName}</title>
                </Head>
                <ReactNotifications types={custom_notification_types} />
                <LockTimeModal />
                <WithdrawEarlyModal />

                <Script src={`https://kit.fontawesome.com/${FONT_AWESOME_KEY}.js`} />
                {getLayout(<Component {...pageProps} />)}
                {/* </PreComponent> */}
            </CelesteProvider>
        </Provider>
    );
}

export default MyApp;
