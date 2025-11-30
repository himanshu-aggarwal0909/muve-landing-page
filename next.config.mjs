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
  // Set base path if deploying to a subdirectory (e.g., /repository-name)
  // basePath: process.env.NODE_ENV === 'production' ? '/muve-landing-page' : '',
  // trailingSlash: true,
}

export default nextConfig
