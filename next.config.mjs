/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        // For local development API
        API_URL: process.env.API_URL || 'http://localhost:5151'
    },
    // Add this if your API is on a different domain/port
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://139.59.75.99/:5151/api/:path*'
            }
        ]
    }
};

export default nextConfig;