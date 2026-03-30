import HeroSection from './components/HeroSection';
import PopularNews from './components/PopularNews';
import Recommendations from './components/Recommendations';
import PromoBanner from './components/PromoBanner';
import { useHomeNews } from './hooks/useHomeNews';

export default function HomePage() {
  const { allNews, cnbcNews, isLoading, isError, error } = useHomeNews();

  if (isError) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-headline text-neutral-900 mb-2">Oops! Terjadi Kesalahan</h2>
          <p className="text-body text-neutral-500 mb-6">
            {error?.message || 'Gagal memuat berita. Silakan coba lagi.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-base cursor-pointer"
          >
            Muat Ulang
          </button>
        </div>
      </div>
    );
  }

  // Split news for different sections
  const heroArticles = allNews.slice(0, 4);
  const popularArticles = allNews.slice(4, 14);
  const recommendationArticles = [...allNews.slice(14), ...cnbcNews];

  return (
    <div id="home-page">
      <HeroSection articles={heroArticles} isLoading={isLoading} />
      <PopularNews articles={popularArticles} isLoading={isLoading} />
      <Recommendations articles={recommendationArticles} isLoading={isLoading} />
      <PromoBanner />
    </div>
  );
}
