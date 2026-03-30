import { Link } from 'react-router-dom';
import { SkeletonCard } from '../../../components/ui/Skeleton';
import { formatFullDate } from '../../../utils/formatDate';
import { cn } from '../../../utils/cn';

function detectCategory(link) {
  if (!link) return { name: 'Terbaru', slug: 'terbaru' };
  const categories = [
    { key: 'nasional', name: 'Nasional' },
    { key: 'internasional', name: 'Internasional' },
    { key: 'ekonomi', name: 'Ekonomi' },
    { key: 'olahraga', name: 'Olahraga' },
    { key: 'teknologi', name: 'Teknologi' },
    { key: 'hiburan', name: 'Hiburan' },
    { key: 'gaya-hidup', name: 'Gaya Hidup' },
    { key: 'politik', name: 'Politik' },
  ];
  for (const cat of categories) {
    if (link.includes(`/${cat.key}/`)) return { name: cat.name, slug: cat.key };
  }
  return { name: 'Terbaru', slug: 'terbaru' };
}

function generateSlug(title) {
  return title?.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').slice(0, 80) || 'untitled';
}

export default function PopularNews({ articles = [], isLoading, isSidebar = false }) {
  const popularArticles = articles.slice(0, 3);

  return (
    <section className={cn("py-8", !isSidebar && "lg:py-12")} id="popular-news">
      <div className={cn(!isSidebar && "container-custom")}>
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 bg-primary-500 rounded-full" />
          <h2 className="text-xl font-bold text-neutral-900">Berita Terpopuler</h2>
        </div>

        {/* Cards Grid */}
        <div className={cn(
          "grid gap-6",
          isSidebar ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i}><SkeletonCard /></div>
              ))
            : popularArticles.map((article, idx) => {
                const category = detectCategory(article.link);
                return (
                  <Link
                    key={idx}
                    to={`/detail/${generateSlug(article.title)}`}
                    state={{ article }}
                    className="group flex gap-3 items-start"
                  >
                    {/* Thumbnail with number */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-200">
                      <img
                        src={article.image?.small || article.image?.large}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-1 left-1 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col justify-center h-24 min-w-0">
                      <h3 className="text-sm font-semibold text-neutral-800 leading-snug line-clamp-2 group-hover:text-primary-500 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs">
                        <span className="text-primary-500 font-semibold">{category.name}</span>
                        <span className="text-neutral-300">•</span>
                        <span className="text-neutral-400">{formatFullDate(article.isoDate)}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
        </div>
      </div>
    </section>
  );
}
