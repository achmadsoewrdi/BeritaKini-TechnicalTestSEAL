import api from './api';
import { NEWS_SOURCES } from '../utils/constants';

/**
 * Fetch all news from CNN
 * @returns {Promise<Array>} Array of news articles
 */
export async function fetchAllNews() {
  const { data } = await api.get(`/api/${NEWS_SOURCES.CNN}`);
  return data.data || [];
}

/**
 * Fetch news by category from CNN
 * @param {string} category - Category slug (nasional, internasional, etc.)
 * @returns {Promise<Array>} Array of news articles
 */
export async function fetchNewsByCategory(category) {
  const { data } = await api.get(`/api/${NEWS_SOURCES.CNN}/${category}`);
  return data.data || [];
}

/**
 * Fetch all news from CNBC (second source)
 * @returns {Promise<Array>} Array of CNBC news articles
 */
export async function fetchCNBCNews() {
  const { data } = await api.get(`/api/${NEWS_SOURCES.CNBC}`);
  return data.data || [];
}

/**
 * Search news by title from all CNN news
 * @param {string} query - Search query
 * @returns {Promise<Array>} Filtered news articles
 */
export async function searchNews(query) {
  const { data } = await api.get(`/api/${NEWS_SOURCES.CNN}`, {
    params: { search: query },
  });
  return data.data || [];
}
