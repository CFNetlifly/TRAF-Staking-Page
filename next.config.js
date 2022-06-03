module.exports = {
    reactStrictMode: true,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        ENDPOINT: 'https://trafstakingserver.herokuapp.com/',
        // ENDPOINT: 'http://193.176.87.163:8080',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/staking',
                permanent: true,
            },
        ];
    },
};
