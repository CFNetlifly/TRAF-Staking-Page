/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Navbar from 'src/components/commons/navbar';
import Footer from 'src/components/commons/footer';
import Background from 'src/components/commons/background';
// import { useSelector, useDispatch } from 'react-redux';

const MainLayout = props => {
    const { children } = props;

    return (
        <>
            <Background />
            <Navbar />
            <div className="py-6">{children}</div>

            <Footer />
        </>
    );
};

export const getLayout = page => <MainLayout>{page}</MainLayout>;

export default MainLayout;
