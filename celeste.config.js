const TRAF = require('./src/static/abis/TRAF-Staking-ABI.json');

module.exports = {
    rpc: {
        chainId: 4,
        url: 'https://rinkeby.arbitrum.io/rpc',
    },
    smartContracts: [
        { key: 'TRAF', abi: TRAF, address: '0xF412bF680FF0bf5583bf45C547Ba47929bA3256F' },
    ],

    addressBook: {
        trafNFT: '0xF6e4ED6d2f749701A606FCb7e009c54D1dC80956',
        trafToken:'0x0557Cf04d3E8337A32AB75835b62056941f79747',
    }

};
