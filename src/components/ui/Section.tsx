import React from 'react';
import { cn } from '@/lib/cn';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 relative overflow-hidden flex flex-col items-center justify-center w-full scroll-mt-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
