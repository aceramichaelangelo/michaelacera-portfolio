import React from 'react';
import { cn } from '@/lib/cn';

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  border?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  border = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-slate-950/35 backdrop-blur-md",
        {
          "border border-white/[0.06] rounded-2xl": border,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
