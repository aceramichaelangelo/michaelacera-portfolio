import React from 'react';

interface ProjectDetailBlockProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ProjectDetailBlock: React.FC<ProjectDetailBlockProps> = ({ title, icon, children }) => {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.03] transition-all duration-300">
      <div className="flex items-center gap-2 text-cyan-400 mb-3">
        {icon}
        <h4 className="font-mono text-xs uppercase tracking-wider font-bold">{title}</h4>
      </div>
      <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
};
