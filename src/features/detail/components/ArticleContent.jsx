import { useState, useEffect } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';
import { formatFullDate } from '../../../utils/formatDate';

function detectCategory(link) {
  if (!link) return 'terbaru';
  const categories = ['nasional', 'internasional', 'ekonomi', 'olahraga', 'teknologi', 'hiburan', 'gaya-hidup'];
  for (const cat of categories) {
    if (link.includes(`/${cat}/`)) return cat;
  }
  return 'terbaru';
}

export default function ArticleContent({ article }) {
  const [fullContent, setFullContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!article?.link) return;
    
    setIsLoading(true);
    setError(false);
    
    // Fetch the raw HTML of the news page via our local Vite proxy
    fetch(`/api/html?url=${encodeURIComponent(article.link)}`)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        let paragraphs = [];
        // CNN Indonesia pattern
        if (article.link.includes('cnnindonesia')) {
          const detailBox = doc.querySelector('.detail__body-text') || doc.querySelector('.detail-text');
          if (detailBox) {
            paragraphs = Array.from(detailBox.querySelectorAll('p'))
              .map(p => p.textContent.trim())
              .filter(text => text.length > 30 && !text.includes('Baca juga') && !text.includes('ADVERTISEMENT') && !text.includes('SCROLL TO CONTINUE'));
          }
        } 
        // CNBC Indonesia pattern
        else if (article.link.includes('cnbcindonesia')) {
          const detailBox = doc.querySelector('.detail_text');
          if (detailBox) {
            paragraphs = Array.from(detailBox.querySelectorAll('p'))
              .map(p => p.textContent.trim())
              .filter(text => text.length > 30 && !text.includes('Baca:'));
          }
        }

        // Fallback generic pattern
        if (paragraphs.length === 0) {
          paragraphs = Array.from(doc.querySelectorAll('article p, .post-content p, .article-content p, main p'))
            .map(p => p.textContent.trim())
            .filter(text => text.length > 50);
        }

        if (paragraphs.length > 0) {
          setFullContent(paragraphs);
        } else {
          setError(true);
        }
      })
      .catch(err => {
        console.error('Failed to fetch article content:', err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [article?.link]);

  if (!article) return null;

  const category = detectCategory(article.link);

  return (
    <article className="w-full" id="article-content">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-[40px] text-neutral-900 font-bold leading-tight mb-4">
        {article.title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center gap-2 text-sm sm:text-base mb-6">
        <span className="text-primary-500 font-semibold capitalize">{category}</span>
        <span className="text-neutral-300">•</span>
        <span className="text-neutral-500">{formatFullDate(article.isoDate)}</span>
      </div>

      {/* Hero Image */}
      <div className="rounded-xl overflow-hidden mb-3">
        <img
          src={article.image?.large || article.image?.small}
          alt={article.title}
          className="w-full aspect-[16/9] lg:aspect-[21/9] object-cover bg-neutral-100"
        />
      </div>

      {/* Image Caption / Snippet */}
      {article.contentSnippet && (
        <p className="text-sm text-neutral-500 italic mb-8">
          {article.contentSnippet}
        </p>
      )}

      {/* Content Snippet / Body */}
      <div className="prose prose-lg max-w-none mb-10 text-neutral-800">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 text-neutral-400">
            <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary-500" />
            <p>Memuat isi berita...</p>
          </div>
        ) : fullContent.length > 0 ? (
          <div className="space-y-6">
            {fullContent.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <p className="leading-relaxed">
              {article.contentSnippet}
            </p>
            {(error || fullContent.length === 0) && (
              <div className="bg-neutral-50 border border-neutral-100 p-6 rounded-xl my-6">
                <p className="text-sm text-neutral-600 mb-4">
                  Sistem API untuk saat ini hanya menyediakan versi ringkasan. Untuk membaca berita utuhnya, silakan kunjungi sumber aslinya.
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                >
                  Baca Artikel Asli
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
