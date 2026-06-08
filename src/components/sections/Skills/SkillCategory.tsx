"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory as SkillCategoryType } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TechIcon } from '@/components/shared/TechIcon';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { hoverLift } from '@/lib/animations';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  const shouldReduce = useReducedMotion();

  const content = (
    <Card className="p-6 h-full flex flex-col justify-between group" interactive glow>
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-purple-950/30 text-purple-400 group-hover:bg-purple-950/50 group-hover:text-purple-300 transition-colors duration-300">
            <TechIcon name={category.title} size={20} />
          </div>
          <h3 className="text-lg font-bold text-white font-mono">{category.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={shouldReduce ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Badge variant="cyan" className="font-mono text-[11px] py-1 px-2.5">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  );

  if (shouldReduce) return content;

  return (
    <motion.div
      className="h-full"
      whileHover={hoverLift}
      transition={{ duration: 0.25 }}
    >
      {content}
    </motion.div>
  );
};
