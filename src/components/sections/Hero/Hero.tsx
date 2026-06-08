"use client";

import React, { useState, useEffect } from 'react';
import { heroData } from '@/data/hero';
import { useScrollTo } from '@/hooks/useScrollTo';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { HeroBackground } from './HeroBackground';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const Hero: React.FC = () => {
  const scrollTo = useScrollTo();
  const shouldReduce = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (shouldReduce) return;
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [shouldReduce]);

  const itemFadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-8">
        <MotionWrapper
          variant="heroContainer"
          trigger="mount"
          className="flex w-full flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
        >
          {/* Degree badge — short label on mobile */}
          <motion.div variants={itemFadeUp} className="mb-4 w-full flex justify-center lg:justify-start">
            <span className="inline-block max-w-full rounded-xl sm:rounded-full border border-cyan-500/25 bg-cyan-950/45 px-3 py-2 text-[11px] font-mono font-bold uppercase leading-snug tracking-wide text-cyan-400 sm:px-3.5 sm:py-1.5 sm:text-xs sm:tracking-widest">
              <span className="sm:hidden">{heroData.roleMobile}</span>
              <span className="hidden sm:inline">{heroData.role}</span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemFadeUp}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 px-1"
          >
            Hi, I am{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              {heroData.name}
            </span>
          </motion.h1>

          {/* Rotating roles — stacks on mobile */}
          <motion.div
            variants={itemFadeUp}
            className="mb-6 flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start sm:gap-2"
          >
            <span className="text-sm font-mono text-slate-400 shrink-0">I am a</span>
            <div className="relative flex min-h-[2.25rem] w-full max-w-[min(100%,20rem)] items-center justify-center sm:max-w-xs lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="inline-block max-w-full rounded-xl border border-cyan-500/25 bg-cyan-950/45 px-3 py-1.5 text-center text-[11px] font-bold font-mono leading-snug text-cyan-400 sm:text-xs sm:whitespace-nowrap"
                >
                  {heroData.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            variants={itemFadeUp}
            className="text-sm sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed font-mono px-1"
          >
            {heroData.headline}
          </motion.p>

          <motion.div
            variants={itemFadeUp}
            className="flex w-full flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollTo(heroData.ctaProjects.href.substring(1))}
              className="group gap-2 w-full sm:w-auto"
            >
              <span>{heroData.ctaProjects.label}</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollTo(heroData.ctaContact.href.substring(1))}
              className="gap-2 w-full sm:w-auto border-cyan-500/20"
            >
              <MessageSquare size={16} className="text-cyan-400" />
              <span>{heroData.ctaContact.label}</span>
            </Button>
          </motion.div>
        </MotionWrapper>

        <MotionWrapper
          variant="scaleIn"
          trigger="mount"
          delay={0.2}
          className="w-full max-w-[240px] sm:max-w-[340px] aspect-square relative flex items-center justify-center p-2 rounded-3xl border border-white/[0.06] bg-slate-950/20 backdrop-blur-md shadow-2xl shadow-purple-500/5 group"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

          <ImageWithFallback
            src={heroData.profilePlaceholder}
            alt={heroData.name}
            type="profile"
            className="w-full h-full aspect-square object-cover rounded-2xl"
          />
        </MotionWrapper>
      </Container>
    </section>
  );
};
