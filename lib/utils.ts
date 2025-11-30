import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path for GitHub Pages deployment (must match next.config.mjs)
const BASE_PATH = '/muve-landing-page'

// Helper function to get image path with basePath for GitHub Pages
// For static export, we always need the basePath in production
export function getImagePath(path: string): string {
  // During build (static export), always prepend basePath
  // Next.js dev server will handle basePath automatically in development
  return process.env.NODE_ENV === 'production' ? `${BASE_PATH}${path}` : path
}
