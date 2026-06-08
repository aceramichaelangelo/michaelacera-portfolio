"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { EASE_OUT } from "@/lib/animations";

interface RoleRotatorProps {
  roles: string[];
  intervalMs?: number;
}

export const RoleRotator: React.FC<RoleRotatorProps> = ({
  roles,
  intervalMs = 2800,
}) => {
  const [index, setIndex] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce || roles.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [roles.length, intervalMs, shouldReduce]);

  if (shouldReduce) {
    return (
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
        {roles[0]}
      </span>
    );
  }

  return (
    <span
      className="relative inline-flex h-[1.15em] min-w-[10ch] overflow-hidden align-bottom"
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="absolute left-0 whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
