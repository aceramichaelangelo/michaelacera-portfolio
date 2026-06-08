"use client";

import React from 'react';
import { skillCategories } from '@/data/skills';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Container } from '@/components/ui/Container';
import { SkillCategory } from './SkillCategory';
import { MotionWrapper } from '@/components/shared/MotionWrapper';
import { StaggerItem } from '@/components/shared/StaggerItem';

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <Container className="flex flex-col items-center">
        <SectionHeading
          title="Technical Skills"
          subtitle="My programming expertise, database management, and UI/UX design capabilities."
        />

        <MotionWrapper
          variant="staggerContainer"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-4"
        >
          {skillCategories.map((category) => (
            <StaggerItem key={category.id} className="h-full">
              <SkillCategory category={category} />
            </StaggerItem>
          ))}
        </MotionWrapper>
      </Container>
    </Section>
  );
};
