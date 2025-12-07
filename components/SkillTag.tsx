"use client";

import { motion } from "framer-motion";

interface SkillTagProps {
  skill: string;
  index: number;
}

export function SkillTag({ skill, index }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05 }}
      className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors cursor-default"
    >
      {skill}
    </motion.span>
  );
}

