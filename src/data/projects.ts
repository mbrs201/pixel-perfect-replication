// Single editable source for projects, repos, videos, timeline, services, skills.
import type { L } from "@/lib/i18n";

const same = (s: string): L => ({ en: s, fr: s, ar: s });
export const GH = "https://github.com/mohammedbourass-youssef";
export const YT = "https://www.youtube.com/@mohammedBourassProjects";

export type Project = {
  name: string;
  pitch: L;
  role: L;
  tags: string[];
  features: L[];
  links: { label: string; url: string }[];
  screenshot?: string; // [SCREENSHOT]
};

const ebyte: L = { en: "Co-founder, backend engineer", fr: "Cofondateur, ingénieur backend", ar: "شريك مؤسس، مهندس واجهة خلفية" };
const solo: L = { en: "Full-stack developer", fr: "Développeur full-stack", ar: "مطور شامل" };
const tbd = same("[ADD]");

export const featured: Project[] = [
  {
    name: "Smart Menu NFC",
    pitch: { en: "Multi-tenant SaaS for restaurants, by eByte Software.", fr: "SaaS multi-tenant pour restaurants, par eByte Software.", ar: "منصة SaaS متعددة المستأجرين للمطاعم، من eByte Software." },
    role: ebyte,
    tags: [".NET 8", "Multi-tenant", "SaaS"],
    features: [
      { en: ".NET 8 backend", fr: "Backend .NET 8", ar: "واجهة خلفية بـ .NET 8" },
      { en: "Tenant onboarding", fr: "Intégration des clients (tenants)", ar: "تسجيل المستأجرين" },
      { en: "Infrastructure", fr: "Infrastructure", ar: "البنية التحتية" },
    ],
    links: [{ label: "[LIVE_URL]", url: "" }],
  },
  {
    name: "POS eByte",
    pitch: { en: "Bilingual FR/AR desktop point-of-sale for Moroccan retail.", fr: "Caisse desktop bilingue FR/AR pour le commerce marocain.", ar: "نظام نقاط بيع مكتبي ثنائي اللغة FR/AR للتجارة المغربية." },
    role: ebyte,
    tags: ["WPF", "C#", "Localization"],
    features: [
      { en: "Modular design", fr: "Conception modulaire", ar: "تصميم معياري" },
      { en: "FR/AR localization", fr: "Localisation FR/AR", ar: "دعم الفرنسية والعربية" },
      { en: "Licensing", fr: "Gestion des licences", ar: "نظام التراخيص" },
    ],
    links: [{ label: "[DEMO_URL]", url: "" }],
  },
  {
    name: "MEDIBILL PRO (Doctor WebAPI)",
    pitch: { en: "Medical application with real-time features.", fr: "Application médicale avec fonctionnalités temps réel.", ar: "تطبيق طبي بميزات فورية." },
    role: solo,
    tags: ["ASP.NET Core", "SQL Server", "SignalR", "React"],
    features: [tbd],
    links: [{ label: "[GITHUB_URL]", url: "" }],
  },
  {
    name: "Connectia",
    pitch: { en: "Multi-vendor B2C marketplace.", fr: "Marketplace B2C multi-vendeurs.", ar: "متجر إلكتروني B2C متعدد البائعين." },
    role: solo,
    tags: ["Laravel", "Flutter", "MySQL"],
    features: [
      { en: "Laravel backend", fr: "Backend Laravel", ar: "واجهة خلفية Laravel" },
      { en: "Flutter mobile app", fr: "Application mobile Flutter", ar: "تطبيق Flutter" },
      { en: "MySQL schema design", fr: "Conception du schéma MySQL", ar: "تصميم مخطط MySQL" },
    ],
    links: [{ label: "[LINK]", url: "" }],
  },
  {
    name: "Gibs (jibs.ma)",
    pitch: { en: "Full-stack app deployed on a Linux VPS.", fr: "Application full-stack déployée sur un VPS Linux.", ar: "تطبيق شامل منشور على خادم Linux VPS." },
    role: solo,
    tags: ["ASP.NET Core 8", "React", "Docker", "Observability"],
    features: [
      { en: "Dockerized deployment", fr: "Déploiement Docker", ar: "نشر عبر Docker" },
      { en: "Observability stack", fr: "Stack d'observabilité", ar: "منظومة مراقبة" },
      { en: "Linux VPS hosting", fr: "Hébergement VPS Linux", ar: "استضافة Linux VPS" },
    ],
    links: [{ label: "jibs.ma", url: "https://jibs.ma" }],
  },
  {
    name: "Mazzad app",
    pitch: { en: "Flutter marketplace app, started 04/2026. [CONFIRM and DESCRIBE]", fr: "App marketplace Flutter, démarrée en 04/2026. [CONFIRM and DESCRIBE]", ar: "تطبيق متجر بـ Flutter، بدأ في 04/2026. [CONFIRM and DESCRIBE]" },
    role: solo,
    tags: ["Flutter", "Dart"],
    features: [tbd],
    links: [{ label: "GitHub", url: `${GH}/Maz-Add_Proj` }],
  },
  {
    name: "Restaurant ERP",
    pitch: { en: "Full restaurant-management ERP, built in 40 days (ENSA internship).", fr: "ERP complet de gestion de restaurant, réalisé en 40 jours (stage ENSA).", ar: "نظام ERP كامل لإدارة المطاعم، أُنجز في 40 يومًا (تدريب ENSA)." },
    role: solo,
    tags: ["Backend", "React", "RBAC"],
    features: [
      { en: "Role-based access", fr: "Gestion des rôles", ar: "صلاحيات حسب الأدوار" },
      { en: "Backend API", fr: "API backend", ar: "واجهة برمجية خلفية" },
      { en: "React client", fr: "Client React", ar: "واجهة React" },
    ],
    links: [],
  },
  {
    name: "Rif Hotel Management System",
    pitch: { en: "C# desktop hotel management app.", fr: "Application desktop C# de gestion hôtelière.", ar: "تطبيق مكتبي بـ C# لإدارة الفنادق." },
    role: solo,
    tags: ["C#", "WinForms", "SQL"],
    features: [same("[ADD: features and database]")],
    links: [{ label: "GitHub", url: `${GH}/Rif-Hotel-Management-System` }],
  },
  {
    name: "eByte Software website",
    pitch: { en: "Trilingual company website.", fr: "Site d'entreprise trilingue.", ar: "موقع الشركة بثلاث لغات." },
    role: ebyte,
    tags: ["TanStack Start", "React", "i18n"],
    features: [{ en: "EN / FR / AR", fr: "EN / FR / AR", ar: "EN / FR / AR" }],
    links: [{ label: "[LIVE_URL]", url: "" }],
  },
];

