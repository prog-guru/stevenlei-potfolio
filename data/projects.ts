export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  category: "ai-ml" | "web" | "fullstack" | "architecture";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered RAG System",
    description: "Enterprise-grade retrieval-augmented generation system with vector search",
    longDescription: "Built a production-ready RAG system that processes millions of documents with sub-second query response times. Implemented advanced chunking strategies, semantic search, and context-aware response generation.",
    technologies: ["Python", "OpenAI", "Pinecone", "FastAPI", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/stevenlei/rag-system",
    demoUrl: "https://rag-demo.vercel.app",
    featured: true,
    category: "ai-ml",
  },
  {
    id: "2",
    title: "Real-Time Collaboration Platform",
    description: "Scalable web application with real-time features and modern UX",
    longDescription: "Developed a full-stack collaboration platform with WebSocket integration, real-time updates, and intuitive user interface. Handles 10K+ concurrent users with optimized performance.",
    technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Redis", "TailwindCSS"],
    githubUrl: "https://github.com/stevenlei/collab-platform",
    demoUrl: "https://collab-demo.vercel.app",
    featured: true,
    category: "fullstack",
  },
  {
    id: "3",
    title: "Microservices Architecture",
    description: "Cloud-native architecture with container orchestration",
    longDescription: "Designed and implemented a microservices-based system with service mesh, API gateway, and distributed tracing. Achieved 99.9% uptime with auto-scaling capabilities.",
    technologies: ["Kubernetes", "Docker", "gRPC", "Prometheus", "Grafana", "Go"],
    githubUrl: "https://github.com/stevenlei/microservices",
    featured: false,
    category: "architecture",
  },
  {
    id: "4",
    title: "LLM Fine-Tuning Pipeline",
    description: "Automated pipeline for fine-tuning large language models",
    longDescription: "Created an end-to-end pipeline for fine-tuning LLMs with custom datasets. Includes data preprocessing, training orchestration, evaluation metrics, and deployment automation.",
    technologies: ["Python", "PyTorch", "Hugging Face", "MLflow", "AWS Sagemaker"],
    githubUrl: "https://github.com/stevenlei/llm-pipeline",
    featured: true,
    category: "ai-ml",
  },
];

