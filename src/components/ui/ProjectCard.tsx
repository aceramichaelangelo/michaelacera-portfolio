"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { ImageWithFallback } from "./ImageWithFallback";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ProjectCardProps {
  project: Project;
  imageType?: "project" | "mobile" | "design";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  imageType = "project",
}) => {
  const isMobile = imageType === "mobile";
  const shouldReduce = useReducedMotion();

  const cardContent = (
    <Card className="flex h-full flex-col group transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(6,182,212,0.08)]" interactive>
      {isMobile ? (
        <div className="flex h-[360px] w-full shrink-0 items-center justify-center border-b border-white/[0.06] bg-[#080812] p-6">
          <div className="relative h-full max-h-[300px] w-auto overflow-hidden rounded-[1.5rem] border border-white/10 bg-black shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-shadow duration-300 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              type={imageType}
              className="h-full w-auto max-w-[170px] object-contain object-center transition-transform duration-500 group-hover:scale-[1.03] sm:max-w-[190px]"
            />
          </div>
        </div>
      ) : (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden border-b border-white/[0.06]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            type={imageType}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      )}

      <div className="flex min-h-[168px] flex-grow flex-col p-5">
        <h3 className="mb-2 line-clamp-2 min-h-[3.25rem] text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-400">
          {project.title}
        </h3>

        <p className="mb-4 line-clamp-2 min-h-[2.5rem] flex-grow text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-auto flex min-h-[56px] flex-wrap content-start gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="slate">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="slate">+{project.technologies.length - 3}</Badge>
          )}
        </div>
      </div>
    </Card>
  );

  if (shouldReduce) {
    return <div className="h-full">{cardContent}</div>;
  }

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      {cardContent}
    </motion.div>
  );
};