export type Repo = { name: string; lang: string; desc: L };
export const repos: Record<"mobile" | "desktop" | "web" | "practice", Repo[]> = {
  mobile: [
    { name: "Hanotk", lang: "Dart", desc: { en: "Mobile app for store clients to shop online from their phone.", fr: "App mobile pour que les clients d'un magasin achètent en ligne.", ar: "تطبيق يتيح لعملاء المتجر التسوق من هواتفهم." } },
    { name: "ManageMate", lang: "Dart", desc: { en: "Team management: tasks, progress, real-time collaboration, smart notifications.", fr: "Gestion d'équipe : tâches, suivi, collaboration temps réel, notifications.", ar: "إدارة الفرق: المهام والتقدم والتعاون الفوري والإشعارات الذكية." } },
    { name: "QuickNotes", lang: "Dart", desc: { en: "Fast, clean note-taking app with real-time updates.", fr: "Prise de notes rapide et épurée, mises à jour en temps réel.", ar: "تطبيق ملاحظات سريع وأنيق بتحديثات فورية." } },
    { name: "Bookly_App", lang: "Dart", desc: same("[DESCRIBE]") },
    { name: "chatApp", lang: "Dart", desc: same("[DESCRIBE]") },
    { name: "Maz-Add_Proj", lang: "Dart", desc: { en: "Marketplace app (Mazzad).", fr: "App marketplace (Mazzad).", ar: "تطبيق متجر (مزاد)." } },
  ],
  desktop: [
    { name: "QURAAN-PLAYER", lang: "C#", desc: { en: "Quran player app.", fr: "Lecteur de Coran.", ar: "تطبيق مشغل القرآن." } },
    { name: "VisionGuard", lang: "C#", desc: same("[DESCRIBE]") },
  ],
  web: [
    { name: "Snack-X-Menu-Admin", lang: "TypeScript", desc: { en: "Admin dashboard for a snack menu.", fr: "Tableau de bord admin pour un menu de snack.", ar: "لوحة تحكم لقائمة مطعم وجبات خفيفة." } },
    { name: "vendor-haven-04", lang: "TypeScript", desc: same("[DESCRIBE: marketplace / vendor web project]") },
    { name: "ebyte-vision-forge", lang: "TypeScript", desc: same("[DESCRIBE: eByte web project]") },
    { name: "eByte_Software", lang: "CSS", desc: { en: "Early eByte web project.", fr: "Premier projet web eByte.", ar: "مشروع ويب مبكر لـ eByte." } },
  ],
  practice: [
    { name: "MiniPortfolio", lang: "HTML", desc: same("") },
    { name: "MyFirstWebProject_SCESSORS_ROCK_PAPER", lang: "HTML", desc: same("") },
    { name: "iphone-marketing-sells", lang: "CSS", desc: same("") },
  ],
};

