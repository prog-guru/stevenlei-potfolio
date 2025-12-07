export interface SkillCategory {
  category: string;
  skills: string[];
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "AI/ML & LLM",
    skills: [
      "OpenAI API",
      "LangChain",
      "RAG Systems",
      "Vector Databases",
      "LLM Fine-tuning",
      "Prompt Engineering",
      "Semantic Search",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "React Server Components",
      "WebSocket",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "gRPC",
      "Microservices",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Terraform",
      "GitHub Actions",
      "Monitoring",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Pinecone",
      "Vector DBs",
      "Database Design",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "System Design",
      "Distributed Systems",
      "Event-Driven Architecture",
      "API Design",
      "Scalability",
      "Performance Optimization",
    ],
  },
];

