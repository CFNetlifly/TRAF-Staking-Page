import axios from 'axios';

const { ENDPOINT } = process.env.ENDPOINT;

const api = {
    get: {
        genesisTokens: ({ userAddress }) => {
            axios({
                method: 'get',
                url: `${ENDPOINT}/genesisTokens/?user=${userAddress}`,
            });
        },

        stakedTokens: ({ userAddress }) => {
            axios({
                method: 'get',
                url: `${ENDPOINT}/stakedTokens/?user=${userAddress}`,
            });
        },
    },
};

export default api;
