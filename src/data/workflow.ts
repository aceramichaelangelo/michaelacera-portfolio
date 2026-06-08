export interface WorkflowStep {
  step: number;
  label: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    label: "Research",
    description: "Understand the problem, users, and existing solutions."
  },
  {
    step: 2,
    label: "Planning",
    description: "Define requirements, architecture, and project scope."
  },
  {
    step: 3,
    label: "Figma Design",
    description: "Create wireframes, mockups, and interactive prototypes."
  },
  {
    step: 4,
    label: "Development",
    description: "Build the application using appropriate technologies."
  },
  {
    step: 5,
    label: "Testing",
    description: "Validate functionality, usability, and performance."
  },
  {
    step: 6,
    label: "Deployment",
    description: "Ship to production with cloud hosting and monitoring."
  }
];
