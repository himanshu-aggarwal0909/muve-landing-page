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
  // Set base path for GitHub Pages subdirectory
  basePath: '/muve-landing-page',
  trailingSlash: true,
}

export default nextConfig
