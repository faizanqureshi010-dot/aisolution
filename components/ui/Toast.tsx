'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from 'lucide-react';
import { toastSlide } from '@/lib/motion';
import { cn } from '@/lib/cn';

type ToastType = 'success' | 'error' | 'info' | 'warning';
interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

const icons: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

const borderColor: Record<ToastType, string> = {
  success: 'border-l-positive',
  error: 'border-l-danger',
  info: 'border-l-info',
  warning: 'border-l-warning',
};

const ToastContext = createContext<{ push: (message: string, type?: ToastType) => void } | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((message: string, type: ToastType = 'info') => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3800);
  }, []);

  const dismiss = (id: number) => setToasts((t) => t.filter((x) => x.id !== id));

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed right-5 top-5 z-[300] flex flex-col gap-2.5" aria-live="polite">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = icons[t.type];
            return (
              <motion.div
                key={t.id}
                initial="hidden"
                animate="show"
                exit="exit"
                variants={toastSlide}
                role={t.type === 'error' ? 'alert' : 'status'}
                className={cn(
                  'flex max-w-xs items-center gap-2.5 rounded-lg border border-line border-l-2 bg-panel px-4 py-3 text-sm text-ink shadow-lg',
                  borderColor[t.type]
                )}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="flex-1">{t.message}</span>
                <button onClick={() => dismiss(t.id)} aria-label="Dismiss notification" data-cursor-hover>
                  <X className="h-3.5 w-3.5 text-slate hover:text-ink" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
