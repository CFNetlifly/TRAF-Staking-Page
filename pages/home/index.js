import Head from 'next/head';

import { useState, useEffect } from 'react';

import ExampleModal from 'src/components/commons/modal/example-modal';

import { useSelector, useDispatch } from 'react-redux';

import { open_modal } from 'src/redux/actions/modalActions';

import { Store as NotificationsStore } from 'react-notifications-component';
import { infoNotification } from 'src/static/notifications';

import appConfig from 'src/static/app.config';

const { appName, appVersion } = appConfig;

const Home = () => {
    // reducers
    const { exampleReducer } = useSelector(state => state);

    const dispatch = useDispatch();

    const [msg, setMsg] = useState(exampleReducer.storage);

    const handleNotificationClick = () => {
        NotificationsStore.addNotification(infoNotification('It includes notifications!! '));
    };

    const handleModalClick = () => {
        dispatch(open_modal({ modalName: 'exampleModal', modalData: { msg: 'It includes modals as well 🙂' } }));
    };

    const handleSetVarClick = () => {
        const items = ['apple', 'banana', 'orange', 'grape', 'pear'];
        dispatch({ type: 'SET_VAR', payload: items[Math.floor(Math.random() * items.length)] });
    };

    useEffect(() => {
        setMsg(exampleReducer.storage);
    }, [exampleReducer.storage]);

    return (
        <>
            <Head>
                <title>{appName} | home</title>
            </Head>
            <ExampleModal />

            <div style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
                <div className="box has-background-hblue resize-manager">
                    <h1 className="title has-text-white has-text-centered mb-6">
                        Orcania Next js template v{appVersion}
                    </h1>
                    <h2 className="subtitle has-text-white has-text-centered has-text-justified">
                        Build apps faster with pre builded components, added libraries, and structured folders.
                    </h2>

                    <div className="columns is-marginless">
                        <div className="column">
                            <button className="button is-fullwidth" type="button" onClick={handleNotificationClick}>
                                <span className="icon has-text-dark is-size-4">
                                    <i className="fa-solid fa-robot-astromech" />
                                </span>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-fullwidth" type="button" onClick={handleModalClick}>
                                <span className="icon has-text-dark is-size-4">
                                    <i className="fa-solid fa-user-bounty-hunter" />
                                </span>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-fullwidth" type="button" onClick={handleSetVarClick}>
                                <span className="icon has-text-dark is-size-4">
                                    <i className="fa-solid fa-bat" />
                                </span>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-fullwidth" type="button">
                                <span className="icon has-text-dark is-size-4">
                                    <i className="fa-solid fa-broom-ball" />
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="pt-6">
                        <h1 className="subtitle has-text-white has-text-centered ">
                            <b>reducer storage:</b> <span className="animate__animated animate__fadeInDown">{msg}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
