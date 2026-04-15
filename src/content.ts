export type ProjectLink = { label: string; href: string };
export type ProjectMedia = {
  images?: { src: string; alt: string }[];
  video?: { src: string; title?: string };
};

export type Project = {
  name: string;
  period?: string;
  desc: string;
  highlights?: string[];
  stack: string[];
  links?: ProjectLink[];
  media?: ProjectMedia;
};

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  bullets: string[];
  logo?: string;
  logos?: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type InterestCard = {
  title: string;
  desc: string;
};

export type EducationItem = {
  period: string;
  school: string;
  degree: string;
  extra?: string;
  logo?: string;
};

export type PortfolioContentData = {
  profile: {
    name: string;
    title: string;
    heroTitle: string;
    tagline: string;
    tech: string[];
    links: {
      github: string;
      linkedin: string;
      email: string;
    };
    photo: string;
    meta: {
      location: string;
      languages: string;
      phone?: string;
    };
  };
  about: string[];
  interests: InterestCard[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
  buildInPractice: string[];
};

export const profile = {
  name: "Yahav Ler",
  title: "Software Engineer | Backend & Full-Stack Developer",
  heroTitle: "Software Engineer",
  tagline:
    "Software Engineer with hands-on experience building backend services, REST APIs, SQL data models, and full-stack systems using Java Spring Boot, PostgreSQL, React, and Docker. Currently working in a production-focused NOC role, troubleshooting real-time incidents and collaborating with engineering and operations teams on mission-critical systems.",
  tech: [
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
    "PostgreSQL",
    "MongoDB",
    "SQL",
    "React",
    "TypeScript",
    "Docker",
    "Elastic",
    "Kibana",
    "Grafana",
  ],
  links: {
    github: "https://github.com/yahavLer",
    linkedin: "https://www.linkedin.com/in/yahav-ler-5899b826b/",
    email: "mailto:YahavLer.1@gmail.com",
  },
  photo: "/images/profile.jpg",
  meta: {
    location: "Israel",
    languages: "Hebrew, English",
    phone: "050-9298115",
  },
};

export const about: string[] = [
  "I’m a software engineer graduate with hands-on experience building backend services, APIs, and full-stack applications.",
  "I enjoy turning requirements into working systems — from database design and backend logic to integrations and user-facing flows.",
  "My current production-focused NOC role strengthened my troubleshooting, monitoring, and system-level thinking",
  "I’m now looking to bring that practical experience into a software engineering or backend development role."
];

export const interests: InterestCard[] = [
  {
    title: "Training",
    desc: "I enjoy staying active and pushing my limits—discipline and consistency carry over to my work.",
  },
  {
    title: "Hosting",
    desc: "I love hosting friends & family—good vibes, good food, and great conversations.",
  },
  {
    title: "Travel",
    desc: "Exploring new places energizes me and keeps me curious and creative.",
  },
];

export const skills: SkillGroup[] = [
  {
    title: "Backend & APIs",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Hibernate/JPA"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Mobile",
    items: ["Android (Java)", "Android SDK", "Retrofit", "Firebase (Auth/FCM)"],
  },
  {
    title: "Dev Tools",
    items: ["Docker", "Git", "GitHub", "Postman", "Swagger", "IntelliJ IDEA", "Android Studio", "VS Code"],
  },
  {
    title: "Production / Observability",
    items: ["Elastic", "Kibana", "Grafana", "Log analysis", "Alert investigation", "Linux troubleshooting"],
  },
  {
    title: "Operational Exposure",
    items: ["ArgoCD", "OpenShift", "Kafka", "YARN", "Message-queue systems", "Distributed system monitoring"],
  },
  {
    title: "Core CS",
    items: ["Object-Oriented Programming (OOP)", "Design Patterns", "Multi-threading"],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2024 – Present",
    company: "Defense Company",
    role: "NOC (Network Operations Center) Representative",
    logo: "/images/logos/mod.png",
    bullets: [
      "Monitor mission-critical production systems and investigate real-time incidents in a high-availability environment.",
      "Analyze logs, alerts, and system behavior using observability tools such as Elastic, Kibana, and Grafana.",
      "Write and execute complex SQL queries to extract data",
      "Work with production platforms and distributed environments — including ArgoCD, OpenShift, Kafka, YARN, message-queue systems, and Linux-based systems — from an operational monitoring and troubleshooting perspective.",
      "Collaborate with engineering and operations teams to identify issues, trace failures, and improve system stability.",
      "Designed and implemented automation for recurring operational alerts, improving consistency and reducing manual work.",
    ],
  },
  {
    period: "2019 – 2021",
    company: "IDF – Tel Hashomer Induction Center",
    role: "Network Administrator & Team Leader",
    logos: ["/images/logos/idf.png", "/images/logos/Meitav.png", "/images/logos/tikshuv.png"],
    bullets: [
      "Led a team of 10 network administrator soldiers supporting approximately 350 users.",
      "Owned user management, permissions, and troubleshooting of network and communication systems.",
      "Completed Network Administrator certification and Operational Digital Operator training.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    period: "2021 – 2025",
    school: "Afeka College of Engineering, Tel Aviv",
    degree: "B.Sc. in Software Engineering",
    extra: "Specialization in Mobile Applications",
    logo: "/images/logos/afeka.png",
  },
];

export const projects: Project[] = [
  {
    name: "SafeBox – Risk & Safety Management System (web platform, Microservice backend + React frontend)",
    period: "2025 – 2026",
    desc: "Backend-driven web platform for managing operational risks, mitigation workflows, and safety-related processes. Built as a multi-service Spring Boot system with a separate React frontend.",
    highlights: [
      "Built and integrated backend services for risk creation, mitigation/task workflows, organization management, and reporting flows.",
      "Worked in a multi-service architecture using Java Spring Boot, PostgreSQL, REST APIs, Docker Compose, and supporting infrastructure.",
      "Built an AI-assisted image analysis flow using Base44, Express, and Spring Boot to generate structured draft risk data from uploaded images.",
      "Collaborated across backend and frontend boundaries, defining API contracts and supporting end-to-end feature delivery.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Docker Compose",
    ],
    links: [
      { label: "Backend Repo", href: "https://github.com/yahavLer/rail-safe-platform" },
      { label: "Frontend Repo", href: "https://github.com/yahavLer/rail-safe-platform-front" },
    ],
    media: {
      video: { src: "/images/projects/safe-box/safe-box.mp4", title: "Rail Safe Demo" },
    },
  },
  {
    name: "QuickMatch - Dating Application (Microservices backend + Android client)",
    period: "2024 – 2025",
    desc: "A matchmaking platform combining questionnaires, personality matching, and AI-related components, built with Spring Boot microservices, SQL/NoSQL databases, Firebase integrations, and an Android client.",
    highlights: [
      "Served as technical lead in a 4-person team, helping drive architecture, API contracts, data design, and milestone-based delivery.",
      "Built backend services with Java Spring Boot, PostgreSQL, MongoDB, and Firebase integration for core user and matching flows.",
      "Developed and integrated client-server flows end-to-end, including Retrofit-based Android communication and real-time notifications.",
      "Worked with AI-related components as part of the matching solution.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Android (Java)",
      "Retrofit",
      "Docker",
      "Python (FaceNet/Flask)",
    ],
    links: [
      { label: "Android Client", href: "https://github.com/yahavLer/Meeting_Final_Project_Android" },
      { label: "Backend Microservices", href: "https://github.com/yahavLer/serverMatchmakingMicroservices" },
    ],
    media: {
      video: { src: "/images/projects/quick-match/quick-match-demo.mp4", title: "Personality Match Demo" },
    },
  },
  {
    name: "Benefit Management System (Spring Boot REST backend + Android client)",
    period: "2024",
    desc: "Benefit tracking platform with an authenticated Spring Boot REST backend and an Android client integrated via Retrofit.",
    highlights: [
      "Built authenticated Spring Boot REST APIs for benefit tracking.",
      "Developed an Android client consuming APIs with Retrofit for end-to-end user flows.",
      "Worked in an Agile/Scrum sprint-based team and packaged the system with Docker.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "Android (Java)", "Retrofit", "H2", "Docker"],
    links: [
      { label: "Frontend Repo", href: "https://github.com/yahavLer/integrativeClientSide_findYourBenefit" },
      { label: "Backend Repo", href: "https://github.com/yahavLer/integrativeServerSide_findYourBenefit" },
    ],
  },
  {
    name: "Benefit Finder (Android application)",
    period: "2024",
    desc: "Android app that aggregates credit card and loyalty-club benefits, compares offers, and recommends the best savings per purchase.",
    highlights: [
      "Designed a user flow for comparing benefits and surfacing the best value per purchase.",
      "Built a scalable structure for adding new benefit sources and categories.",
    ],
    stack: ["Android SDK", "Java"],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer/AndroidApp_BenefitFinder" }],
    media: {
      images: [
        { src: "/images/projects/benefit-finder/1.png", alt: "Benefit Finder screen 1" },
        { src: "/images/projects/benefit-finder/2.png", alt: "Benefit Finder screen 2" },
        { src: "/images/projects/benefit-finder/3.png", alt: "Benefit Finder screen 3" },
        { src: "/images/projects/benefit-finder/4.png", alt: "Benefit Finder screen 4" },
      ],
    },
  },
  {
    name: "Restaurant Simulation (C++ console application)",
    period: "2024",
    desc: "C++ project focused on object-oriented design, restaurant simulation, and structured class-based logic.",
    highlights: [
      "Implemented OOP principles including encapsulation, inheritance, and polymorphism.",
      "Worked with core C++ constructs, data structures, and clean program flow.",
    ],
    stack: ["C++", "OOP", "STL", "Data Structures"],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer/CPP_resturantPart2-GalYahavDiana" }],
  },
];
export const buildInPractice: string[] = [
  "Backend services with Spring Boot",
  "REST API design and integration",
  "SQL schema and data flows",
  "Microservices and multi-service systems",
  "Docker-based local environments",
  "Production troubleshooting and monitoring",
];