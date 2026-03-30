import { clsx } from 'clsx';

/**
 * Utility function to merge class names conditionally
 * @param  {...any} inputs - Class names or conditional class objects
 * @returns {string} Merged class string
 */
export function cn(...inputs) {
  return clsx(inputs);
}