export const videos: { title: L; id?: string }[] = [
  { title: { en: "Adams-Gam (my own game)", fr: "Adams-Gam (mon propre jeu)", ar: "Adams-Gam (لعبتي الخاصة)" }, id: "3fZsNSxJ6xM" },
  { title: same("Flappy Bird"), id: "V23unpcyDY8" },
  { title: { en: "Memory Game", fr: "Jeu de mémoire", ar: "لعبة الذاكرة" }, id: "UQdkF2J5DSc" },
  { title: { en: "Hotel Management (C# + DB)", fr: "Gestion hôtelière (C# + BD)", ar: "إدارة فندق (C# + قاعدة بيانات)" }, id: "8EpKYSu8Wtc" },
  { title: { en: "Airport Management System", fr: "Gestion d'aéroport", ar: "نظام إدارة المطار" }, id: "rftQBow6OWc" },
  { title: { en: "Bank & ATM console systems (C++)", fr: "Systèmes Banque & ATM console (C++)", ar: "أنظمة البنك والصراف (C++)" } },
];

export const timeline: { date: L; title: L; text?: L }[] = [
  { date: same("2022"), title: { en: "Baccalaureate", fr: "Baccalauréat", ar: "البكالوريا" } },
  { date: same("09/2022"), title: { en: "Enters ENSA", fr: "Entrée à l'ENSA", ar: "الالتحاق بـ ENSA" } },
  { date: { en: "Late 2022", fr: "Fin 2022", ar: "أواخر 2022" }, title: { en: "Self-learning begins", fr: "Début de l'autoformation", ar: "بداية التعلم الذاتي" }, text: { en: "Discovers the preparatory years; starts with algorithms on paper.", fr: "Découvre les années préparatoires ; commence par des algorithmes sur papier.", ar: "اكتشاف السنوات التحضيرية؛ البدء بالخوارزميات على الورق." } },
  { date: same("01/2023"), title: { en: "C basics", fr: "Bases du C", ar: "أساسيات C" }, text: { en: "Loops, conditions, small exercises like drawing triangles, via YouTube.", fr: "Boucles, conditions, petits exercices comme dessiner des triangles, via YouTube.", ar: "الحلقات والشروط وتمارين صغيرة مثل رسم المثلثات عبر يوتيوب." } },
  { date: same("03/2023"), title: { en: "A real roadmap", fr: "Une vraie feuille de route", ar: "خارطة طريق حقيقية" }, text: { en: "Follows Mohammed Abu-Hadhoud's roadmap, starting with algorithms.", fr: "Suit la roadmap de Mohammed Abu-Hadhoud, en commençant par les algorithmes.", ar: "اتباع خارطة طريق محمد أبو هدهود بدءًا بالخوارزميات." } },
  { date: same("2023"), title: { en: "C++ deep dive", fr: "Immersion C++", ar: "التعمق في C++" }, text: { en: "13 courses (OOP, algorithms, problem solving). Console Bank & ATM systems with file persistence.", fr: "13 cours (POO, algorithmes, résolution de problèmes). Systèmes Banque & ATM en console avec fichiers.", ar: "13 دورة (البرمجة الكائنية، الخوارزميات، حل المشكلات). أنظمة بنك وصراف مع حفظ في الملفات." } },
  { date: same("06/2024"), title: { en: "C# and databases", fr: "C# et bases de données", ar: "C# وقواعد البيانات" }, text: { en: "Console, WinForms, OOP, then ERD, SQL and C# + database apps.", fr: "Console, WinForms, POO, puis ERD, SQL et applications C# + BD.", ar: "الكونسول وWinForms والبرمجة الكائنية، ثم ERD وSQL وتطبيقات C# مع قواعد البيانات." } },
  { date: { en: "Coding for fun", fr: "Pour le plaisir", ar: "برمجة للمتعة" }, title: { en: "Games & management apps", fr: "Jeux & applis de gestion", ar: "ألعاب وتطبيقات إدارة" }, text: same("Adams-Gam, Flappy Bird, Memory Game, Hotel Management, Airport Management.") },
  { date: same("04/2025"), title: { en: "Starts freelancing", fr: "Début du freelance", ar: "بداية العمل الحر" }, text: { en: "Opens a Mostaql account.", fr: "Ouvre un compte Mostaql.", ar: "فتح حساب على مستقل." } },
  { date: same("06/2025"), title: { en: "ENSA initiation internship", fr: "Stage d'initiation ENSA", ar: "تدريب استكشافي في ENSA" }, text: { en: "Full restaurant-management ERP (roles, backend, React client) in 40 days.", fr: "ERP complet de gestion de restaurant (rôles, backend, client React) en 40 jours.", ar: "نظام ERP كامل لإدارة المطاعم (أدوار، واجهة خلفية، React) في 40 يومًا." } },
  { date: same("08/2025"), title: { en: "First freelance app", fr: "Première appli freelance", ar: "أول تطبيق حر" }, text: { en: "For OAPAM.", fr: "Pour OAPAM.", ar: "لصالح OAPAM." } },
  { date: same("2025"), title: { en: "JWT, claims & migration", fr: "JWT, claims & migration", ar: "JWT والصلاحيات والترحيل" }, text: { en: "Migration / ADO.NET project with Teltra Connecting Things.", fr: "Projet de migration / ADO.NET avec Teltra Connecting Things.", ar: "مشروع ترحيل / ADO.NET مع Teltra Connecting Things." } },
  { date: { en: "22 July [YEAR]", fr: "22 juillet [YEAR]", ar: "22 يوليوز [YEAR]" }, title: { en: "Starts Flutter", fr: "Début de Flutter", ar: "بداية Flutter" } },
  { date: same("12/2025"), title: { en: "Backend engineer at Teltra", fr: "Ingénieur backend chez Teltra", ar: "مهندس واجهة خلفية في Teltra" }, text: { en: "Teltra Connecting Things, until 06/2026.", fr: "Teltra Connecting Things, jusqu'en 06/2026.", ar: "Teltra Connecting Things حتى 06/2026." } },
  { date: same("04/2026"), title: { en: "Starts the Mazzad app", fr: "Lancement de l'app Mazzad", ar: "بدء تطبيق مزاد" } },
  { date: same("06/2026"), title: { en: "Medical practice project", fr: "Projet pour un cabinet médical", ar: "مشروع لعيادة طبية" }, text: { en: "Freelance project for Dr Asmae Ghellab's practice.", fr: "Projet freelance pour le cabinet du Dr Asmae Ghellab.", ar: "مشروع حر لعيادة الدكتورة أسماء غلاب." } },
  { date: same("07/2026"), title: { en: "PFA with Collabors Impact", fr: "PFA avec Collabors Impact", ar: "مشروع PFA مع Collabors Impact" } },
  { date: same("08/2026"), title: { en: "Launches eByte Software", fr: "Lancement d'eByte Software", ar: "إطلاق eByte Software" }, text: { en: "Co-founded with Hamza Kherazi.", fr: "Cofondée avec Hamza Kherazi.", ar: "بالشراكة مع حمزة خرازي." } },
  { date: same("09/2026"), title: { en: "Learning DevOps", fr: "Apprentissage DevOps", ar: "تعلم DevOps" } },
  { date: { en: "Now", fr: "Maintenant", ar: "الآن" }, title: { en: "Building SaaS products", fr: "Construction de produits SaaS", ar: "بناء منتجات SaaS" } },
  { date: { en: "Next", fr: "Ensuite", ar: "التالي" }, title: { en: "PFE internship", fr: "Stage PFE", ar: "تدريب PFE" } },
];

