const TRAF = require('./src/static/abis/TRAF-Staking-ABI.json');

module.exports = {
    rpc: {
        chainId: 4,
        url: 'https://rinkeby.arbitrum.io/rpc',
    },
    smartContracts: [{ key: 'TRAFStake', abi: TRAF, address: '0x56DE9Af8Dbf394799C7bd539bbC34320C668bF16' }],

    addressBook: {
        trafNFT: '0xa35D400772425aC844016f52D380173d21E8CF49',
        ocaToken: '0x7D98935d16611BF3fb2a5b5D0BA36877339d419D',
        trafStake: '0x56DE9Af8Dbf394799C7bd539bbC34320C668bF16',
    },
};
