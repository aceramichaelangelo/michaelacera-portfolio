import React from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'cyan' | 'slate';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  className = ''
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-medium border transition-colors duration-300",
        {
          "bg-blue-950/40 text-blue-400 border-blue-500/20 hover:bg-blue-950/60": variant === 'blue',
          "bg-purple-950/40 text-purple-400 border-purple-500/20 hover:bg-purple-950/60": variant === 'purple',
          "bg-cyan-950/40 text-cyan-400 border-cyan-500/20 hover:bg-cyan-950/60": variant === 'cyan',
          "bg-slate-900/60 text-slate-300 border-slate-700/30 hover:bg-slate-900/80": variant === 'slate',
        },
        className
      )}
    >
      {children}
    </span>
  );
};
