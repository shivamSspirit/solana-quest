const {withContentlayer} = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'robohash.org',
            },

        ],
    },
}

module.exports = withContentlayer(nextConfig);
