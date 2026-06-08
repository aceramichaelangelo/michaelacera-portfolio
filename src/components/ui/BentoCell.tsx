import React from 'react';
import { cn } from '@/lib/cn';
import { Card } from './Card';

interface BentoCellProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  rowSpan?: string;
  glow?: boolean;
}

export const BentoCell: React.FC<BentoCellProps> = ({
  children,
  className,
  colSpan = 'col-span-1',
  rowSpan = '',
  glow = false
}) => {
  return (
    <Card
      glow={glow}
      className={cn(colSpan, rowSpan, "p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]", className)}
    >
      {children}
    </Card>
  );
};
