/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable static export for GitHub Pages
  output: 'export',
  // No basePath needed for custom domain (muve.onehealthbalance.com)
  trailingSlash: true,
}

export default nextConfig
