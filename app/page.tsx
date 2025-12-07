"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Section } from "@/components/Section";
import { personalInfo } from "@/data/personal";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl text-accent font-semibold mb-6"
            >
              {personalInfo.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                View Projects
              </Link>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Experience", value: personalInfo.stats.yearsExperience },
            { label: "Companies", value: personalInfo.stats.companies },
            { label: "Technologies", value: personalInfo.stats.technologies },
            { label: "Projects", value: personalInfo.stats.projects },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-accent mb-2">{stat.value}+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects Preview */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Featured Projects
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                A selection of my recent work
              </p>
            </div>
            <Link
              href="/projects"
              className="text-accent hover:text-accent-hover font-medium flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="text-accent hover:text-accent-hover text-sm font-medium flex items-center gap-1"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Quick Links */}
      <Section className="bg-slate-50 dark:bg-slate-900/50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a
            chat about technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
            >
              Contact Form
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

