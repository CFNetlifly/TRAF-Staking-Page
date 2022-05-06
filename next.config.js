module.exports = {
    reactStrictMode: true,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        ENDPOINT: 'http://localhost:8080',
        // ENDPOINT: 'http://localhost:8080',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
};
