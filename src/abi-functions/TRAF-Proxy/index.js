import { store as celesteStore } from '@celestejs/store';
import { addressBook } from 'celeste.config';
import ERC721ABI from 'src/static/abis/ERC-721.json';

const TRAFProxy = () => {
    const { web3Reducer } = celesteStore.getState();
    const { web3 } = web3Reducer;

    // const { web3readonly } = web3Reducer;

    const { TRAFStake } = web3Reducer.contracts;

    const ERC721Proxy = new web3.eth.Contract(ERC721ABI, addressBook.trafNFT);

    return {
        // READ Functions
        stakingStats: async id => {
            const stats = await TRAFStake.methods.stakingStats(id).call();
            return stats;
        },

        isApprovedForAll: async ({ owner, operator }) => {
            const isApproved = await ERC721Proxy.methods.isApprovedForAll(owner, operator).call();
            return isApproved;
        },

        // WRITE Functions

        setApprovalForAll: async ({ address, approved }, { from }) => {
            const tx = await ERC721Proxy.methods.setApprovalForAll(address, approved);

            const res = new Promise((resolve, reject) => {
                try {
                    const txRes = tx.send({ from });
                    resolve(txRes);
                } catch (err) {
                    reject(err);
                }
            });
            return res;
        },

        stake: async ({ ids, lockTimes }, { from }) => {
            const tx = TRAFStake.methods.stake(ids, lockTimes);

            const res = new Promise((resolve, reject) => {
                try {
                    const txRes = tx.send({ from });
                    resolve(txRes);
                } catch (e) {
                    reject(e);
                }
            });
            return res;
        },

        unstake: async ({ ids }, { from }) => {
            const tx = TRAFStake.methods.unstake(ids);

            const res = new Promise((resolve, reject) => {
                try {
                    const txRes = tx.send({ from });
                    resolve(txRes);
                } catch (e) {
                    reject(e);
                }
            });
            return res;
        },
    };
};

export default TRAFProxy;
