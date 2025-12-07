"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/personal";
import { Award, Users, Code, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const strengths = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Deep expertise in modern web technologies, AI/ML systems, and scalable architecture patterns.",
    },
    {
      icon: Users,
      title: "Leadership & Mentorship",
      description:
        "Proven track record of leading engineering teams, mentoring developers, and fostering collaborative environments.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Passionate about leveraging cutting-edge technology to solve complex problems and create impactful solutions.",
    },
    {
      icon: Award,
      title: "Best Practices",
      description:
        "Committed to writing clean, maintainable code and following industry best practices for long-term success.",
    },
  ];

  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              About Me
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Learn more about my journey, expertise, and what drives me
            </p>
          </div>

          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-slate dark:prose-invert max-w-none mb-16"
          >
            <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
              {personalInfo.about.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Strengths Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        {strength.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center p-8 bg-slate-50 dark:bg-slate-900/50 rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Let's Work Together
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              I'm always interested in new opportunities and exciting projects. Feel free to reach
              out!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}

