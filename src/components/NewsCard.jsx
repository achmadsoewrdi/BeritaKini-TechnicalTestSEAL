import { Link } from 'react-router-dom';
import { formatFullDate } from '../utils/formatDate';
import { cn } from '../utils/cn';

/**
 * Detects the news category from the article link URL
 */
function detectCategory(link) {
  if (!link) return 'terbaru';
  const categories = ['nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gaya-hidup', 'otomotif', 'edukasi'];
  for (const cat of categories) {
    if (link.includes(`/${cat}/`)) return cat;
  }
  return 'terbaru';
}

/**
 * Generate a URL-friendly slug from a title
 */
function generateSlug(title) {
  return title
    ?.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 80) || 'untitled';
}

export default function NewsCard({ article, variant = 'vertical', className = '' }) {
  const category = detectCategory(article.link);
  const slug = generateSlug(article.title);

  if (variant === 'horizontal') {
    return (
      <Link
        to={`/detail/${slug}`}
        state={{ article }}
        className={cn(
          'group flex gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-base',
          className
        )}
      >
        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-200">
          <img
            src={article.image?.small || article.image?.large}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col flex-1 min-w-0 justify-center">
          <h3 className="text-sm font-semibold text-neutral-800 line-clamp-2 group-hover:text-primary-600 transition-colors mb-2">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-primary-500 font-semibold capitalize">{category}</span>
            <span className="text-neutral-300">•</span>
            <span className="text-neutral-500">{formatFullDate(article.isoDate)}</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default Vertical Variant
  return (
    <Link
      to={`/detail/${slug}`}
      state={{ article }}
      className={cn(
        'group flex flex-col',
        className
      )}
    >
      <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-neutral-200 mb-3 sm:mb-4">
        <img
          src={article.image?.large || article.image?.small}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="text-[15px] sm:text-base font-bold text-neutral-800 leading-snug line-clamp-3 group-hover:text-primary-600 transition-colors mb-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-2 text-xs sm:text-sm mt-auto">
          <span className="text-primary-500 font-semibold capitalize">{category}</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-500">{formatFullDate(article.isoDate)}</span>
        </div>
      </div>
    </Link>
  );
}
