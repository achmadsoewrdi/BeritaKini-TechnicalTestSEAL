import { useParams } from 'react-router-dom';
import CategoryHeader from './components/CategoryHeader';
import CategoryNewsList from './components/CategoryNewsList';
import { useCategoryNews } from './hooks/useCategoryNews';

export default function CategoryPage() {
  const { category } = useParams();
  const { data: articles, isLoading, isError, error } = useCategoryNews(category);

  if (isError) {
    return (
      <div>
        <CategoryHeader category={category} />
        <div className="container-custom py-16 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-headline text-neutral-900 mb-2">Gagal Memuat Berita</h2>
          <p className="text-body text-neutral-500">
            {error?.message || 'Terjadi kesalahan. Silakan coba lagi.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="category-page">
      <CategoryHeader category={category} />
      <div className="container-custom py-8 lg:py-12">
        <CategoryNewsList articles={articles || []} isLoading={isLoading} />
      </div>
    </div>
  );
}
