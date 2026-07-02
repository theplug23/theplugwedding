
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
        unoptimized: true, // Désactive l'optimisation (si vous n'en avez pas besoin)
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
            {
                protocol: 'https',
                hostname: 'youtube.com',
            },
        ],
    },
}

module.exports = nextConfig;