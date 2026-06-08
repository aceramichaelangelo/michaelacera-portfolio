"use client";

import React from 'react';
import { mobileProjects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export const MobileProjects: React.FC = () => {
  return (
    <Section id="mobile-projects" className="bg-[#030014]/40 border-y border-white/[0.04]">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Mobile Development"
          subtitle="Cross-platform applications built with Flutter and Dart, styled with high-fidelity Figma components."
        />

        <MotionWrapper
          variant="staggerContainer"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl w-full px-4"
        >
          {mobileProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} className="h-full">
              <ProjectCard project={project} imageType="mobile" />
            </motion.div>
          ))}
        </MotionWrapper>
      </Container>
    </Section>
  );
};
