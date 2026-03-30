import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
  secondary: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 active:bg-primary-100',
  ghost: 'text-neutral-600 hover:bg-neutral-100 active:bg-neutral-200',
};

const sizes = {
  sm: 'px-3 py-1.5 text-small rounded-lg',
  md: 'px-4 py-2 text-caption rounded-xl',
  lg: 'px-6 py-3 text-body rounded-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-medium transition-base cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-primary-500/30',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
