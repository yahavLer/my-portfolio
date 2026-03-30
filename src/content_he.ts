import type {
  ProjectLink,
  ProjectMedia,
  Project,
  ExperienceItem,
  SkillGroup,
  InterestCard,
  EducationItem,
  PortfolioContentData,
} from "@/content";

export type {
  ProjectLink,
  ProjectMedia,
  Project,
  ExperienceItem,
  SkillGroup,
  InterestCard,
  EducationItem,
  PortfolioContentData,
};

export const profile: PortfolioContentData["profile"] = {
  name: "יהב לר",
  title: "Software Engineer | Backend & Full-Stack Developer",
  heroTitle: "מהנדסת תוכנה",
  tagline:
    "בוגרת הנדסת תוכנה עם ניסיון מעשי בפיתוח שירותי צד שרת, עבודה עם APIs, בסיסי נתונים ומערכות full-stack. אני עובדת בעיקר עם Java, Spring Boot, PostgreSQL, React ו-Docker. כיום אני בתפקיד NOC, עם עבודה שוטפת מול מערכות קריטיות, לוגים, ניטור ותחקור תקלות בזמן אמת, בשיתוף פעולה עם צוותי הנדסה ותפעול.",
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
    location: "ישראל",
    languages: "עברית, אנגלית",
    phone: "050-9298115",
  },
};

export const about: string[] = [
  "יש לי ניסיון מעשי בבניית שירותי backend, APIs ומערכות full-stack, משלב הרעיון ועד למערכת עובדת.",
  "אני אוהבת לקחת דרישות, לפרק אותן לחלקים ברורים, ולהפוך אותן לפתרון מסודר — מהדאטה והלוגיקה בצד השרת ועד לאינטגרציות וחוויית המשתמש.",
  "מעבר לפיתוח, התפקיד שלי ב-NOC נתן לי חשיפה אמיתית לעבודה עם מערכות production: ניטור, לוגים, תחקור תקלות, והבנה של איך מערכות מתנהגות בזמן אמת.",
  "אני לומדת מהר, אוהבת לקחת אחריות, ומחפשת תפקיד שבו אוכל להמשיך לצמוח כמהנדסת תוכנה עם דגש על backend.",
];

