import React from 'react';
import { cn } from '@/lib/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  glow = false,
  interactive = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-slate-950/45 backdrop-blur-xl border border-white/[0.06] overflow-hidden",
        {
          "hover:border-cyan-500/25 hover:shadow-[0_0_20px_rgba(6,182,212,0.08)] transition-all duration-300": interactive,
          "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)] before:pointer-events-none": glow,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
