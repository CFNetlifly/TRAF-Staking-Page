const TRAF = require('./src/static/abis/TRAF-Staking-ABI.json');

module.exports = {
    rpc: {
        chainId: 1666700000,
        url: 'https://api.s0.b.hmny.io/',
    },
    smartContracts: [{ key: 'TRAFStake', abi: TRAF, address: '0x7Fb0F4bC8e8eBB0bc0d6CF589515212c68Fc08e2' }],

    addressBook: {
        trafNFT: '0x127B9863BB8f53F79c57e9f02bBBB444b572DBC0',
        ocaToken: '0xD6134Fa9Df5dacfEc37d24cF649931ebc51578eA',
        trafStake: '0x7Fb0F4bC8e8eBB0bc0d6CF589515212c68Fc08e2',
    },
};
