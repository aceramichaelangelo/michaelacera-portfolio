"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { timelineData } from '@/data/timeline';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Calendar } from 'lucide-react';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { StaggerItem } from '@/components/shared/StaggerItem';
import { drawLine, VIEWPORT } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export const Timeline: React.FC = () => {
  const shouldReduce = useReducedMotion();

  return (
    <Section id="timeline">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Learning Journey"
          subtitle="My academic and self-directed path of technology exploration, from fundamentals to advanced AI systems."
        />

        <div className="relative max-w-3xl w-full px-4">
          {shouldReduce ? (
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent transform md:-translate-x-1/2 pointer-events-none" />
          ) : (
            <motion.div
              variants={drawLine}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent transform md:-translate-x-1/2 pointer-events-none"
            />
          )}

          <MotionWrapper variant="staggerContainer" className="flex flex-col gap-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <StaggerItem
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950 transform -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                  <div className="hidden md:block w-1/2" />

                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <Card className="p-6 relative bg-gradient-to-br from-slate-950/45 to-slate-900/10 h-full" interactive glow>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded-lg bg-cyan-950/30 text-cyan-400">
                          <Calendar size={14} />
                        </div>
                        <span className="font-mono text-sm font-bold text-cyan-400 tracking-wider">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                </StaggerItem>
              );
            })}
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
};
