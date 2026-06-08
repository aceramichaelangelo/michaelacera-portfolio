"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const HeroBackground: React.FC = () => {
  const shouldReduce = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#030014]">
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

      {!shouldReduce ? (
        <>
          <motion.div
            animate={{ opacity: [0.12, 0.2, 0.12], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-purple-900/15 blur-[120px]"
          />
          <motion.div
            animate={{ opacity: [0.1, 0.18, 0.1], scale: [1, 1.08, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-blue-900/15 blur-[120px]"
          />
          <motion.div
            animate={{ opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-[30%] right-[20%] w-[35%] aspect-square rounded-full bg-cyan-950/15 blur-[100px]"
          />
        </>
      ) : (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] aspect-square rounded-full bg-purple-900/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-blue-900/15 blur-[120px]" />
          <div className="absolute top-[30%] right-[20%] w-[35%] aspect-square rounded-full bg-cyan-950/15 blur-[100px]" />
        </>
      )}

      {!shouldReduce && (
        <>
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-cyan-500/30 blur-[2px]"
          />
          <motion.div
            animate={{ y: [0, -30, 0], opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-[60%] right-[25%] w-4 h-4 rounded-full bg-purple-500/20 blur-[3px]"
          />
          <motion.div
            animate={{ y: [0, -15, 0], opacity: [0.08, 0.22, 0.08] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute bottom-[25%] left-[35%] w-2 h-2 rounded-full bg-blue-500/40 blur-[1px]"
          />
        </>
      )}
    </div>
  );
};
