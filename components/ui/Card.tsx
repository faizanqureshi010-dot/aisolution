import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

/**
 * Card — accepts an optional `accentColor` (any real hex/rgb) to render a full
 * colored border + a soft matching glow shadow, instead of the flat neutral
 * border. Pass an agent's own color for agent-specific cards; omit it (or pass
 * one consistent brand color at the call site) for everything else.
 */
export function Card({
  className,
  glass,
  accentColor,
  style,
  ...props
}: HTMLAttributes<HTMLDivElement> & { glass?: boolean; accentColor?: string }) {
  const accentStyle = accentColor
    ? { borderColor: accentColor, boxShadow: `0 8px 28px -8px ${accentColor}40`, ...style }
    : style;

  return (
    <div
      data-cursor="card"
      className={cn(
        glass
          ? 'glass glass-hover rounded-token transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-premium'
          : 'rounded-token border-2 bg-panel transition-[color,background-color,border-color,box-shadow,transform] duration-200 ease-premium',
        !accentColor && !glass && 'border-line',
        className
      )}
      style={accentStyle}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border-b border-line px-6 py-4', className)} {...props} />;
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('border-t border-line px-6 py-4', className)} {...props} />;
}
