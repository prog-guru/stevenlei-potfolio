"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SkillTag } from "@/components/SkillTag";
import { skillCategories } from "@/data/skills";

export default function SkillsPage() {
  let skillIndex = 0;

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
                {category.category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => {
                  const currentIndex = skillIndex++;
                  return <SkillTag key={skill} skill={skill} index={currentIndex} />;
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Highlight for AI/ML */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border border-cyan-200 dark:border-cyan-800"
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
            🚀 AI/LLM Specialization
          </h3>
          <p className="text-slate-700 dark:text-slate-300">
            I have extensive experience building production-ready AI applications, including
            retrieval-augmented generation (RAG) systems, LLM fine-tuning pipelines, and vector
            database integrations. My expertise spans from prompt engineering to deploying
            scalable AI infrastructure.
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}

