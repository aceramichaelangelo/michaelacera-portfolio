"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const fieldStyles =
  "w-full bg-slate-950/50 border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors";

type AnimatedInputProps = React.InputHTMLAttributes<HTMLInputElement>;
type AnimatedTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const AnimatedInput: React.FC<AnimatedInputProps> = ({ className, ...props }) => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <input className={cn(fieldStyles, className)} {...props} />;
  }

  return (
    <motion.input
      className={cn(fieldStyles, className)}
      whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
      {...(props as React.ComponentProps<typeof motion.input>)}
    />
  );
};

export const AnimatedTextarea: React.FC<AnimatedTextareaProps> = ({ className, ...props }) => {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <textarea className={cn(fieldStyles, "resize-none", className)} {...props} />;
  }

  return (
    <motion.textarea
      className={cn(fieldStyles, "resize-none", className)}
      whileFocus={{ scale: 1.01, transition: { duration: 0.2 } }}
      {...(props as React.ComponentProps<typeof motion.textarea>)}
    />
  );
};
