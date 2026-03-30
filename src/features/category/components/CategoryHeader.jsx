import { CATEGORIES } from '../../../utils/constants';

export default function CategoryHeader({ category }) {
  const categoryInfo = CATEGORIES.find((c) => c.slug === category);
  const label = categoryInfo?.label || category;

  return (
    <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-10 lg:py-14">
      <div className="container-custom">
        <nav className="text-small text-neutral-400 mb-3">
          <span>Beranda</span>
          <span className="mx-2">›</span>
          <span className="text-primary-400">{label}</span>
        </nav>
        <h1 className="text-display">{label}</h1>
        <p className="text-body text-neutral-400 mt-2">
          Berita {label.toLowerCase()} terbaru dan terlengkap dari Indonesia
        </p>
      </div>
    </div>
  );
}
