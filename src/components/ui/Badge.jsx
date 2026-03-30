import { cn } from '../../utils/cn';
import { CATEGORY_COLORS } from '../../utils/constants';

export default function Badge({ category, className = '' }) {
  const colorClass = CATEGORY_COLORS[category] || 'bg-neutral-500 text-white';

  return (
    <span
      className={cn(
        'inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wide',
        colorClass,
        className
      )}
    >
      {category?.replace('-', ' ') || 'Umum'}
    </span>
  );
}
