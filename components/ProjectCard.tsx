"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="h-full bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              {project.category === "ai-ml" && (
                <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  AI/ML
                </span>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
              {project.description}
            </p>
          </div>
        </div>

        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 flex-1">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-accent transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

