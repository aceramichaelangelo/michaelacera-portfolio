"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  el: Element = 'p'
}) => {
  const shouldReduce = useReducedMotion();
  const MotionElement = motion(Element);

  if (shouldReduce) {
    return <Element className={className}>{text}</Element>;
  }

  return (
    <MotionElement
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {text}
    </MotionElement>
  );
};