export const interests: InterestCard[] = [
  {
    title: "אימונים",
    desc: "אני אוהבת לשמור על שגרה פעילה ולאתגר את עצמי — משמעת והתמדה מלוות אותי גם בעבודה.",
  },
  {
    title: "אירוח",
    desc: "אני אוהבת לארח חברים ומשפחה — אוכל טוב, אווירה טובה ושיחות טובות.",
  },
  {
    title: "טיולים",
    desc: "לגלות מקומות חדשים נותן לי אנרגיה, סקרנות ורעיונות חדשים.",
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
    items: [
      "Docker",
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "IntelliJ IDEA",
      "Android Studio",
      "VS Code",
    ],
  },
  {
    title: "Production / Observability",
    items: [
      "Elastic",
      "Kibana",
      "Grafana",
      "ניתוח לוגים",
      "חקירת התראות",
      "Linux troubleshooting",
    ],
  },
  {
    title: "Operational Exposure",
    items: [
      "ArgoCD",
      "OpenShift",
      "Kafka",
      "YARN",
      "מערכות תורים",
      "ניטור מערכות מבוזרות",
    ],
  },
  {
    title: "Core CS",
    items: ["OOP", "Design Patterns", "Multi-threading"],
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "2024 – היום",
    company: "חברה ביטחונית",
    role: "NOC (Network Operations Center) Representative",
    logo: "/images/logos/mod.png",
    bullets: [
      "מנטרת מערכות production קריטיות ומטפלת בתקלות בזמן אמת בסביבה שדורשת זמינות גבוהה.",
      "עובדת באופן שוטף עם Elastic, Kibana ו-Grafana כדי לנתח לוגים, התראות והתנהגות מערכת.",
      "נחשפת לעבודה תפעולית מול סביבות כמו ArgoCD, OpenShift, Kafka, YARN, מערכות תורים ו-Linux, בעיקר מזווית של ניטור ו-troubleshooting.",
      "עובדת מול צוותי הנדסה ותפעול כדי לאתר תקלות, להבין את שורש הבעיה ולשפר יציבות מערכתית.",
      "בניית אוטומציה להתראות חוזרות כדי לצמצם עבודה ידנית ולשפר עקביות.",
    ],
  },
  {
    period: "2019 – 2021",
    company: "צה״ל – מיטב, תל השומר",
    role: "מנהלת רשת ומפקדת צוות",
    logos: ["/images/logos/idf.png", "/images/logos/Meitav.png", "/images/logos/tikshuv.png"],
    bullets: [
      "הובלתי צוות של 10 חיילי מנהלי רשת ותמכתי בכ-350 משתמשים.",
      "הייתי אחראית על ניהול משתמשים, הרשאות ופתרון תקלות במערכות תקשורת ורשת.",
      "השלמתי הסמכת מנהל רשת וקורס מפעיל דיגיטל מבצעי.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    period: "2021 – 2025",
    school: "המכללה האקדמית להנדסה אפקה, תל אביב",
    degree: "B.Sc. בהנדסת תוכנה",
    extra: "התמחות באפליקציות מובייל",
    logo: "/images/logos/afeka.png",
  },
];

export const projects: Project[] = [
  {
    name: "Rail Safe Platform – מערכת לניהול סיכונים ובטיחות",
    period: "2025 – 2026",
    desc: "מערכת web לניהול סיכונים ובטיחות, עם דגש חזק על backend: יצירת סיכונים, מעקב אחר משימות מיטיגציה ותמיכה בתהליכי עבודה תפעוליים. המערכת בנויה על כמה שירותי Spring Boot עם frontend נפרד ב-React.",
    highlights: [
      "פיתוח ואינטגרציה של שירותי backend ליצירת סיכונים, ניהול משימות מיטיגציה, ניהול ארגון וזרימות דיווח.",
      "עבודה בארכיטקטורת multi-service עם Java, Spring Boot, PostgreSQL, REST APIs ו-Docker Compose.",
      "פיתוח זרימת AI-assisted לניתוח תמונות באמצעות Base44, Express ו-Spring Boot, ליצירת טיוטת סיכון מתוך תמונה שהועלתה.",
      "עבודה על קו התפר בין backend ל-frontend, כולל הגדרת חוזי API ותמיכה בפיצ'רים מקצה לקצה.",
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
    name: "Personality Match – פלטפורמת התאמה מבוססת Microservices",
    period: "2024 – 2025",
    desc: "פלטפורמת התאמה שמבוססת על שאלונים, התאמה אישיותית ורכיבי AI, עם Spring Boot microservices, מסדי נתונים SQL/NoSQL, אינטגרציות Firebase ואפליקציית Android.",
    highlights: [
      "שימשתי כ-Technical Lead בצוות של 4 מפתחים, עם מעורבות בארכיטקטורה, חוזי API, תכנון נתונים והובלת אבני דרך.",
      "פיתוח שירותי backend ב-Java Spring Boot עם PostgreSQL, MongoDB ואינטגרציות Firebase לזרימות משתמשים והתאמות.",
      "פיתוח ואינטגרציה של זרימות client-server מקצה לקצה, כולל תקשורת Retrofit והתראות בזמן אמת.",
      "עבודה עם רכיבים מבוססי AI כחלק מהפתרון.",
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
    name: "Benefit Management System",
    period: "2024",
    desc: "מערכת לניהול הטבות עם צד שרת מאומת ב-Spring Boot וצד לקוח ב-Android, שמתחבר דרך Retrofit.",
    highlights: [
      "פיתוח REST APIs מאומתים ב-Spring Boot לניהול הטבות.",
      "פיתוח אפליקציית Android שצורכת APIs באמצעות Retrofit לזרימות משתמש מקצה לקצה.",
      "עבודה בצוות Agile/Scrum מבוסס ספרינטים ואריזת המערכת עם Docker.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "Android (Java)", "Retrofit", "H2", "Docker"],
    links: [
      { label: "Frontend Repo", href: "https://github.com/yahavLer/integrativeClientSide_findYourBenefit" },
      { label: "Backend Repo", href: "https://github.com/yahavLer/integrativeServerSide_findYourBenefit" },
    ],
  },
  {
    name: "Benefit Finder – אפליקציית Android",
    period: "2024",
    desc: "אפליקציית Android שמרכזת הטבות של כרטיסי אשראי ומועדוני לקוחות, משווה בין מבצעים ומראה מה הכי משתלם בכל רכישה.",
    highlights: [
      "תכנון חוויית משתמש להשוואת הטבות ולהצגת האפשרות הכי משתלמת.",
      "בניית מבנה גמיש שמאפשר להוסיף מקורות הטבה וקטגוריות חדשות בהמשך.",
    ],
    stack: ["Android SDK", "Java"],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer/AndroidApp_BenefitFinder" }],
    media: {
      images: [
        { src: "/images/projects/benefit-finder/1.png", alt: "מסך 1 של Benefit Finder" },
        { src: "/images/projects/benefit-finder/2.png", alt: "מסך 2 של Benefit Finder" },
        { src: "/images/projects/benefit-finder/3.png", alt: "מסך 3 של Benefit Finder" },
        { src: "/images/projects/benefit-finder/4.png", alt: "מסך 4 של Benefit Finder" },
      ],
    },
  },
  {
    name: "C++ Restaurant (פרויקט OOP)",
    period: "2024",
    desc: "פרויקט ב-C++ עם דגש על תכנון מונחה עצמים, סימולציית מסעדה ולוגיקה מבוססת מחלקות.",
    highlights: [
      "מימוש עקרונות OOP כמו encapsulation, inheritance ו-polymorphism.",
      "עבודה עם מבני נתונים, רכיבי C++ בסיסיים וזרימת תוכנית מסודרת.",
    ],
    stack: ["C++", "OOP", "STL", "Data Structures"],
    links: [{ label: "GitHub", href: "https://github.com/yahavLer/CPP_resturantPart2-GalYahavDiana" }],
  },
];

export const buildInPractice: string[] = [
  "פיתוח שירותי backend ב-Spring Boot",
  "תכנון וחיבור של REST APIs",
  "עבודה עם סכמות SQL וזרימות נתונים",
  "פיתוח מערכות מבוססות microservices",
  "הרצת סביבות פיתוח מקומיות עם Docker",
  "ניטור ותחקור תקלות בסביבות production",
];