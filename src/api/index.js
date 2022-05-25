import axios from 'axios';

const { ENDPOINT } = process.env;

const api = {
    get: {
        genesisTokens: ({ userAddress }) => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/genesisTokens/?user=${userAddress}`,
            });
        },

        stakedTokens: ({ userAddress }) => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/stakedTokens/?user=${userAddress}`,
            });
        },
    },
};

export default api;
