export const person = {
  name: "Janani Kuppan",
  title: "AI/ML & Full-Stack Developer | SIH 2025 Winner",
  email: "jananikuppan04@gmail.com",
  location: "Kanchipuram, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/jananikuppan",
  github: "https://github.com/jananikuppan04",
  resume: "/resume/janani-kuppan-resume.pdf",
  availability:
    "Open to internships, entry-level roles, freelance projects, and startup collaborations.",
};

export const navigation = [
  "About",
  "Services",
  "Projects",
  "Experience",
  "Skills",
  "Education",
  "Contact",
];

export const services = [
  {
    title: "AI Chatbots & RAG Assistants",
    description:
      "Grounded assistants for websites, documents, policies, product information, and frequently asked questions.",
    audience: "Service businesses, internal teams, education and support workflows",
    deliverables: "Knowledge ingestion, conversational UI, grounded answers and API integration",
    icon: "brain",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Responsive products with thoughtful interfaces, databases, APIs, authentication and deployment-ready architecture.",
    audience: "Startups, student founders and growing small businesses",
    deliverables: "Frontend, backend, database integration, testing and deployment",
    icon: "layers",
  },
  {
    title: "Computer Vision & AI/ML Systems",
    description:
      "Vision models, real-time image analysis, similarity scoring, and smart classification workflows.",
    audience: "Hackathon prototypes, industrial automation and smart surveillance",
    deliverables: "Model integration, real-time processing pipelines, and intuitive UI dashboards",
    icon: "zap",
  },
  {
    title: "Java & Spring Boot Backend",
    description:
      "Structured REST APIs with database persistence, validation, error handling and maintainable application logic.",
    audience: "Teams that need a reliable backend foundation",
    deliverables: "API design, database models, validation, documentation and deployment",
    icon: "server",
  },
];

export const projects = [
  {
    id: "tenderlens",
    number: "01",
    title: "TenderLens AI",
    image: "/images/projects/tenderlens.jpg",
    category: "AI/ML · RAG · Computer Vision · Full Stack",
    status: "Active build",
    accent: "violet",
    summary:
      "An intelligent tender analysis and bid evaluation platform combining RFP document intelligence, multimodal RAG extraction, and automated compliance risk scoring.",
    problem:
      "Enterprises and vendors spend hundreds of hours manually parsing massive government and commercial RFPs to assess technical compliance and eligibility.",
    solution:
      "An automated AI pipeline leveraging multimodal RAG, semantic document segmentation, and compliance checklists to deliver instant bid readiness scores.",
    features: [
      "Multimodal RFP & tender document parsing with RAG",
      "Automated compliance checklist & risk assessment matrix",
      "Semantic clause similarity scoring & eligibility matching",
      "Interactive AI tender assistant with exact source citations",
    ],
    stack: ["Python", "React", "RAG Systems", "NLP", "FastAPI / Node.js", "PostgreSQL"],
    role:
      "System architecture, RAG pipeline, compliance scoring logic, and full-stack interface",
  },

  {
    id: "clientpilot",
    number: "02",
    title: "ClientPilot AI",
    image: "/images/projects/clientpilot.png",
    category: "AI SaaS · Full Stack · RAG",
    status: "In development",
    accent: "blue",
    summary:
      "An AI-powered business platform combining lead management, appointments, a knowledge base, and a grounded customer assistant.",
    problem:
      "Small service teams often manage enquiries, appointments, FAQs and follow-ups across disconnected tools.",
    solution:
      "A single operational workspace with an AI assistant grounded in approved business information.",
    features: [
      "RAG chatbot grounded in business documents",
      "Lead capture and conversation history",
      "Appointment workflow and admin analytics",
      "English and Tamil support",
    ],
    stack: ["React", "Node.js", "RAG", "REST APIs", "PostgreSQL"],
    role:
      "Product concept, interface direction, full-stack and AI implementation",
  },

  {
    id: "agriconnect",
    number: "03",
    title: "AgriConnect AI",
    image: "/images/projects/agriconnect.png",
    category: "Social Impact · AI/ML & Computer Vision · Full Stack",
    status: "In development",
    accent: "green",
    summary:
      "A farm-intelligence platform designed to bring crop health, leaf-disease computer vision detection, weather, and agricultural guidance into one accessible experience.",
    problem:
      "Farm decisions depend on fragmented information about crop condition, weather, pricing and timely interventions.",
    solution:
      "A unified dashboard that makes farm signals easier to understand and act on with vision-based disease diagnostics.",
    features: [
      "Crop-health overview and farm dashboard",
      "Leaf-image computer vision disease detection flow",
      "Weather and market-price context",
      "Crop recommendation workflow",
    ],
    stack: ["React", "Python", "Node.js", "Computer Vision", "REST APIs"],
    role:
      "Product design, full-stack development and computer vision workflow exploration",
  },

  {
    id: "taskflow",
    number: "04",
    title: "Task Management System",
    image: "/images/projects/task-management.png",
    category: "Java · Spring Boot · REST API",
    status: "Backend build",
    accent: "blue",
    summary:
      "A backend-focused task platform built to practise structured Spring Boot architecture and reliable API workflows.",
    problem:
      "Teams need a consistent way to create, prioritise, update and track tasks through a dependable backend.",
    solution:
      "A REST-oriented application for task lifecycle operations and database-backed persistence.",
    features: [
      "Task creation and management",
      "Status and priority tracking",
      "RESTful endpoint structure",
      "Validation and error handling",
    ],
    stack: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
    role:
      "Backend architecture, API implementation and database integration",
  },
];

