import { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '@/lib/cn';

const fieldBase =
  'w-full rounded-lg border bg-panel2 px-3.5 py-2.5 text-sm text-ink placeholder:text-slate outline-none transition-colors duration-150 focus:border-blue disabled:cursor-not-allowed disabled:opacity-50';

interface FieldWrapperProps {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: (id: string) => React.ReactNode;
}

function FieldWrapper({ label, error, hint, required, children }: FieldWrapperProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-body-sm font-medium text-ink">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      {children(id)}
      {hint && !error && <span className="text-caption text-slate">{hint}</span>}
      {error && (
        <span className="text-caption text-danger" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, required, className, ...props }, ref) => (
    <FieldWrapper label={label} error={error} hint={hint} required={required}>
      {(id) => (
        <input
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(fieldBase, error && 'border-danger', !error && 'border-line', className)}
          {...props}
        />
      )}
    </FieldWrapper>
  )
);
Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, required, className, ...props }, ref) => (
    <FieldWrapper label={label} error={error} hint={hint} required={required}>
      {(id) => (
        <textarea
          ref={ref}
          id={id}
          aria-invalid={!!error}
          className={cn(fieldBase, 'min-h-[110px] resize-y', error && 'border-danger', !error && 'border-line', className)}
          {...props}
        />
      )}
    </FieldWrapper>
  )
);
Textarea.displayName = 'Textarea';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, required, className, children, ...props }, ref) => (
    <FieldWrapper label={label} error={error} hint={hint} required={required}>
      {(id) => (
        <select
          ref={ref}
          id={id}
          aria-invalid={!!error}
          className={cn(fieldBase, error && 'border-danger', !error && 'border-line', className)}
          {...props}
        >
          {children}
        </select>
      )}
    </FieldWrapper>
  )
);
Select.displayName = 'Select';

export function Checkbox({
  label,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex items-center gap-2.5 text-sm text-ink" data-cursor-hover>
      <input
        id={id}
        type="checkbox"
        className={cn(
          'h-4 w-4 rounded border-line bg-panel2 text-purple focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-paper',
          className
        )}
        {...props}
      />
      {label}
    </label>
  );
}

export function Radio({ label, className, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex items-center gap-2.5 text-sm text-ink" data-cursor-hover>
      <input
        id={id}
        type="radio"
        className={cn(
          'h-4 w-4 border-line bg-panel2 text-purple focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-paper',
          className
        )}
        {...props}
      />
      {label}
    </label>
  );
}
