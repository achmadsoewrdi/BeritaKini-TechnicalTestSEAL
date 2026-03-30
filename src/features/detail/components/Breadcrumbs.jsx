import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ category = 'Terbaru' }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6 lg:mb-8" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1.5 hover:text-primary-500 transition-colors">
        <Home size={16} />
        Beranda
      </Link>
      <ChevronRight size={14} className="text-neutral-400" />
      <span className="text-neutral-700 capitalize">
        {category}
      </span>
      <ChevronRight size={14} className="text-neutral-400" />
      <span className="text-neutral-500">Detail</span>
    </nav>
  );
}
