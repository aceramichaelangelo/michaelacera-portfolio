"use client";

import React from 'react';
import { heroData } from '@/data/hero';
import { useScrollTo } from '@/hooks/useScrollTo';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { HeroBackground } from './HeroBackground';
import { RoleRotator } from './RoleRotator';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';
import { heroItem } from '@/lib/animations';

export const Hero: React.FC = () => {
  const scrollTo = useScrollTo();
  const shouldReduce = useReducedMotion();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <HeroBackground />

      <Container className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Page-load entrance — trigger="mount" fires on first paint, not on scroll */}
        <MotionWrapper
          variant="heroContainer"
          trigger="mount"
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
        >
          <motion.div variants={heroItem} className="mb-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/45 border border-cyan-500/25">
              {heroData.role}
            </span>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3"
          >
            Hi, I am{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              {heroData.name}
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-base sm:text-lg text-slate-400 mb-4 font-mono"
          >
            I am a <RoleRotator roles={heroData.roles} />
          </motion.p>

          {/* Floating role badges — subtle bob per badge */}
          <motion.div
            variants={heroItem}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
          >
            {heroData.roles.map((role, i) => (
              <motion.div
                key={role}
                animate={
                  shouldReduce
                    ? undefined
                    : { y: [0, -4, 0] }
                }
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              >
                <Badge variant="purple" className="text-xs font-mono py-1 px-3">
                  {role}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={heroItem}
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed font-mono"
          >
            {heroData.headline}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row gap-4 items-center"
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
          delay={0.25}
          className={cn(
            "w-full max-w-[280px] sm:max-w-[340px] aspect-square relative flex items-center justify-center p-2 rounded-3xl border border-white/[0.06] bg-slate-950/20 backdrop-blur-md shadow-2xl shadow-purple-500/5 group",
            !shouldReduce && "animate-float"
          )}
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
