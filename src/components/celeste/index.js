import CelesteJS from '@celestejs/core';

import { CelesteStoreProvider, CelesteProvider } from '@celestejs/react';

import celesteConfig from 'celeste.config';

const celeste = new CelesteJS(celesteConfig);

const CelesteComponent = ({ children }) => {
    return (
        <CelesteStoreProvider>
            <CelesteProvider celeste={celeste}>{children}</CelesteProvider>
        </CelesteStoreProvider>
    );
};

export default CelesteComponent;
