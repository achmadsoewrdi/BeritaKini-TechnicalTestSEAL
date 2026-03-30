import { cn } from '../../utils/cn';

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
  icon: Icon,
  ...props
}) {
  return (
    <div className="relative">
      {Icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
          <Icon size={18} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full bg-neutral-100 text-neutral-900 rounded-xl border border-transparent',
          'placeholder:text-neutral-400 text-caption',
          'focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 focus:bg-white',
          'transition-base',
          Icon ? 'pl-10 pr-4 py-2.5' : 'px-4 py-2.5',
          className
        )}
        {...props}
      />
    </div>
  );
}
