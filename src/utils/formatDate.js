import { formatDistanceToNow, format, parseISO } from 'date-fns';
import { id } from 'date-fns/locale';

/**
 * Format ISO date to relative time (e.g., "2 jam yang lalu")
 * @param {string} isoDate - ISO 8601 date string
 * @returns {string} Relative time string in Indonesian
 */
export function formatRelativeTime(isoDate) {
  try {
    const date = parseISO(isoDate);
    return formatDistanceToNow(date, { addSuffix: true, locale: id });
  } catch {
    return '';
  }
}

/**
 * Format ISO date to readable date (e.g., "30 Maret 2026")
 * @param {string} isoDate - ISO 8601 date string
 * @returns {string} Formatted date string in Indonesian
 */
export function formatFullDate(isoDate) {
  try {
    const date = parseISO(isoDate);
    return format(date, 'd MMMM yyyy', { locale: id });
  } catch {
    return '';
  }
}

/**
 * Format ISO date to date and time (e.g., "30 Maret 2026, 14:30 WIB")
 * @param {string} isoDate - ISO 8601 date string
 * @returns {string} Formatted date with time
 */
export function formatDateTime(isoDate) {
  try {
    const date = parseISO(isoDate);
    return format(date, "d MMMM yyyy, HH:mm 'WIB'", { locale: id });
  } catch {
    return '';
  }
}
