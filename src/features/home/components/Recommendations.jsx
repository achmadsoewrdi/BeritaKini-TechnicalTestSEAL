import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';
import { formatFullDate } from '../../../utils/formatDate';

function generateSlug(title) {
  return title?.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').slice(0, 80) || 'untitled';
}

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

export default function Recommendations({ articles = [], isLoading }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalResults = articles.length || 97; // fallback for visuals
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = articles.slice(startIdx, startIdx + itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, '...', totalPages - 1, totalPages);
    }
    return pages;
  };

  return (
    <section className="container-custom py-8 lg:py-12" id="recommendations">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-primary-500 rounded-full" />
          <h2 className="text-xl font-bold text-neutral-900">Rekomendasi Untuk Anda</h2>
        </div>
        
        {/* Search Input inline */}
        <div className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Cari disini..." 
            className="w-full h-10 border border-neutral-200 rounded-lg pl-4 pr-10 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-base"
          />
          <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        </div>
      </div>

      {/* News Grid (4 cols on large, 2 on medium, 1 on small) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-neutral-200 rounded-xl mb-3"></div>
                <div className="h-4 bg-neutral-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-neutral-200 rounded w-1/2 mb-3"></div>
                <div className="flex gap-2">
                  <div className="h-3 bg-neutral-200 rounded w-16"></div>
                  <div className="h-3 bg-neutral-200 rounded w-20"></div>
                </div>
              </div>
            ))
          : paginatedArticles.map((article, idx) => {
              const category = detectCategory(article.link);
              return (
                <Link
                  key={idx}
                  to={`/detail/${generateSlug(article.title)}`}
                  state={{ article }}
                  className="group flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 mb-3">
                    <img
                      src={article.image?.small || article.image?.large}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-neutral-800 leading-snug line-clamp-3 group-hover:text-primary-500 transition-colors mb-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs mt-auto">
                      <span className="text-primary-500 font-semibold">{category.name}</span>
                      <span className="text-neutral-300">•</span>
                      <span className="text-neutral-500">{formatFullDate(article.isoDate)}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>

      {/* Bottom Pagination Area */}
      {!isLoading && articles.length > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-transparent">
          <div className="text-sm text-neutral-500">
            Showing {startIdx + 1} to {Math.min(startIdx + itemsPerPage, totalResults)} of {totalResults} results
          </div>
          
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`text-sm flex items-center gap-1 px-2 ${currentPage === 1 ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-500 hover:text-primary-500'}`}
            >
              <ArrowLeft size={16} /> Previous
            </button>

            <div className="flex items-center gap-1 mx-2">
              {getPageNumbers().map((page, idx) =>
                page === '...' ? (
                  <span key={`dots-${idx}`} className="px-2 text-neutral-400">...</span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-base ${
                      page === currentPage
                        ? 'bg-primary-500 text-white'
                        : 'text-neutral-600 hover:bg-neutral-100 cursor-pointer'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`text-sm flex items-center gap-1 px-2 ${currentPage === totalPages ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-500 hover:text-primary-500'}`}
            >
              Next <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
