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
  Figma as FigmaIconLucide,
  Coffee,
  FileCode,
  Paintbrush,
  Github as GithubIconLucide,
  Laptop,
  Cpu,
  Layers,
  Eye,
  Sliders
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
  const lowercase = name.toLowerCase().trim();

  // Precise brand SVG mappings for premium visual style
  if (lowercase === 'javascript' || lowercase === 'js') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M12.1 18.5c0 .7-.3 1.2-1.0 1.2-.7 0-1.0-.4-1.0-1.1h1.0c0 .3.1.4.3.4.1 0 .2-.1.2-.3v-3.7h1.0V18.5zm4.8-.2c0 .6-.3 1.0-1.0 1.0-.6 0-1.0-.3-1.0-.9h1.0c0 .2.1.3.3.3.1 0 .2-.1.2-.2 0-.2-.1-.2-.5-.4-.5-.2-.9-.4-.9-1.0 0-.5.4-1.0 1.0-1.0.6 0 1.0.3 1.0.8h-1.0c0-.1-.1-.2-.2-.2-.1 0-.2.1-.2.2 0 .1.1.2.4.3.6.2 1.0.4 1.0 1.1z" fill="#000000" />
      </svg>
    );
  }

  if (lowercase === 'java') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 22h12" stroke="#ED8B00" />
        <path d="M4 16.5c0 2.2 3.6 4 8 4s8-1.8 8-4" stroke="#5382A1" />
        <path d="M5 12.5c0 2.2 3.1 4 7 4s7-1.8 7-4" stroke="#5382A1" />
        <path d="M11 2.5c.5.8.3 2.5-1.5 3.5 0 0 2.2.8 1.5 3.5" stroke="#ED8B00" />
        <path d="M14 1.5c.5 1 0 3-1.5 4 0 0 2.5 1 1.5 4" stroke="#ED8B00" />
      </svg>
    );
  }

  if (lowercase === 'python') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-3.05 0-2.86 1.32-2.86 1.32l.02 1.36h2.89v.37H7.83C5.97 5.05 5 5.92 5 7.78v2.75c0 1.87 1.63 1.8 1.63 1.8h.98V10.9c0-1.82 1.48-3.3 3.3-3.3h3.46c1.78 0 1.74-1.56 1.74-1.56V3.72C16.1 3.28 15.11 2 12 2zm1.17.88c.39 0 .7.31.7.7 0 .39-.31.7-.7.7a.71.71 0 01-.7-.7c0-.39.31-.7.7-.7z" fill="#3776AB" />
        <path d="M12 22c3.05 0 2.86-1.32 2.86-1.32l-.02-1.36h-2.89v-.37h4.22c1.86 0 2.83-.87 2.83-2.73v-2.75c0-1.87-1.63-1.8-1.63-1.8h-.98v1.43c0 1.82-1.48 3.3-3.3 3.3H9.63c-1.78 0-1.74 1.56-1.74 1.56v2.32c0 .44.99 1.72 4.11 1.72zm-1.17-.88c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7.39 0 .7.31.7.7 0 .39-.31.7-.7.7z" fill="#FFE052" />
      </svg>
    );
  }

  if (lowercase === 'php') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="11" ry="7.5" fill="#777BB4" />
        <path d="M5.5 15V9h1.7c.9 0 1.4.2 1.7.6.3.3.4.8.4 1.4 0 .7-.2 1.2-.5 1.5-.3.3-.9.5-1.7.5H6.5v2h-1zm1-3.2h.7c.4 0 .6-.1.8-.2.1-.2.2-.4.2-.7 0-.3-.1-.5-.2-.6-.2-.1-.4-.2-.8-.2h-.7v1.7zm5.5 3.2V9h1v2.3h1.8V9h1v6h-1v-2.7h-1.8V15h-1zm5.5 0V9h1.7c.9 0 1.4.2 1.7.6.3.3.4.8.4 1.4 0 .7-.2 1.2-.5 1.5-.3.3-.9.5-1.7.5H19v2h-1zm1-3.2h.7c.4 0 .6-.1.8-.2.1-.2.2-.4.2-.7 0-.3-.1-.5-.2-.6-.2-.1-.4-.2-.8-.2H19v1.7z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (lowercase === 'django') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <path d="M6.5 17.5v-11h3.3c1.8 0 2.9.9 2.9 2.7v5.6c0 1.8-1.1 2.7-2.9 2.7H6.5zm2.8-1.5c.8 0 1.3-.4 1.3-1.2v-5.6c0-.8-.5-1.2-1.3-1.2H8v8h1.3zm6.2-2.5v-1.2h2.5v1.2h-2.5z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (lowercase === 'react') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  if (lowercase === 'next.js' || lowercase === 'next') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#000" stroke="#333" strokeWidth="1.5" />
        <path d="M15.5 7.5L9.2 15.3H8.3V7.5H7.1v9H8.3l7.6-9.5V16.5h1.2V7.5h-1.6z" fill="#FFF" />
      </svg>
    );
  }

  if (lowercase === 'tailwind css' || lowercase === 'tailwind') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.2 2.7 2.7 5.8 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.2-2.7-2.7-5.8-2.7zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.4 1.7 1.2 1.2 2.7 2.7 5.8 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.4-1.7-1.2-1.2-2.7-2.7-5.8-2.7z" fill="#38BDF8" />
      </svg>
    );
  }

  if (lowercase === 'bootstrap') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#7952B3" />
        <path d="M7.1 6h4.3c1.1 0 1.9.3 2.4.7.4.4.6.9.6 1.6 0 .9-.5 1.5-1.2 1.8.9.2 1.4.8 1.4 1.8 0 .8-.3 1.4-.8 1.8-.5.5-1.4.8-2.5.8H7.1V6zm2.2 3.9h1.7c.7 0 1.1-.3 1.1-.8s-.4-.8-1.1-.8H9.3v1.6zm0 4.1h2c.8 0 1.2-.3 1.2-.8 0-.5-.4-.8-1.2-.8h-2v1.6z" fill="#FFFFFF" />
      </svg>
    );
  }

  if (lowercase === 'flutter') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3 2.5L5.7 11.1l3.5 3.5L17.8 6h-3.5zm-3.5 10.6l3.5-3.5h3.5L10.7 16.7 17.8 21.5h-3.5L10.8 13.1z" fill="#02569B" />
        <path d="M14.3 9.6l-3.5 3.5 3.5 3.6 3.5-3.6-3.5-3.5z" fill="#0175C2" />
      </svg>
    );
  }

  if (lowercase === 'dart') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l-7 7.5L8.5 18 19 13.5l0-7L12 2zm3.8 10L12 14.5l-3.2-3.2 4-4 3 4.7z" fill="#00B4AB" />
      </svg>
    );
  }

  if (lowercase === 'figma') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2c-2.2 0-4 1.8-4 4s1.8 4 4 4h4V2H8z" fill="#F24E1E" />
        <path d="M12 2h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V2z" fill="#FF7262" />
        <path d="M8 10c-2.2 0-4 1.8-4 4s1.8 4 4 4h4v-8H8z" fill="#A259FF" />
        <path d="M12 10h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4v-8z" fill="#1ABC9C" />
        <path d="M8 18c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4v-4H8z" fill="#19B5FE" />
      </svg>
    );
  }

  if (lowercase === 'git') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.3 11.7L12.3.7c-.4-.4-1-.4-1.4 0l-11 11c-.4.4-.4 1 0 1.4l11 11c.4.4 1 .4 1.4 0l11-11c.4-.4.4-1 0-1.4zm-12.7 7.5c-.6 0-1-.4-1-1 0-.3.1-.6.3-.8L7.4 14.9c-.2.2-.5.3-.8.3-.6 0-1-.4-1-1s.4-1 1-1c.3 0 .6.1.8.3l2.5-2.5c-.1-.2-.2-.5-.2-.8 0-.6.4-1 1-1s1 .4 1 1c0 .3-.1.6-.3.8l2.5 2.5c.2-.2.5-.3.8-.3.6 0 1 .4 1 1s-.4 1-1 1c-.3 0-.6-.1-.8-.3l-2.5 2.5c.2.2.3.5.3.8 0 .6-.4 1-1 1z" fill="#F05032" />
      </svg>
    );
  }

  if (lowercase === 'github') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    );
  }

  if (lowercase === 'vs code' || lowercase === 'vscode') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.9 6.5l-3.2-3.1c-.2-.2-.6-.2-.8 0L9.8 12 19.9 20.6c.2.2.6.2.8 0l3.2-3.1c.2-.2.2-.6 0-.8L16.2 12l7.7-4.7c.2-.2.2-.6 0-.8zM1 16.2l6.2 4.4c.2.1.5 0 .6-.2L12.5 12l-4.7-8.4c-.1-.2-.4-.3-.6-.2L1 7.8c-.2.1-.3.4-.2.6l3.5 3.6-3.5 3.6c-.1.2-.1.5.2.6zm9.2-4.2L6 8.5v7l4.2-3.5z" fill="#007ACC" />
      </svg>
    );
  }

  if (lowercase === 'mysql') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z" fill="#00758F" />
      </svg>
    );
  }

  if (lowercase === 'html5' || lowercase === 'html') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#E34F26" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2zm13.3 5H7.7l.2 2.5h8.2l-.3 3h-5.2l-.2-2H8l.4 4.5 3.6 1 3.6-1 .5-5.5.2-2.5z" fill="currentColor" />
      </svg>
    );
  }

  if (lowercase === 'css3' || lowercase === 'css') {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="#1572B6" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 2h18l-1.6 18L12 22l-7.4-2L3 2zm13.3 5H7.7l.2 2.5h8.2l-.3 3h-5.2l-.2-2H8l.4 4.5 3.6 1 3.6-1 .5-5.5.2-2.5z" fill="currentColor" />
      </svg>
    );
  }

  // Lucide icon fallbacks for other titles/words
  if (lowercase === 'rest apis' || lowercase === 'rest api' || lowercase === 'api') return <Sliders size={size} className={className} />;
  if (lowercase.includes('database') || lowercase === 'data modeling') return <Database size={size} className={className} />;
  if (lowercase.includes('design') || lowercase.includes('wireframe') || lowercase.includes('prototype')) return <FigmaIconLucide size={size} className={className} />;
  if (lowercase.includes('yolo') || lowercase.includes('computer vision') || lowercase.includes('machine learning')) return <Eye size={size} className={className} />;
  if (lowercase.includes('ai') || lowercase.includes('prompt') || lowercase.includes('nlp')) return <Brain size={size} className={className} />;
  if (lowercase.includes('geoanalytics') || lowercase.includes('mapping')) return <LineChart size={size} className={className} />;

  // General category/semantic fallbacks
  if (lowercase.includes('web') || lowercase === 'web development') return <Globe size={size} className={className} />;
  if (lowercase.includes('backend') || lowercase === 'backend development') return <Server size={size} className={className} />;
  if (lowercase.includes('mobile') || lowercase === 'mobile development') return <Smartphone size={size} className={className} />;
  if (lowercase.includes('cloud')) return <Cloud size={size} className={className} />;

  return <Code size={size} className={className} />;
};
