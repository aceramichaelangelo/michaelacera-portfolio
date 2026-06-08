"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInUp, VIEWPORT, EASE_OUT } from "@/lib/animations";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = "center",
  className = "",
}) => {
  const shouldReduce = useReducedMotion();

  const content = (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-2xl z-10",
        {
          "text-center mx-auto": alignment === "center",
          "text-left": alignment === "left",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-400 leading-relaxed font-mono">
          {subtitle}
        </p>
      )}
      {shouldReduce ? (
        <div
          className={cn("h-1 w-12 rounded bg-gradient-to-r from-accentPurple to-accentCyan mt-4", {
            "mx-auto": alignment === "center",
          })}
        />
      ) : (
        <motion.div
          className={cn("h-1 w-12 rounded bg-gradient-to-r from-accentPurple to-accentCyan mt-4", {
            "mx-auto": alignment === "center",
          })}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.15 }}
          style={{ originX: alignment === "center" ? 0.5 : 0 }}
        />
      )}
    </div>
  );

  if (shouldReduce) return content;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {content}
    </motion.div>
  );
};