export const skillGroups = [
  {
    name: "AI/ML, Vision & Applied Intelligence",
    level: "Core project experience",
    skills: ["Python", "Computer Vision", "OpenCV", "NLP", "RAG Systems", "LLM Applications", "Similarity Scoring"],
  },
  {
    name: "Frontend Development",
    level: "Project experience",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI/UX", "Tailwind / Vanilla CSS"],
  },
  {
    name: "Backend & System APIs",
    level: "Project experience",
    skills: ["Node.js", "FastAPI", "REST APIs", "Java", "Spring Boot", "Python"],
  },
  {
    name: "Data, Tools & Deployment",
    level: "Working knowledge",
    skills: ["PostgreSQL", "Supabase", "Git", "GitHub", "Vercel", "Linux"],
  },
  {
    name: "Engineering Foundations",
    level: "Core strengths",
    skills: ["OOP", "Data Structures", "System Design", "Hackathon Prototyping", "Team Leadership"],
  },
];

export const education = [
  {
    period: "Aug 2024 — Jul 2028",
    credential: "B.E. in Computer Science and Engineering",
    school: "University College of Engineering, Kanchipuram",
    detail: "CGPA: 8.85",
  },
  {
    period: "2023 — 2024",
    credential: "Higher Secondary — Computer Science & Mathematics",
    school: "S.S.K.V Girls Higher Secondary School",
    detail: "90%",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2025 — Winner",
    detail:
      "Built an AI surveillance and computer-vision system for extreme weather conditions.",
    context: "Ministry of Education · IIT Roorkee, Delhi",
  },
  {
    title: "HackHustle National Hackathon — 2nd Place",
    detail:
      "Built Trust Vault, a decentralized escrow system for secure, transparent transactions.",
    context: "24-hour National Hackathon",
  },
  {
    title: "SA Hackathon 2026 — 3rd Place",
    detail:
      "Built HexaPathAI, an AI-based skill-gap analysis and dynamic learning roadmap platform.",
    context: "36-hour National Hackathon",
  },
  {
    title: "MIT Hackathon — Finalist",
    detail:
      "Recognized as a finalist for designing an innovative real-world AI/ML prototype under rigorous judging criteria.",
    context: "MIT Hackathon",
  },
  {
    title: "Quantum Hackathon — PPT Round Qualifier",
    detail:
      "Selected as qualifier in the technical presentation round for quantum computing conceptualization & architecture.",
    context: "National Quantum Hackathon",
  },
  {
    title: "TNWISE Hackathon 2025 — State Round Qualifier",
    detail:
      "Developed Smart Wheel, a real-time assistive mobility prototype empowering accessibility.",
    context: "Government of Tamil Nadu",
  },
];

export const process = [
  ["01", "Understand", "Clarify the business problem, users and required outcome."],
  ["02", "Plan", "Define essential features, technology, timeline and delivery scope."],
  ["03", "Build", "Develop the UI, backend, database and AI integration in focused increments."],
  ["04", "Test & Deliver", "Check responsiveness, APIs, edge cases, security and deployment."],
];
