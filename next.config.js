/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    images: {
        domains: [
            'simka.kemkes.go.id', 
            'assets.goal.com'
        ]
    }
}

module.exports = nextConfig
