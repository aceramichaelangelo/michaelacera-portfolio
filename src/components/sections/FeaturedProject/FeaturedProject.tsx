"use client";

import React from 'react';
import { featuredProject } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { ProjectDetailBlock } from './ProjectDetailBlock';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { StaggerItem } from '@/components/shared/StaggerItem';
import { AlertCircle, CheckCircle, Sparkles, TrendingUp } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <Section id="projects" className="bg-[#030014]/40 border-y border-white/[0.04]">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Featured Project"
          subtitle="Computer vision and geoanalytics for native flora monitoring."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl w-full px-4">
          <MotionWrapper variant="fadeInLeft" className="lg:col-span-5 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <Card className="p-2 overflow-hidden flex flex-col items-center justify-center sm:col-span-2" glow>
                <div className="relative aspect-[1024/457] w-full overflow-hidden rounded-xl border border-white/[0.06]">
                  <ImageWithFallback
                    src="/projects/native-flora-dashboard.png"
                    alt="Web Dashboard Admin Panel"
                    type="project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-2">Web Dashboard Admin Panel</div>
              </Card>

              <Card className="p-2 overflow-hidden flex flex-col items-center justify-center sm:col-span-1" glow>
                <div className="relative aspect-[460/1024] w-full overflow-hidden rounded-xl border border-white/[0.06]">
                  <ImageWithFallback
                    src="/mobile/native-flora-mobile.png"
                    alt="Mobile Application Interface"
                    type="mobile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] font-mono text-slate-400 mt-2">Flutter Mobile App</div>
              </Card>

              <Card className="p-5 sm:col-span-1 flex flex-col justify-between bg-gradient-to-br from-slate-950/45 to-cyan-950/5" glow>
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">Core Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {featuredProject.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="cyan" className="font-mono text-[9px] py-0.5 px-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-4 leading-relaxed">
                  Dual-platform environmental monitoring system powered by YOLO deep learning models.
                </div>
              </Card>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="staggerContainer" className="lg:col-span-7 flex flex-col gap-4">
            <StaggerItem>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{featuredProject.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {featuredProject.description}
                </p>
              </Card>
            </StaggerItem>

            {(featuredProject.problem || featuredProject.solution) && (
              <StaggerItem>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredProject.problem && (
                    <ProjectDetailBlock title="The Problem" icon={<AlertCircle size={16} />}>
                      {featuredProject.problem}
                    </ProjectDetailBlock>
                  )}
                  {featuredProject.solution && (
                    <ProjectDetailBlock title="The Solution" icon={<CheckCircle size={16} />}>
                      {featuredProject.solution}
                    </ProjectDetailBlock>
                  )}
                </div>
              </StaggerItem>
            )}

            <StaggerItem>
              <Card className="p-5">
                <div className="flex items-center gap-2 text-cyan-400 mb-3">
                  <Sparkles size={16} />
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold">Highlights</h4>
                </div>
                <ul className="flex flex-col gap-2">
                  {featuredProject.features?.map((feat, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {featuredProject.impact?.map((imp, idx) => (
                    <li key={`impact-${idx}`} className="text-xs text-slate-400 flex items-start gap-2">
                      <TrendingUp size={12} className="text-purple-400 mt-0.5 shrink-0" />
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          </MotionWrapper>
        </div>
      </Container>
    </Section>
  );
};
