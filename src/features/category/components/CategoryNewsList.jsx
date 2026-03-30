import { useState } from 'react';
import NewsCard from '../../../components/NewsCard';
import Pagination from '../../../components/ui/Pagination';
import { SkeletonCard } from '../../../components/ui/Skeleton';
import { ITEMS_PER_PAGE } from '../../../utils/constants';

export default function CategoryNewsList({ articles = [], isLoading }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = articles.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  if (!isLoading && articles.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">📰</div>
        <h3 className="text-title text-neutral-700 mb-2">Belum Ada Berita</h3>
        <p className="text-body text-neutral-500">Berita untuk kategori ini sedang kosong.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading
          ? Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)
          : paginatedArticles.map((article, idx) => (
              <NewsCard key={idx} article={article} className="animate-fade-in" />
            ))}
      </div>

      {!isLoading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}
