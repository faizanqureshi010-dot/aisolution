import { Variants } from 'framer-motion';

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE_PREMIUM } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_PREMIUM } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_PREMIUM } },
};

// Dialog
export const overlayFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.18 } },
};

export const dialogScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.22, ease: EASE_PREMIUM } },
};

// Accordion
export const accordionContent: Variants = {
  hidden: { height: 0, opacity: 0 },
  show: { height: 'auto', opacity: 1, transition: { duration: 0.25, ease: EASE_PREMIUM } },
};

// Toast
export const toastSlide: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25, ease: EASE_PREMIUM } },
  exit: { opacity: 0, x: 24, transition: { duration: 0.2 } },
};

// Standard viewport-triggered reveal, used with whileInView
export const viewportReveal = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, margin: '-80px' },
  variants: fadeUp,
};
