"use client";

import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030014] text-slate-100 p-4 font-sans">
      <div className="flex flex-col items-center gap-4">
        {/* Loading Spinner */}
        <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
        <span className="font-mono text-xs text-slate-400 tracking-widest uppercase animate-pulse">
          Loading Portfolio...
        </span>
      </div>
    </div>
  );
}
