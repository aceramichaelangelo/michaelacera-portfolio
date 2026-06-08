"use client";

import React from 'react';
import { mobileProjects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { StaggerItem } from '@/components/shared/StaggerItem';

export const MobileProjects: React.FC = () => {
  return (
    <Section id="mobile-projects" className="bg-[#030014]/40 border-y border-white/[0.04]">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Mobile Development"
          subtitle="Flutter apps with cloud integration and modern UI."
        />

        <MotionWrapper
          variant="staggerContainer"
          className="grid w-full max-w-4xl grid-cols-1 items-stretch gap-6 px-4 md:grid-cols-2"
        >
          {mobileProjects.map((project) => (
            <StaggerItem key={project.id} className="flex h-full">
              <ProjectCard project={project} imageType="mobile" />
            </StaggerItem>
          ))}
        </MotionWrapper>
      </Container>
    </Section>
  );
};
