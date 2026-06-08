import React from 'react';
import {
  Code,
  Database,
  Smartphone,
  Globe,
  Brain,
  Terminal,
  Cloud,
  Server,
  LineChart,
  Figma
} from 'lucide-react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 24,
  className = ''
}) => {
  const lowercase = name.toLowerCase();

  if (lowercase.includes('web') || lowercase.includes('html') || lowercase.includes('css') || lowercase.includes('react') || lowercase.includes('next')) {
    return <Globe size={size} className={className} />;
  }
  if (lowercase.includes('backend') || lowercase.includes('django') || lowercase.includes('php') || lowercase.includes('api')) {
    return <Server size={size} className={className} />;
  }
  if (lowercase.includes('mobile') || lowercase.includes('flutter') || lowercase.includes('dart') || lowercase.includes('app')) {
    return <Smartphone size={size} className={className} />;
  }
  if (lowercase.includes('database') || lowercase.includes('sql') || lowercase.includes('model') || lowercase.includes('data')) {
    return <Database size={size} className={className} />;
  }
  if (lowercase.includes('figma') || lowercase.includes('design') || lowercase.includes('wire') || lowercase.includes('ui') || lowercase.includes('ux')) {
    return <Figma size={size} className={className} />;
  }
  if (lowercase.includes('ai') || lowercase.includes('vision') || lowercase.includes('yolo') || lowercase.includes('learning')) {
    return <Brain size={size} className={className} />;
  }
  if (lowercase.includes('git') || lowercase.includes('code') || lowercase.includes('tools')) {
    return <Terminal size={size} className={className} />;
  }
  if (lowercase.includes('cloud')) {
    return <Cloud size={size} className={className} />;
  }
  if (lowercase.includes('geo') || lowercase.includes('mapping') || lowercase.includes('map')) {
    return <LineChart size={size} className={className} />;
  }

  return <Code size={size} className={className} />;
};
