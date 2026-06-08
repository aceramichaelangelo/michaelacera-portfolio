import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    id: "web-dev",
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
  },
  {
    id: "backend-dev",
    title: "Backend Development",
    skills: ["Python", "Django", "PHP", "Java", "REST APIs"]
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    skills: ["Flutter", "Dart"]
  },
  {
    id: "database-cloud",
    title: "Database & Cloud",
    skills: ["MySQL", "Cloud Databases", "Database Design", "Database Management", "Data Modeling"]
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    skills: ["Figma", "Wireframing", "Prototyping", "User Interface Design", "User Experience Design"]
  },
  {
    id: "ai-cv",
    title: "AI & Computer Vision",
    skills: ["AI-Assisted Development", "Prompt Engineering", "AI Workflow Integration", "YOLO Object Detection Models", "Computer Vision", "Machine Learning", "Geoanalytics"]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code"]
  }
];
