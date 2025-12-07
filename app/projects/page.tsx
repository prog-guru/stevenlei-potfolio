"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Sparkles } from "lucide-react";

type Category = "all" | "ai-ml" | "web" | "fullstack" | "architecture";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "ai-ml", label: "AI/ML" },
    { value: "fullstack", label: "Full Stack" },
    { value: "web", label: "Web" },
    { value: "architecture", label: "Architecture" },
  ];

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Projects
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in AI/ML, full-stack development, and
            system architecture
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.value
                  ? "bg-accent text-white"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </motion.div>
    </Section>
  );
}

