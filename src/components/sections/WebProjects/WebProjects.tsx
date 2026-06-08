"use client";

import React from 'react';
import { webProjects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export const WebProjects: React.FC = () => {
  return (
    <Section id="web-projects" className="bg-[#030014]/30">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Web Development"
          subtitle="Recent web projects built with React, Next.js, and Django, focusing on responsive design."
        />

        <MotionWrapper
          variant="staggerContainer"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4"
        >
          {webProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} className="h-full">
              <ProjectCard project={project} imageType="project" />
            </motion.div>
          ))}
        </MotionWrapper>
      </Container>
    </Section>
  );
};
