// API Configuration
export const API_BASE_URL = 'https://berita-indo-api-next.vercel.app';

// News Sources
export const NEWS_SOURCES = {
  CNN: 'cnn-news',
  CNBC: 'cnbc-news',
};

// Category Mappings
export const CATEGORIES = [
  { id: 'terbaru', label: 'Terbaru', slug: 'terbaru' },
  { id: 'nasional', label: 'Nasional', slug: 'nasional' },
  { id: 'internasional', label: 'Internasional', slug: 'internasional' },
  { id: 'ekonomi', label: 'Ekonomi', slug: 'ekonomi' },
  { id: 'olahraga', label: 'Olahraga', slug: 'olahraga' },
  { id: 'teknologi', label: 'Teknologi', slug: 'teknologi' },
  { id: 'hiburan', label: 'Hiburan', slug: 'hiburan' },
  { id: 'gaya-hidup', label: 'Gaya Hidup', slug: 'gaya-hidup' },
];

// Navigation Links
export const NAV_LINKS = [
  { label: 'Beranda', path: '/' },
  { label: 'Terbaru', path: '/kategori/terbaru' },
  { label: 'Nasional', path: '/kategori/nasional' },
  { label: 'Internasional', path: '/kategori/internasional' },
  { label: 'Ekonomi', path: '/kategori/ekonomi' },
  { label: 'Olahraga', path: '/kategori/olahraga' },
  { label: 'Teknologi', path: '/kategori/teknologi' },
  { label: 'Hiburan', path: '/kategori/hiburan' },
  { label: 'Gaya Hidup', path: '/kategori/gaya-hidup' },
];

// Category Badge Colors
export const CATEGORY_COLORS = {
  terbaru: 'bg-accent-red text-white',
  nasional: 'bg-accent-blue text-white',
  internasional: 'bg-accent-purple text-white',
  ekonomi: 'bg-accent-green text-white',
  olahraga: 'bg-accent-orange text-white',
  teknologi: 'bg-primary-500 text-white',
  hiburan: 'bg-accent-pink text-white',
  'gaya-hidup': 'bg-yellow-500 text-white',
};

// Items per page for pagination
export const ITEMS_PER_PAGE = 9;
