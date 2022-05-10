const TRAF = require('./src/static/abis/TRAF-Staking-ABI.json');

module.exports = {
    rpc: {
        chainId: 4,
        url: 'https://rinkeby.arbitrum.io/rpc',
    },
    smartContracts: [{ key: 'TRAF', abi: TRAF, address: '0x2b9954655Ee5b963094A82EF0F1380BA9562D38A' }],

    addressBook: {
        trafNFT: '0xF6e4ED6d2f749701A606FCb7e009c54D1dC80956',
        trafToken: '0x0557Cf04d3E8337A32AB75835b62056941f79747',
    },
};
