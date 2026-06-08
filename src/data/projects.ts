import { Project } from '@/types';

export const featuredProject: Project = {
  id: "featured-native-flora",
  title: "Native Flora Detection and Management System",
  description: "Mobile and web system designed to identify, classify, and map native flora species using computer vision and geoanalytics.",
  longDescription: "Combines YOLO deep learning models with a Flutter mobile client mapping tool and an admin dashboard to track regional biodiversity.",
  technologies: ["Flutter", "Cloud Database", "Computer Vision", "YOLO Object Detection Models", "Geoanalytics", "AI-Assisted Development"],
  category: "featured",
  image: "/projects/native-flora-dashboard.png", 
  githubUrl: "https://github.com/aceramichaelangelo/native-flora-detection",
  demoUrl: "https://native-flora-demo.vercel.app",
  problem: "Identifying and mapping native flora species in the field is slow and requires specialized botanical knowledge.",
  solution: "A cross-platform Flutter mobile app and web dashboard that uses YOLO models to classify flora and map locations via geoanalytics.",
  features: [
    "Real-time species identification via camera",
    "YOLO classification models",
    "Interactive species mapping & geoanalytics",
    "Centralized cloud sync database"
  ],
  process: [
    "Design UI/UX in Figma",
    "Train YOLO detection models",
    "Develop Flutter client app",
    "Deploy cloud mapping dashboard"
  ],
  impact: [
    "Streamlines field identification for researchers",
    "Enables data-driven biodiversity monitoring",
    "Demonstrates Flutter & computer vision integration"
  ]
};

export const webProjects: Project[] = [
  {
    id: "web-django-zodiac",
    title: "Django Automation Center (Zodiac System)",
    description: "Full-stack Django automation tool with cipher utilities and QR scanners.",
    technologies: ["Django", "Python", "MySQL", "REST APIs", "Bootstrap"],
    category: "web",
    image: "/projects/django-project.png", 
    githubUrl: "https://github.com/aceramichaelangelo/django-apps"
  },
  {
    id: "web-mlbb-tracker",
    title: "MLBB Pilot Rank Tracker",
    description: "PHP rank tracking portal with game statistics and real-time monitoring dashboard.",
    technologies: ["PHP", "JavaScript", "MySQL", "REST APIs", "Bootstrap"],
    category: "web",
    image: "/projects/mlbb-tracker.png", 
    githubUrl: "https://github.com/aceramichaelangelo/mlbb-tracker"
  },
  {
    id: "web-nextjs-portfolio",
    title: "Next.js Professional Portfolio",
    description: "Personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    category: "web",
    image: "/projects/portfolio-v2.png", 
    githubUrl: "https://github.com/aceramichaelangelo/portfolio",
    demoUrl: "https://michaelacera.dev"
  }
];

export const mobileProjects: Project[] = [
  {
    id: "mobile-dnsc-violation",
    title: "DNSC School Violation Monitoring System",
    description: "Flutter mobile client built to log, track, and sync student violation records.",
    technologies: ["Flutter", "Dart", "Cloud Databases", "Figma"],
    category: "mobile",
    image: "/mobile/dnsc-violation.png", 
    githubUrl: "https://github.com/aceramichaelangelo/dnsc-violation"
  },
  {
    id: "mobile-shoewise",
    title: "ShoeWise: Foot-Scanning & Marketplace",
    description: "Flutter marketplace app featuring AI-based foot-scanning size recommendations.",
    technologies: ["Flutter", "Dart", "Cloud Databases", "Machine Learning", "Figma"],
    category: "mobile",
    image: "/mobile/shoewise.png", 
    githubUrl: "https://github.com/aceramichaelangelo/shoewise"
  }
];
