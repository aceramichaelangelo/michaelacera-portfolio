import React from 'react';
import { SkillCategory as SkillCategoryType } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TechIcon } from '@/components/shared/TechIcon';

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => {
  return (
    <Card className="p-6 h-full flex flex-col justify-between group" interactive glow>
      <div>
        {/* Header containing icon and category title */}
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 rounded-xl bg-purple-950/30 text-purple-400 group-hover:bg-purple-950/50 group-hover:text-purple-300 transition-colors">
            <TechIcon name={category.title} size={20} />
          </div>
          <h3 className="text-lg font-bold text-white font-mono">{category.title}</h3>
        </div>

        {/* Technology tags with icons */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Badge key={skill} variant="cyan" className="font-mono text-[11px] py-1 px-2.5 flex items-center gap-1.5 hover:scale-[1.03] transition-transform duration-200">
              <TechIcon name={skill} size={12} className="text-cyan-400 shrink-0" />
              <span>{skill}</span>
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
