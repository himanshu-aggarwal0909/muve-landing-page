import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get image path
// No basePath needed for custom domain (muve.onehealthbalance.com)
export function getImagePath(path: string): string {
  // Return path as-is since we're using a custom domain without basePath
  return path
}
