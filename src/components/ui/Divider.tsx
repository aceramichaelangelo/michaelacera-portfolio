import React from 'react';
import { cn } from '@/lib/cn';

interface DividerProps {
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className = '' }) => {
  return (
    <div className={cn("w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4", className)} />
  );
};
