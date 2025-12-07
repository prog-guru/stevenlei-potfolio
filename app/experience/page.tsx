"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional journey, highlighting key roles and achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              totalCount={experiences.length}
            />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

