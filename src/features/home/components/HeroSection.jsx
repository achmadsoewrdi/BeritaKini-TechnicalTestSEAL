import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { SkeletonHero } from '../../../components/ui/Skeleton';
import { formatFullDate } from '../../../utils/formatDate';

function generateSlug(title) {
  return title?.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').slice(0, 80) || 'untitled';
}

export default function HeroSection({ articles = [], isLoading }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <SkeletonHero />;
  if (!articles.length) return null;

  // Take first 5 articles for the hero carousel
  const heroArticles = articles.slice(0, 5);
  const totalSlides = heroArticles.length;
  const article = heroArticles[currentIndex];

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="container-custom py-8 lg:py-12" id="hero-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left - Text Content */}
        <div className="order-2 lg:order-1">
          <span className="text-neutral-400 text-caption font-semibold tracking-wide">
            Headline
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-neutral-900 leading-[1.3] tracking-[0px] mt-2 mb-4">
            {article.title}
          </h1>

          <p className="text-body text-neutral-500 leading-relaxed mb-5">
            {article.contentSnippet}
          </p>

          <div className="flex items-center gap-2 text-neutral-500 text-caption mb-5">
            <Calendar size={16} />
            <span>{formatFullDate(article.isoDate)}</span>
          </div>

          <Link
            to={`/detail/${generateSlug(article.title)}`}
            state={{ article }}
            className="inline-flex items-center gap-1.5 text-primary-500 font-semibold text-body hover:text-primary-600 transition-colors"
          >
            Baca Selengkapnya
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Right - Image */}
        <div className="order-1 lg:order-2">
          <Link
            to={`/detail/${generateSlug(article.title)}`}
            state={{ article }}
            className="block rounded-2xl overflow-hidden"
          >
            <img
              src={article.image?.large || article.image?.small}
              alt={article.title}
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrev}
          className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-base cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-caption text-neutral-400">
          {currentIndex + 1}
          {' '}dari{' '}
          {totalSlides}
        </span>
        <button
          onClick={goToNext}
          className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-base cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
