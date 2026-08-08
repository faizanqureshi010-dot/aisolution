'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/motion';
import { cn } from '@/lib/cn';

export function RevealContainer({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section';
}) {
  const MotionTag = Tag === 'section' ? motion.section : motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger wrapper for grids of cards — children should be <StaggerItem> */
export function StaggerGroup({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={staggerContainer} className={cn(className)}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={cn(className)}>
      {children}
    </motion.div>
  );
}
