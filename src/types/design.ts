export interface DesignItem {
  id: string;
  title: string;
  category: 'wireframe' | 'mockup' | 'design-system' | 'prototype' | 'user-flow';
  description: string;
  image: string;
  figmaUrl?: string;
}
