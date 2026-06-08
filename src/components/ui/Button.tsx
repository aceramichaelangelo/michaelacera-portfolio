"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { tapScale, hoverScale } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-cyan';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const shouldReduce = useReducedMotion();

  const styles = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 disabled:opacity-50 disabled:pointer-events-none",
    {
      'bg-gradient-to-r from-accentPurple to-accentCyan text-white shadow-lg shadow-purple-500/25 hover:shadow-cyan-500/40 hover:brightness-110': variant === 'primary',
      'bg-slate-900/40 backdrop-blur-md text-slate-200 border border-slate-700/50 hover:bg-slate-800/60 hover:text-white': variant === 'secondary',
      'text-slate-400 hover:bg-white/5 hover:text-white': variant === 'ghost',
      'border border-cyan-500/40 text-cyan-400 bg-cyan-950/10 hover:bg-cyan-950/30 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]': variant === 'outline-cyan',
    },
    {
      'px-3 py-1.5 text-xs': size === 'sm',
      'px-5 py-2.5 text-sm': size === 'md',
      'px-7 py-3 text-base': size === 'lg',
    },
    className
  );

  if (shouldReduce) {
    return (
      <button className={styles} {...props}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={styles}
      whileHover={hoverScale}
      whileTap={tapScale}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
};
