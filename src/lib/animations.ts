import { Variants } from 'framer-motion';

/** Shared easing — smooth SaaS-style deceleration */
export const EASE_OUT = [0.25, 0.1, 0.25, 1] as const;
export const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

/** Consistent viewport trigger for all scroll reveals */
export const VIEWPORT = {
  once: true,
  margin: '-80px' as const,
  amount: 0.2 as const,
};

export const transitionPresets = {
  default: { type: 'tween' as const, duration: 0.5, ease: EASE_OUT },
  fast: { type: 'tween' as const, duration: 0.25, ease: EASE_OUT },
  slow: { type: 'tween' as const, duration: 0.8, ease: EASE_OUT },
  spring: { type: 'spring' as const, stiffness: 300, damping: 24 },
  springSnappy: { type: 'spring' as const, stiffness: 400, damping: 30 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionPresets.default,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.default,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.default,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionPresets.default,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionPresets.default,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionPresets.spring,
  },
};

/** Page-load hero stagger — slightly faster stagger for premium feel */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.default,
  },
};

export const drawLine: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

export const scaleInMarker: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: transitionPresets.springSnappy,
  },
};

/** Reusable hover presets (use with whileHover / whileTap) */
export const hoverLift = {
  y: -6,
  transition: transitionPresets.fast,
};

export const hoverScale = {
  scale: 1.02,
  transition: transitionPresets.fast,
};

export const tapScale = {
  scale: 0.97,
  transition: transitionPresets.fast,
};
