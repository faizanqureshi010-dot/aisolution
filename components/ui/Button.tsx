import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const variants = {
  primary: 'bg-cta text-white hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:brightness-95 focus-visible:ring-cta',
  secondary: 'border border-line bg-panel text-ink hover:border-blue/50 active:bg-panel2 focus-visible:ring-blue',
  ghost: 'text-slate hover:text-ink active:text-ink/70 focus-visible:ring-blue',
  danger: 'bg-danger text-white hover:brightness-110 active:brightness-90 focus-visible:ring-danger',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-sm',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, href, target, rel, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-premium',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0',
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} target={target} rel={rel} data-cursor-hover data-cursor-premium={variant === 'primary' || undefined} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        data-cursor-hover
        data-cursor-premium={variant === 'primary' || undefined}
        disabled={disabled || loading}
        className={classes}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
