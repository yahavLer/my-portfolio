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

export const profile = {
  name: "Yahav Ler",
  title: "Software Engineer (B.Sc.) | Mobile & Web | Backend Developer | NOC Representative",
  tagline:
  "Software engineer with a passion for building end-to-end products. Experienced in Java, Spring Boot, RESTful APIs, and SQL, alongside front development at android and web . Proactive problem-solver with a strong foundation in software engineering principles. Passionate about building end-to-end products with clean architecture.",
  tech: [
    "Java",
    "TypeScript",
    "Python",
    "C",
    "C++",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "SQL",
    "Android",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Firebase",
    "Kibana",
    "Grafana",
    "ArgoCD",
    "OpenShift",
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
  "B.Sc. Software Engineering graduate, specializing in Mobile Applications.",
  "I love building products end-to-end: Android client + Spring Boot backend + databases, with a focus on clean architecture and maintainable code.",
  "Currently working as a NOC Representative in a defense company, monitoring mission-critical systems and handling real-time incidents while collaborating with engineering and operations teams.",
  "I’m proactive, take ownership, communicate clearly, and enjoy learning fast and improving systems continuously.",
];

export const interests: InterestCard[] = [
  { title: "Training", desc: "I enjoy staying active and pushing my limits—discipline and consistency carry over to my work." },
  { title: "Hosting", desc: "I love hosting friends & family—good vibes, good food, and great conversations." },
  { title: "Travel", desc: "Exploring new places energizes me and keeps me curious and creative." },
];

export const skills: SkillGroup[] = [
  { title: "Languages", items: ["Java", "Python", "C", "C++", "TypeScript"] },
  { title: "Backend & APIs", items: ["Spring Boot", "RESTful APIs", "Microservices", "Hibernate/JPA"] },
  { title: "Mobile", items: ["Android (Java)", "Android SDK", "Retrofit", "Firebase (Auth/FCM)"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"] },
  { title: "DevOps & Tools", items: ["Docker", "GitHub", "IntelliJ IDEA", "Android Studio"] },
  {
    title: "Monitoring & Production",
    items: ["Kibana", "Grafana", "ArgoCD", "OpenShift", "vSphere", "NetApp", "Cloudera Manager", "UCS", "CA Spectrum", "SOI"],
  },
  { title: "Core CS", items: ["Object-Oriented Programming (OOP)", "Design Patterns", "Multi-threading"] },
];

export const experience: ExperienceItem[] = [
  {
    period: "2024 – Present",
    company: "Defense Company",
    role: "NOC (Network Operations Center) Representative",
    logo: "/images/logos/mod.png",
    bullets: [
      "Monitor mission-critical production systems and handle Tier 1.5 incidents in real time.",
      "Work daily with monitoring, logging, and infrastructure tools (Kibana, Grafana, ArgoCD, OpenShift, vSphere, NetApp).",
      "Collaborate with engineering and operations teams to maintain high availability and stability.",
    ],
  },
  {
    period: "2019 – 2021",
    company: "IDF – Tel Hashomer Induction Center",
    role: "Network Administrator & Team Leader",
    logos: ["/images/logos/idf.png", "/images/logos/Meitav.png", "/images/logos/tikshuv.png"],
    bullets: [
      "Led a team of 10 network administrator soldiers, supporting ~350 users.",
      "Owned user management, permissions, and troubleshooting of network/communication systems.",
      "Completed Operational Digital Operator course and Network Administrator certification.",
    ],
  },
];

export const education = [
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
    name: "Dating App (AI/ML + Microservices + Full-Stack)",
    period: "2024 – 2025",
    desc: "Full-stack mobile dating platform combining MBTI-based personality matching with FaceNet facial similarity, built with Spring Boot microservices and an Android client.",
    highlights: [
      "Led a team of 4 in an Agile environment and delivered an end-to-end working system.",
      "Implemented matching flow (MBTI + face similarity score) and real-time chat notifications (FCM).",
      "Integrated Android client with REST APIs using Retrofit; persisted data in PostgreSQL/MongoDB.",
    ],
    stack: [
      "Android (Java)",
      "Java",
      "Spring Boot",
      "Microservices",
      "PostgreSQL",
      "MongoDB",
      "Firebase Auth/FCM",
      "Docker",
      "Python (FaceNet/Flask)",
    ],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer" }],
    media: {
      video: { src: "/images/projects/quick-match/quick-match-demo.mp4", title: "Quick Match Demo" },
      // אם תוסיפי תמונות לפרויקט quick-match, פשוט תוסיפי כאן images[]
    },
  },

  {
    name: "Rail Safe Platform – Risk Management System",
    period: "2025 – 2026",
    desc: "End-to-end risk & safety management system inspired by real operational needs (initially envisioned for a safety manager at Israel Railways). Built as a separated Frontend + Backend repositories for clean architecture and scalability.",
    highlights: [
      "Designed a full risk-management workflow: risks, mitigations/tasks, and operational tracking.",
      "Implemented clear API boundaries and maintainable structure between UI, services, and data layer.",
      "Built with scalability in mind (separation of concerns, modular components, and production-ready patterns).",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Microservices",
      "SQL",
      "React",
      "TypeScript",
      "Docker",
      "Git",
    ],
    links: [
      { label: "Backend Repo", href: "https://github.com/yahavLer/rail-safe-platform" },
      { label: "Frontend Repo", href: "https://github.com/yahavLer/rail-safe-platform-front" },
    ],
  },
  {
    name: "C++ Restaurant (OOP Project)",
    period: "2024",
    desc: "C++ project focused on OOP design: restaurant simulation/management with structured classes and logic.",
    highlights: [
      "Implemented OOP principles (encapsulation, inheritance, polymorphism) and clean class design.",
      "Worked with core C++ constructs, data structures, and robust program flow.",
    ],
    stack: ["C++", "OOP", "STL", "Data Structures"],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer/CPP_resturantPart2-GalYahavDiana" }],
  },

  {
    name: "Benefit Management System (Full-Stack)",
    period: "2024",
    desc: "Benefit tracking platform with an authenticated Spring Boot REST backend and an Android client integrated via Retrofit.",
    highlights: [
      "Built REST backend with authentication and benefit-tracking flows.",
      "Developed Android client consuming APIs with Retrofit.",
      "Packaged for consistent runs using Docker; used H2 for persistence during development.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "Android (Java)", "Retrofit", "H2", "Docker"],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer" }],
  },
  {
    name: "Benefit Finder – Android App",
    period: "2024",
    desc: "Android app that aggregates credit card and loyalty club benefits, compares offers, and recommends best savings per purchase.",
    highlights: [
      "Designed UX for comparing benefits and surfacing best value per purchase.",
      "Built a scalable structure for adding new benefit sources and categories.",
    ],
    stack: ["Android SDK", "Java"],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer" }],
    media: {
      images: [
        { src: "/images/projects/benefit-finder/1.png", alt: "Benefit Finder - screen 1" },
        { src: "/images/projects/benefit-finder/2.png", alt: "Benefit Finder - screen 2" },
        { src: "/images/projects/benefit-finder/3.png", alt: "Benefit Finder - screen 3" },
        { src: "/images/projects/benefit-finder/4.png", alt: "Benefit Finder - screen 4" },
      ],
    },
  },
];

export const additional = [
  "Additional academic projects in C, C++, Java, and SQL focusing on OOP, data structures, and file-based persistence.",
];