export const services: { title: L; outcome: L; stack: string }[] = [
  { title: { en: "Web apps and APIs", fr: "Applications web et API", ar: "تطبيقات الويب والواجهات البرمجية" }, outcome: { en: "A reliable web product and API your team can grow.", fr: "Un produit web fiable et une API évolutive.", ar: "منتج ويب وواجهة برمجية موثوقة قابلة للتوسع." }, stack: "ASP.NET Core · Laravel · React/TypeScript" },
  { title: { en: "Desktop software", fr: "Logiciels desktop", ar: "برمجيات سطح المكتب" }, outcome: { en: "Fast Windows software that works offline at the counter.", fr: "Un logiciel Windows rapide, utilisable hors ligne.", ar: "برنامج ويندوز سريع يعمل دون اتصال." }, stack: "WPF · WinForms · ADO.NET" },
  { title: { en: "Mobile apps", fr: "Applications mobiles", ar: "تطبيقات الموبايل" }, outcome: { en: "One codebase for Android and iOS.", fr: "Un seul code pour Android et iOS.", ar: "شيفرة واحدة لأندرويد وiOS." }, stack: "Flutter · Dart" },
  { title: { en: "Database consulting", fr: "Conseil en bases de données", ar: "استشارات قواعد البيانات" }, outcome: { en: "Clean schemas and faster queries.", fr: "Des schémas propres et des requêtes plus rapides.", ar: "مخططات نظيفة واستعلامات أسرع." }, stack: "ERD/UML · SQL DML/DDL · Optimization · Migration · Replication" },
  { title: { en: "Backend architecture", fr: "Architecture backend", ar: "هندسة الواجهة الخلفية" }, outcome: { en: "Systems designed for many tenants, roles and real-time.", fr: "Des systèmes pensés pour le multi-tenant, les rôles et le temps réel.", ar: "أنظمة مصممة لتعدد المستأجرين والأدوار والوقت الفعلي." }, stack: "Multi-tenant · JWT/Keycloak · Quartz · SignalR" },
  { title: { en: "Deployment and observability", fr: "Déploiement et observabilité", ar: "النشر والمراقبة" }, outcome: { en: "Ship to production and see what's happening.", fr: "Mettre en production et voir ce qui se passe.", ar: "نشر في الإنتاج ورؤية ما يحدث." }, stack: "Docker · Linux VPS · IIS · Grafana · Prometheus · Seq · Serilog" },
];

