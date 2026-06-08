import React from 'react';
import { cn } from '@/lib/cn';
import { ExternalLink } from '../shared/ExternalLink';

interface IconLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const IconLink: React.FC<IconLinkProps> = ({
  href,
  icon,
  label,
  className = ''
}) => {
  return (
    <ExternalLink
      href={href}
      className={cn(
        "flex items-center justify-center p-3 rounded-xl border border-white/[0.06] bg-slate-950/45 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/25 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300",
        className
      )}
      aria-label={label}
    >
      {icon}
    </ExternalLink>
  );
};
