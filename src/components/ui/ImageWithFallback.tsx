"use client";

import React, { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  type: 'profile' | 'project' | 'design' | 'mobile';
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  type
}) => {
  const [error, setError] = useState(false);

  const placeholderTexts = {
    profile: {
      label: "PROFILE IMAGE PLACEHOLDER",
      text: "Replace this placeholder with your profile image"
    },
    project: {
      label: "PROJECT IMAGE PLACEHOLDER",
      text: "Replace this placeholder with project screenshot"
    },
    design: {
      label: "DESIGN IMAGE PLACEHOLDER",
      text: "Replace this placeholder with Figma design screenshot"
    },
    mobile: {
      label: "MOBILE APP IMAGE PLACEHOLDER",
      text: "Replace this placeholder with Flutter app screenshot"
    }
  };

  const isPlaceholder = src.includes('placeholder.svg');
  const info = placeholderTexts[type];

  if (isPlaceholder || error) {
    return (
      <div className={`relative flex flex-col items-center justify-center border border-dashed border-cyan-500/30 bg-slate-950/40 rounded-xl p-6 overflow-hidden ${className}`}>
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Glowing center orb */}
        <div className="absolute w-24 h-24 rounded-full bg-purple-500/10 blur-xl pointer-events-none" />

        {/* Styled text description */}
        <div className="z-10 text-center flex flex-col items-center max-w-xs px-4">
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20 mb-3 uppercase">
            {info.label}
          </span>
          <h4 className="text-sm font-semibold text-slate-200 mb-1">{alt}</h4>
          <p className="text-xs text-slate-400 font-mono italic text-balance mt-2">
            &quot;{info.text}&quot;
          </p>
          <div className="text-[10px] text-slate-500 mt-4 font-mono select-all select-none">
            Path: public{src}
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`transition-all duration-300 ${className}`}
    />
  );
};
