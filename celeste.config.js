const TRAF = require('./src/static/abis/TRAF-Staking-ABI.json');

module.exports = {
    rpc: {
        chainId: 1666700000,
        url: 'https://trafstakingserver.herokuapp.com',
    },
    smartContracts: [{ key: 'TRAFStake', abi: TRAF, address: '0xe83e5b15d64572329DfdbE6fE1c5aA97394939C5' }],

    addressBook: {
        trafNFT: '0x127B9863BB8f53F79c57e9f02bBBB444b572DBC0',
        ocaToken: '0xD6134Fa9Df5dacfEc37d24cF649931ebc51578eA',
        trafStake: '0xe83e5b15d64572329DfdbE6fE1c5aA97394939C5',
    },
};
