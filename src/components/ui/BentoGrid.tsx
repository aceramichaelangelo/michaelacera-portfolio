import React from 'react';
import { cn } from '@/lib/cn';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full px-4", className)}>
      {children}
    </div>
  );
};
