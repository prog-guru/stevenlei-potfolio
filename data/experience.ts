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

export const experience = [
  {
    id: "1",
    company: "FairwAI",
    title: "Team Lead / Senior FullStack Engineer",
    location: "Remote",
    startDate: "2024.8",
    endDate: "Present",
    highlights: [
      "Built backend services and APIs using TypeScript/NestJS",
      "Designed LLM-powered search, summarization, and decision tools",
      "Implemented RAG pipelines with vector DBs and embeddings",
      "Developed and productionized LLM workflows using Python/LangChain",
      "Architected polyglot microservices using NestJS, Spring Boot, and .NET",
      "Improved scalability using RabbitMQ for async workflows",
      "Deployed services on AWS + Kubernetes with Docker and Helm",
      "Enhanced observability through logging, metrics, and tracing",
      "Strengthened CI/CD pipelines across TS, Java, and .NET services",
      "Led Agile processes, code reviews, and developer mentorship",
    ],
    technologies: [
      "TypeScript",
      "NestJS",
      "Python",
      "LangChain",
      "Spring Boot",
      ".NET",
      "RabbitMQ",
      "AWS",
      "Kubernetes",
      "Docker"
    ],
  },
  {
    id: "2",
    company: "U.S. Bank",
    title: "Software Team Lead",
    location: "Remote",
    startDate: "2023.1",
    endDate: "2024.8",
    highlights: [
      "Delivered secure banking platforms using Node.js/NestJS",
      "Built LLM-assisted internal tools using Python and LangChain",
      "Architected REST/GraphQL APIs with PostgreSQL and AWS",
      "Developed reusable Next.js components for internal portals",
      "Enhanced CI/CD using GitHub Actions, Jenkins, and Docker",
    ],
    technologies: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Supabase",
      "AWS",
      "Python"
    ],
  },
  {
    id: "3",
    company: "Infinite Campus",
    title: "Senior Software Engineer / Team Lead",
    location: "Remote",
    startDate: "2021.11",
    endDate: "2023.1",
    highlights: [
      "Led development of K-12 platform microservices",
      "Built backend APIs using Golang, Java, and .NET",
      "Created performant React and Angular interfaces",
      "Improved deployments and CI/CD with Git, Jenkins, Docker",
    ],
    technologies: [
      "Golang",
      "Java",
      "Spring Boot",
      ".NET",
      "PostgreSQL",
      "Redis",
      "React",
      "Angular",
      "Docker"
    ],
  },
  {
    id: "4",
    company: "TSI Incorporated",
    title: "Software Engineer",
    location: "Minnesota, USA",
    startDate: "2021.4",
    endDate: "2021.11",
    highlights: [
      "Built full-stack features with Java/Spring Boot",
      "Developed dashboards using React, Angular, and TypeScript",
      "Implemented Kafka-based data pipelines",
      "Optimized backend with Redis and SQL tuning",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "PostgreSQL",
      "React",
      "Angular",
      "Kafka",
      "Redis",
      "Docker"
    ],
  },
  {
    id: "5",
    company: "CODE42 Software",
    title: "Software Engineer",
    location: "Minnesota, USA",
    startDate: "2018.8",
    endDate: "2021.4",
    highlights: [
      "Built internal tools using .NET Core and React",
      "Developed gRPC microservices for fast communication",
      "Improved CI/CD pipelines using Jenkins and Docker",
      "Provisioned cloud infra with Terraform and Ansible",
    ],
    technologies: [
      "C#",
      ".NET Core",
      "EF Core",
      "PostgreSQL",
      "React",
      "Angular",
      "gRPC",
      "Docker",
      "Terraform"
    ],
  },
  {
    id: "6",
    company: "Futurist Academy",
    title: "Co-Founder / FullStack Engineer",
    location: "Remote",
    startDate: "2018.5",
    endDate: "2021.4",
    highlights: [
      "Built education platforms with Node.js, React, and React Native",
      "Designed microservices for courses and authentication",
      "Created REST APIs for web + mobile learners",
      "Deployed apps using AWS Lambda, API Gateway, and CloudFront",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "React Native",
      "MongoDB",
      "AWS"
    ],
  },
  {
    id: "7",
    company: "UnitedHealth Group",
    title: "Web Developer",
    location: "Minnesota, USA",
    startDate: "2017.1",
    endDate: "2018.4",
    highlights: [
      "Built healthcare web apps using React and Angular",
      "Developed backend endpoints in Node.js and PHP",
      "Built Django-based services for secure patient workflows",
      "Automated jobs with Python, Celery, and Redis",
    ],
    technologies: [
      "React",
      "Angular",
      "Node.js",
      "PHP",
      "Python",
      "Django",
      "Redis",
      "GCP"
    ],
  },
  {
    id: "8",
    company: "Infinite Campus",
    title: "Software Engineer Intern",
    location: "Minnesota, USA",
    startDate: "2016.5",
    endDate: "2016.11",
    highlights: [
      "Built features using C#/.NET and WPF",
      "Wrote unit tests and improved application stability",
      "Used Azure ML and Cognitive Services for ML workflows",
    ],
    technologies: [
      "C#",
      ".NET",
      "WPF",
      "Azure ML",
      "Python"
    ],
  },
  {
    id: "9",
    company: "Maverick Software Consulting",
    title: "Software Engineer Intern",
    location: "Minnesota, USA",
    startDate: "2015.12",
    endDate: "2016.4",
    highlights: [
      "Developed software in C++ and Java",
      "Refined requirements and wrote clean, optimized code",
      "Prototyped ML utilities using Python and TensorFlow",
    ],
    technologies: [
      "C++",
      "Java",
      "Python",
      "TensorFlow"
    ],
  },
];