export const skills: { group: L; items: string[]; highlight?: string[] }[] = [
  { group: { en: "Backend", fr: "Backend", ar: "الواجهة الخلفية" }, items: ["C# / .NET Core", "Laravel (PHP)", "Python", "SignalR", "Quartz"] },
  { group: { en: "Frontend, mobile & desktop", fr: "Frontend, mobile & desktop", ar: "الواجهة الأمامية والموبايل وسطح المكتب" }, items: ["Flutter / Dart", "React", "TypeScript", "TanStack Start", "WPF", "WinForms"], highlight: ["Flutter / Dart"] },
  { group: { en: "Databases (SQL)", fr: "Bases de données (SQL)", ar: "قواعد البيانات (SQL)" }, items: ["SQL Server", "Oracle", "MySQL", "PostgreSQL", "SQLite", "DML", "DDL", "Stored procedures"] },
  { group: { en: "Databases (NoSQL)", fr: "Bases de données (NoSQL)", ar: "قواعد البيانات (NoSQL)" }, items: ["MongoDB", "Neo4j", "Cassandra"] },
  { group: { en: "Architecture & design", fr: "Architecture & conception", ar: "الهندسة والتصميم" }, items: ["System design", "Replication", "Scaling", "UML", "ERD", "DAL/BL patterns"] },
  { group: { en: "DevOps & observability", fr: "DevOps & observabilité", ar: "DevOps والمراقبة" }, items: ["Docker", "Linux VPS", "IIS", "Grafana", "Prometheus", "Seq", "Serilog"] },
  { group: { en: "Tools", fr: "Outils", ar: "الأدوات" }, items: ["Postman", "Azure", "Git", "GitHub"] },
  { group: { en: "Languages", fr: "Langages", ar: "لغات البرمجة" }, items: ["C", "C++", "C#", "PHP", "Python", "TypeScript", "Dart", "SQL"] },
];

