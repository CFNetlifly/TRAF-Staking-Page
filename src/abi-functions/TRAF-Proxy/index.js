import { store as celesteStore } from '@celeste-js/store';

const TRAFProxy = () => {
    const { web3Reducer } = celesteStore.getState();

    // const { web3readonly } = web3Reducer;

    const { TRAF, TRAF_READ } = web3Reducer.contracts;

    return {
        // READ Functions
        stakingStats: async id => {
            const stats = await TRAF_READ.methods.stakingStats(id).call();
            return stats;
        },

        // WRITE Functions

        stake: async ({ ids, lockTime }, { from }) => {
            const tx = TRAF.methods.stake(ids, lockTime);

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
            const tx = TRAF.methods.unstake(ids);

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
