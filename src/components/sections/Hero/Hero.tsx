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

export const Hero: React.FC = () => {
  const scrollTo = useScrollTo();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const itemFadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Graphic */}
      <HeroBackground />

      <Container className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Side: Brand Text */}
        <MotionWrapper 
          variant="staggerContainer" 
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl"
        >
          {/* Degree Student Tag */}
          <motion.div variants={itemFadeUp} className="mb-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/45 border border-cyan-500/25">
              {heroData.role}
            </span>
          </motion.div>

          {/* Full Name */}
          <motion.h1 
            variants={itemFadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3"
          >
            Hi, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">{heroData.name}</span>
          </motion.h1>

          {/* Animated Moving Text Roles */}
          <motion.div 
            variants={itemFadeUp} 
            className="h-12 flex items-center justify-center lg:justify-start mb-6 overflow-hidden"
          >
            <span className="text-sm sm:text-base font-mono text-slate-400 mr-2">I am a</span>
            <div className="relative h-8 w-64 sm:w-80">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute left-0 text-xs sm:text-sm font-bold font-mono text-cyan-400 bg-cyan-950/45 px-3.5 py-1.5 rounded-full border border-cyan-500/25 whitespace-nowrap"
                >
                  {heroData.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Short Headline */}
          <motion.p 
            variants={itemFadeUp}
            className="text-base sm:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed font-mono"
          >
            {heroData.headline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            variants={itemFadeUp}
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

        {/* Right Side: Profile Photo */}
        <MotionWrapper
          variant="scaleIn"
          delay={0.2}
          className="w-full max-w-[280px] sm:max-w-[340px] aspect-square relative flex items-center justify-center p-2 rounded-3xl border border-white/[0.06] bg-slate-950/20 backdrop-blur-md shadow-2xl shadow-purple-500/5 group"
        >
          {/* Background Ambient Glow */}
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