export const spoken = same("Arabic [LEVEL] · French [LEVEL] · English [LEVEL]");

export const experience: { title: L; org: string; date: L; text?: L }[] = [
  { title: { en: "Co-founder & Software Engineer", fr: "Cofondateur & ingénieur logiciel", ar: "شريك مؤسس ومهندس برمجيات" }, org: "eByte Software", date: { en: "08/2026 – now", fr: "08/2026 – aujourd'hui", ar: "08/2026 – الآن" } },
  { title: { en: "Backend Developer", fr: "Développeur backend", ar: "مطور واجهة خلفية" }, org: "Teltra Connecting Things", date: same("12/2025 – 06/2026") },
  { title: { en: "Freelance developer", fr: "Développeur freelance", ar: "مطور مستقل" }, org: "Workana · Mostaql", date: { en: "2025 – now", fr: "2025 – aujourd'hui", ar: "2025 – الآن" }, text: { en: "Including OAPAM and Dr Asmae Ghellab's practice.", fr: "Dont OAPAM et le cabinet du Dr Asmae Ghellab.", ar: "من بينها OAPAM وعيادة الدكتورة أسماء غلاب." } },
  { title: same("PFA"), org: "Collabors Impact", date: same("07/2026") },
  { title: { en: "Computer Science, Year 2 of 3", fr: "Génie informatique, 2e année sur 3", ar: "هندسة الإعلاميات، السنة 2 من 3" }, org: "ENSAF", date: { en: "Preparatory cycle from 09/2022", fr: "Cycle préparatoire depuis 09/2022", ar: "السلك التحضيري منذ 09/2022" } },
];

export const socials = {
  telegram: "https://t.me/mb0629",
  whatsapp: "", // [PHONE]
  linkedin: "https://www.linkedin.com/in/mohammed-bourass-39538a293/",
  github: GH,
  youtube: YT,
  workana: "", // [WORKANA_URL]
  mostaql: "", // [MOSTAQL_URL]
};
// Email is split to avoid appearing as plain text in the page source.
export const emailParts = ["srx.mbrs2004", "gmail.com"];
export const PHOTO_URL = ""; // [PHOTO_URL]
