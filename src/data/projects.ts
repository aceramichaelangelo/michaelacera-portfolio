import { Project } from '@/types';

// NOTE: All project images point to public/ directories.
// You can replace these screenshots inside the public/ directories with your files.

export const featuredProject: Project = {
  id: "featured-native-flora",
  title: "Native Flora Detection and Management System",
  description: "Cross-platform environmental monitoring app that identifies native flora using YOLO computer vision and maps species with geoanalytics.",
  longDescription: "",
  technologies: ["Flutter", "Cloud Database", "Computer Vision", "YOLO", "Geoanalytics", "AI-Assisted Development"],
  category: "featured",
  image: "/projects/native-flora-dashboard.png", 
  githubUrl: "https://github.com/michaelacera/native-flora-detection",
  demoUrl: "https://native-flora-demo.vercel.app",
  problem: "Field identification of native flora is slow and requires expert knowledge.",
  solution: "Flutter mobile + web dashboard with YOLO detection and cloud-synced species mapping.",
  features: [
    "Real-time flora identification via camera",
    "YOLO object detection and classification",
    "Interactive geoanalytics species mapping"
  ],
  process: [],
  impact: [
    "Faster biodiversity monitoring for field workers",
    "Combines mobile, AI, and geoanalytics in one system"
  ]
};

export const webProjects: Project[] = [
  {
    id: "web-django-zodiac",
    title: "Django Automation Center (Zodiac System)",
    description: "Full-stack automation hub with scheduling, QR tools, and cipher utilities.",
    technologies: ["Django", "Python", "MySQL", "REST APIs", "Bootstrap"],
    category: "web",
    image: "/projects/django-project.png", 
    githubUrl: "https://github.com/michaelacera/django-apps"
  },
  {
    id: "web-mlbb-tracker",
    title: "MLBB Pilot Rank Tracker",
    description: "PHP rank tracker with account management and live game statistics.",
    technologies: ["PHP", "JavaScript", "MySQL", "REST APIs", "Bootstrap"],
    category: "web",
    image: "/projects/mlbb-tracker.png", 
    githubUrl: "https://github.com/michaelacera/mlbb-tracker"
  },
  {
    id: "web-nextjs-portfolio",
    title: "Next.js Professional Portfolio",
    description: "Dark glassmorphic portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "web",
    image: "/projects/portfolio-v2.png", 
    githubUrl: "https://github.com/michaelacera/portfolio",
    demoUrl: "https://michaelacera.dev"
  }
];

export const mobileProjects: Project[] = [
  {
    id: "mobile-dnsc-violation",
    title: "DNSC School Violation Monitoring System",
    description: "Flutter app for logging and tracking student violations with cloud sync.",
    technologies: ["Flutter", "Dart", "Cloud Databases", "Figma"],
    category: "mobile",
    image: "/mobile/dnsc-violation.png", 
    githubUrl: "https://github.com/michaelacera/dnsc-violation"
  },
  {
    id: "mobile-shoewise",
    title: "ShoeWise: Foot-Scanning & Marketplace",
    description: "AI foot-scanning app with shoe-fit recommendations and a built-in marketplace.",
    technologies: ["Flutter", "Dart", "Cloud Databases", "Machine Learning", "Figma"],
    category: "mobile",
    image: "/mobile/shoewise.png", 
    githubUrl: "https://github.com/michaelacera/shoewise"
  }
];
