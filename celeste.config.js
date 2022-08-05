const TRAF = require('./src/static/abis/TRAF-Staking-ABI.json');

module.exports = {
    rpc: {
        // chainId: 1666700000,
        chainId: 1,
        // url: 'https://api.s0.b.hmny.io/',
        url: 'https://mainnet.infura.io/v3/fa471aa86d124cde87836175143616f6',
    },
    smartContracts: [{ key: 'TRAFStake', abi: TRAF, address: '0x6B447CEe8a97b5814cDCCE4CbdB0C082318baEE6' }],

    addressBook: {
        trafNFT: '0x81f296145C5555d7b4B426D97E4e2260c017F5d0',
        ocaToken: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
        trafStake: '0x6B447CEe8a97b5814cDCCE4CbdB0C082318baEE6',
    },
};
