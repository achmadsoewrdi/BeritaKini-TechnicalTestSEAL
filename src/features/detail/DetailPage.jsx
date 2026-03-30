import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Breadcrumbs from './components/Breadcrumbs';
import ArticleContent from './components/ArticleContent';
import CommentSection from './components/CommentSection';
import RelatedNews from './components/RelatedNews';
import PopularNews from '../home/components/PopularNews';
import { fetchAllNews } from '../../services/newsService';

function detectCategory(link) {
  if (!link) return 'Terbaru';
  const map = {
    nasional: 'Nasional',
    internasional: 'Internasional',
    ekonomi: 'Ekonomi',
    olahraga: 'Olahraga',
    teknologi: 'Teknologi',
    hiburan: 'Hiburan',
    'gaya-hidup': 'Gaya Hidup',
  };
  for (const [key, value] of Object.entries(map)) {
    if (link.includes(`/${key}/`)) return value;
  }
  return 'Terbaru';
}

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  const { data: allNews, isLoading } = useQuery({
    queryKey: ['news', 'all'],
    queryFn: fetchAllNews,
    staleTime: 5 * 60 * 1000,
  });

  // If no article data (e.g., direct URL access), redirect to home
  if (!article) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="text-6xl mb-4">📰</div>
        <h2 className="text-headline text-neutral-900 mb-2">Artikel Tidak Ditemukan</h2>
        <p className="text-body text-neutral-500 mb-6">
          Berita yang kamu cari tidak tersedia. Silakan kembali ke beranda.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-base cursor-pointer"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const category = detectCategory(article.link);

  return (
    <div className="container-custom py-6 lg:py-10" id="detail-page">
      <Breadcrumbs category={category} />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <ArticleContent article={article} />
          <CommentSection />
          <RelatedNews currentTitle={article.title} />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[320px] flex-shrink-0">
          <PopularNews 
            articles={allNews?.slice(0, 3)} 
            isLoading={isLoading}
            isSidebar={true}
          />
        </div>
      </div>
    </div>
  );
}
