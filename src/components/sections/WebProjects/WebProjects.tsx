"use client";

import React from 'react';
import { webProjects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { StaggerItem } from '@/components/shared/StaggerItem';

export const WebProjects: React.FC = () => {
  return (
    <Section id="web-projects" className="bg-[#030014]/30">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Web Development"
          subtitle="Web apps built with React, Next.js, Django, and PHP."
        />

        <MotionWrapper
          variant="staggerContainer"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4"
        >
          {webProjects.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard project={project} imageType="project" />
            </StaggerItem>
          ))}
        </MotionWrapper>
      </Container>
    </Section>
  );
};
