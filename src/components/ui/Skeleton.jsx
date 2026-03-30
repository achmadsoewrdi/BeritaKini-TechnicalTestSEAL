import { cn } from '../../utils/cn';

export function SkeletonBlock({ className = '' }) {
  return (
    <div
      className={cn(
        'bg-neutral-200 rounded-xl animate-pulse',
        className
      )}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card">
      <SkeletonBlock className="w-full h-48 rounded-none" />
      <div className="p-4 space-y-3">
        <SkeletonBlock className="h-4 w-20 rounded-full" />
        <SkeletonBlock className="h-5 w-full" />
        <SkeletonBlock className="h-5 w-3/4" />
        <SkeletonBlock className="h-3 w-28 mt-2" />
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <div className="rounded-3xl overflow-hidden">
      <SkeletonBlock className="w-full h-[400px] sm:h-[500px] rounded-none" />
    </div>
  );
}
