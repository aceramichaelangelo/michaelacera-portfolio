"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className = "" }) => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
};
