export interface Experience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Company",
    title: "Senior Software Engineer / Team Lead",
    location: "San Francisco, CA",
    startDate: "2022",
    endDate: "Present",
    highlights: [
      "Led a team of 5 engineers in developing scalable AI-powered applications",
      "Architected and implemented RAG systems processing 10M+ documents",
      "Reduced API response times by 60% through optimization and caching strategies",
      "Mentored junior developers and established engineering best practices",
    ],
    technologies: ["TypeScript", "Next.js", "Python", "OpenAI", "PostgreSQL", "AWS"],
  },
  {
    id: "2",
    company: "Previous Company",
    title: "Software Engineer",
    location: "Remote",
    startDate: "2020",
    endDate: "2022",
    highlights: [
      "Built full-stack applications serving 100K+ users",
      "Implemented microservices architecture using Docker and Kubernetes",
      "Collaborated with cross-functional teams to deliver features on time",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Kubernetes"],
  },
];

