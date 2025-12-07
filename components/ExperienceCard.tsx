"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Experience } from "@/data/experience";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  totalCount: number;
}

export function ExperienceCard({ experience, index, totalCount }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {index < totalCount - 1 && (
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />
      )}

      <div className="relative flex gap-6">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-slate-900 z-10" />
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {experience.title}
                </h3>
                <p className="text-lg text-accent font-medium mt-1">{experience.company}</p>
              </div>
              <div className="flex flex-col sm:items-end gap-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {experience.startDate} - {experience.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {experience.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="text-accent mt-1.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

