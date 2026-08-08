'use client';

import { useState, useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { accordionContent } from '@/lib/motion';
import { cn } from '@/lib/cn';

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={cn('border-b border-line', className)}>
      <button
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        data-cursor-hover
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-display font-semibold">{title}</span>
        <ChevronDown className={cn('h-4 w-4 flex-shrink-0 text-slate transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={accordionContent}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm text-slate">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
