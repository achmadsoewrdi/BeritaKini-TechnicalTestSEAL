import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import NewsCard from '../../../components/NewsCard';
import { SkeletonCard } from '../../../components/ui/Skeleton';
import { fetchAllNews } from '../../../services/newsService';

export default function RelatedNews({ currentTitle = '' }) {
  const { data: allNews, isLoading } = useQuery({
    queryKey: ['news', 'all'],
    queryFn: fetchAllNews,
    staleTime: 5 * 60 * 1000,
  });

  // Get 3 random articles that aren't the current one
  const relatedArticles = (allNews || [])
    .filter((a) => a.title !== currentTitle)
    .slice(0, 3);

  return (
    <section className="mt-12 mb-10" id="related-news">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
          <h3 className="text-xl font-bold text-neutral-900">
            Berita Terkait
          </h3>
        </div>
        <Link 
          to="/kategori/terbaru" 
          className="bg-primary-50 text-primary-500 border border-primary-100 hover:bg-primary-100 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <SkeletonCard />
              </div>
            ))
          : relatedArticles.map((article, idx) => (
              <NewsCard
                key={idx}
                article={article}
                variant="vertical"
              />
            ))}
      </div>
    </section>
  );
}
