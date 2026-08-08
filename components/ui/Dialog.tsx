'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { overlayFade, dialogScale } from '@/lib/motion';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Dialog({ open, onClose, title, children }: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      setTimeout(() => panelRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus(), 10);
    } else {
      document.body.style.overflow = '';
      lastFocused.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={overlayFade}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-paper/70 pt-[12vh] backdrop-blur-sm"
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            ref={panelRef}
            variants={dialogScale}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            className="w-[min(480px,90vw)] rounded-2xl border border-line bg-panel shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 id="dialog-title" className="font-display font-bold">
                {title}
              </h2>
              <button
                onClick={onClose}
                data-autofocus
                aria-label="Close dialog"
                data-cursor-hover
                className="text-slate hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
