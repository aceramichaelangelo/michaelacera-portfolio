export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'featured' | 'web' | 'mobile' | 'ai';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
  problem?: string;
  solution?: string;
  process?: string[];
  impact?: string[];
}
