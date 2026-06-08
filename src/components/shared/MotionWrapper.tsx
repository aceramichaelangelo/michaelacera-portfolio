"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  fadeInUp,
  fadeIn,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
  heroContainer,
  VIEWPORT,
} from '@/lib/animations';

type MotionVariantType =
  | 'fadeInUp'
  | 'fadeIn'
  | 'fadeInDown'
  | 'fadeInLeft'
  | 'fadeInRight'
  | 'scaleIn'
  | 'staggerContainer'
  | 'heroContainer';

type TriggerType = 'inView' | 'mount';

interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: MotionVariantType;
  trigger?: TriggerType;
  delay?: number;
  className?: string;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  variant = 'fadeInUp',
  trigger = 'inView',
  delay = 0,
  className = '',
  ...props
}) => {
  const shouldReduce = useReducedMotion();

  const variantsMap = {
    fadeInUp,
    fadeIn,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    heroContainer,
  };

  const selectedVariant = variantsMap[variant];

  if (shouldReduce) {
    return <div className={className} {...(props as React.HTMLProps<HTMLDivElement>)}>{children}</div>;
  }

  const customVariant =
    delay > 0
      ? {
          ...selectedVariant,
          visible: {
            ...selectedVariant.visible,
            transition: {
              ...(selectedVariant.visible as { transition?: object })?.transition,
              delay,
            },
          },
        }
      : selectedVariant;

  const motionProps =
    trigger === 'mount'
      ? { initial: 'hidden' as const, animate: 'visible' as const }
      : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: VIEWPORT };

  return (
    <motion.div variants={customVariant} className={className} {...motionProps} {...props}>
      {children}
    </motion.div>
  );
};
