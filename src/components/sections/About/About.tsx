"use client";

import React from 'react';
import { aboutData } from '@/data/about';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BentoCell } from '@/components/ui/BentoCell';
import { Container } from '@/components/ui/Container';
import { TechIcon } from '@/components/shared/TechIcon';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { StaggerItem } from '@/components/shared/StaggerItem';
import { Target, Compass, Sparkles, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-[#030014]/40">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="About Me"
          subtitle="A summary of my passion, interest areas, and long-term career goals."
        />

        <MotionWrapper variant="staggerContainer" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full px-4">
            <StaggerItem className="col-span-1 md:col-span-2">
              <BentoCell glow className="group h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Sparkles size={20} />
                    <h3 className="font-mono text-sm uppercase tracking-wider font-bold">Who I Am</h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {aboutData.introduction}
                  </p>
                </div>
              </BentoCell>
            </StaggerItem>

            <StaggerItem>
              <BentoCell className="bg-gradient-to-br from-slate-950/45 to-purple-950/15 h-full">
                <div className="flex flex-col gap-4 justify-between h-full">
                  <div className="flex items-center gap-2 text-purple-400">
                    <BookOpen size={20} />
                    <h3 className="font-mono text-sm uppercase tracking-wider font-bold">Current Focus</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {aboutData.currentFocus}
                  </p>
                  <div className="text-xs text-purple-400 font-mono italic">
                    Active Learning & Research
                  </div>
                </div>
              </BentoCell>
            </StaggerItem>

            <StaggerItem>
              <BentoCell className="bg-gradient-to-br from-slate-950/45 to-blue-950/15 h-full">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Target size={20} />
                    <h3 className="font-mono text-sm uppercase tracking-wider font-bold">Career Goals</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {aboutData.careerGoals.map((goal, idx) => (
                      <li key={idx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BentoCell>
            </StaggerItem>

            <StaggerItem className="col-span-1 md:col-span-2">
              <BentoCell glow className="h-full">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Compass size={20} />
                    <h3 className="font-mono text-sm uppercase tracking-wider font-bold">Areas of Interest</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {aboutData.interests.map((interest) => (
                      <div
                        key={interest}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-cyan-950/30 text-cyan-400 group-hover:bg-cyan-950/50 group-hover:text-cyan-300 transition-colors">
                          <TechIcon name={interest} size={18} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                          {interest}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCell>
            </StaggerItem>
        </MotionWrapper>
      </Container>
    </Section>
  );
};
