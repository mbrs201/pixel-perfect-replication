import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";
export type L = Record<Lang, string>;

const dict = {
  nav: {
    about: { en: "About", fr: "À propos", ar: "عني" },
    roadmap: { en: "Roadmap", fr: "Parcours", ar: "المسار" },
    projects: { en: "Projects", fr: "Projets", ar: "المشاريع" },
    youtube: { en: "YouTube", fr: "YouTube", ar: "يوتيوب" },
    services: { en: "Services", fr: "Services", ar: "الخدمات" },
    skills: { en: "Skills", fr: "Compétences", ar: "المهارات" },
    experience: { en: "Experience", fr: "Expérience", ar: "الخبرة" },
    contact: { en: "Contact", fr: "Contact", ar: "تواصل" },
  },
  cv: { en: "Download CV", fr: "Télécharger le CV", ar: "تحميل السيرة الذاتية" },
  cvEn: { en: "CV (English)", fr: "CV (anglais)", ar: "السيرة (إنجليزية)" },
  cvFr: { en: "CV (French)", fr: "CV (français)", ar: "السيرة (فرنسية)" },
  contactMe: { en: "Contact me", fr: "Me contacter", ar: "تواصل معي" },
  theme: { en: "Toggle light / dark", fr: "Basculer clair / sombre", ar: "تبديل الوضع الفاتح / الداكن" },
  menu: { en: "Menu", fr: "Menu", ar: "القائمة" },
  hero: {
    badge: { en: "Open to PFE internship, freelance and collaborations", fr: "Ouvert à un stage PFE, au freelance et aux collaborations", ar: "متاح لتدريب PFE والعمل الحر والتعاون" },
    location: { en: "Fès, Morocco", fr: "Fès, Maroc", ar: "فاس، المغرب" },
    title: { en: "Software Engineer & Co-founder of eByte Software", fr: "Ingénieur logiciel & cofondateur d'eByte Software", ar: "مهندس برمجيات وشريك مؤسس لـ eByte Software" },
    sub: {
      en: "I build backend-heavy web, desktop and mobile products with ASP.NET Core, Laravel, React and Flutter, on SQL Server, PostgreSQL, MySQL and MongoDB.",
      fr: "Je construis des produits web, desktop et mobiles centrés sur le backend avec ASP.NET Core, Laravel, React et Flutter, sur SQL Server, PostgreSQL, MySQL et MongoDB.",
      ar: "أبني منتجات ويب وسطح مكتب وموبايل تعتمد بقوة على الواجهة الخلفية باستخدام ASP.NET Core وLaravel وReact وFlutter، مع SQL Server وPostgreSQL وMySQL وMongoDB.",
    },
    photoAlt: { en: "Portrait of Mohammed Bourass", fr: "Portrait de Mohammed Bourass", ar: "صورة محمد بوراس" },
  },
  about: {
    title: { en: "About me", fr: "À propos de moi", ar: "نبذة عني" },
    story: {
      en: "I entered ENSA in 2022, found the preparatory years, and chose to teach myself. I started with algorithms on paper, then C, C++, C#, databases, and finally real products. Today I build SaaS products for Moroccan businesses with eByte Software, and I share the journey on YouTube.",
      fr: "Je suis entré à l'ENSA en 2022, j'ai découvert les années préparatoires et j'ai choisi d'apprendre par moi-même. J'ai commencé par des algorithmes sur papier, puis le C, le C++, le C#, les bases de données, et enfin de vrais produits. Aujourd'hui, je construis des produits SaaS pour des entreprises marocaines avec eByte Software, et je partage mon parcours sur YouTube.",
      ar: "التحقت بـ ENSA سنة 2022، واكتشفت السنوات التحضيرية، فاخترت أن أتعلم بنفسي. بدأت بالخوارزميات على الورق، ثم C وC++ وC# وقواعد البيانات، وصولًا إلى منتجات حقيقية. اليوم أبني منتجات SaaS للشركات المغربية مع eByte Software، وأشارك رحلتي على يوتيوب.",
    },
    note: { en: "[PERSONAL_NOTE_OR_HOBBIES]", fr: "[PERSONAL_NOTE_OR_HOBBIES]", ar: "[PERSONAL_NOTE_OR_HOBBIES]" },
    s1v: { en: "3+ years", fr: "3+ ans", ar: "+3 سنوات" },
    s1: { en: "of self-driven learning", fr: "d'apprentissage autodidacte", ar: "من التعلم الذاتي" },
    s2v: { en: "4 domains", fr: "4 domaines", ar: "4 مجالات" },
    s2: { en: "healthcare, retail/POS, marketplace, restaurants", fr: "santé, retail/POS, marketplace, restauration", ar: "الصحة، البيع بالتجزئة/POS، المتاجر الإلكترونية، المطاعم" },
    s3v: { en: "EN · FR · AR", fr: "EN · FR · AR", ar: "EN · FR · AR" },
    s3: { en: "multilingual products", fr: "produits multilingues", ar: "منتجات متعددة اللغات" },
    s4v: { en: "[NUMBER]", fr: "[NUMBER]", ar: "[NUMBER]" },
    s4: { en: "[other real numbers]", fr: "[autres chiffres réels]", ar: "[أرقام حقيقية أخرى]" },
  },
  roadmap: {
    title: { en: "Roadmap", fr: "Parcours", ar: "المسار" },
    sub: { en: "From algorithms on paper to shipping SaaS.", fr: "Des algorithmes sur papier aux produits SaaS.", ar: "من الخوارزميات على الورق إلى إطلاق منتجات SaaS." },
    oldest: { en: "Oldest first", fr: "Plus ancien d'abord", ar: "الأقدم أولًا" },
    newest: { en: "Newest first", fr: "Plus récent d'abord", ar: "الأحدث أولًا" },
  },
  projects: {
    title: { en: "Featured projects", fr: "Projets phares", ar: "مشاريع مختارة" },
    sub: { en: "Real products I designed, built and shipped.", fr: "De vrais produits que j'ai conçus, développés et livrés.", ar: "منتجات حقيقية صممتها وبنيتها وأطلقتها." },
    details: { en: "View details", fr: "Voir les détails", ar: "عرض التفاصيل" },
    role: { en: "Role", fr: "Rôle", ar: "الدور" },
    features: { en: "Key features", fr: "Fonctionnalités clés", ar: "أهم الميزات" },
    links: { en: "Links", fr: "Liens", ar: "روابط" },
    close: { en: "Close", fr: "Fermer", ar: "إغلاق" },
    screenshot: { en: "[SCREENSHOT]", fr: "[SCREENSHOT]", ar: "[SCREENSHOT]" },
    more: { en: "More from GitHub", fr: "Plus sur GitHub", ar: "المزيد على GitHub" },
    viewAll: { en: "View all on GitHub", fr: "Tout voir sur GitHub", ar: "عرض الكل على GitHub" },
    mobile: { en: "Mobile", fr: "Mobile", ar: "موبايل" },
    desktop: { en: "Desktop", fr: "Desktop", ar: "سطح المكتب" },
    web: { en: "Web", fr: "Web", ar: "ويب" },
    practice: { en: "Practice", fr: "Pratique", ar: "تمارين" },
    early: { en: "Early web practice", fr: "Premiers exercices web", ar: "تمارين ويب مبكرة" },
  },
  yt: {
    title: { en: "From my YouTube channel", fr: "Sur ma chaîne YouTube", ar: "من قناتي على يوتيوب" },
    sub: {
      en: "Project walkthroughs, C# and SQL Server, building real applications, and my career journey.",
      fr: "Présentations de projets, C# et SQL Server, création d'applications réelles et mon parcours.",
      ar: "شروحات للمشاريع، C# وSQL Server، بناء تطبيقات حقيقية، ومشاركة مساري المهني.",
    },
    grid: { en: "Early builds & experiments", fr: "Premiers projets & expériences", ar: "مشاريع وتجارب مبكرة" },
    visit: { en: "Visit the channel", fr: "Voir la chaîne", ar: "زيارة القناة" },
    noVideo: { en: "[VIDEO_URL]", fr: "[VIDEO_URL]", ar: "[VIDEO_URL]" },
  },
  services: {
    title: { en: "What I can do", fr: "Ce que je peux faire", ar: "ما يمكنني تقديمه" },
    sub: { en: "For clients who need software that holds up in production.", fr: "Pour les clients qui ont besoin d'un logiciel solide en production.", ar: "للعملاء الذين يحتاجون برمجيات تصمد في بيئة الإنتاج." },
    work: { en: "Have a project in mind? Let's build it.", fr: "Un projet en tête ? Construisons-le.", ar: "لديك مشروع؟ لنبنه معًا." },
    workBtn: { en: "Work with me", fr: "Travailler avec moi", ar: "اعمل معي" },
  },
  skills: {
    title: { en: "Skills", fr: "Compétences", ar: "المهارات" },
    spoken: { en: "Spoken languages", fr: "Langues parlées", ar: "اللغات المحكية" },
  },
  exp: {
    title: { en: "Experience & education", fr: "Expérience & formation", ar: "الخبرة والتعليم" },
  },
  contact: {
    title: { en: "Let's talk", fr: "Discutons", ar: "لنتحدث" },
    sub: { en: "Internship offers, freelance projects or collaborations: I reply quickly.", fr: "Offres de stage, projets freelance ou collaborations : je réponds rapidement.", ar: "عروض التدريب أو مشاريع العمل الحر أو التعاون: أرد بسرعة." },
    name: { en: "Name", fr: "Nom", ar: "الاسم" },
    email: { en: "Email", fr: "E-mail", ar: "البريد الإلكتروني" },
    message: { en: "Message", fr: "Message", ar: "الرسالة" },
    send: { en: "Send message", fr: "Envoyer", ar: "إرسال" },
    emailMe: { en: "Email me", fr: "M'écrire", ar: "راسلني" },
  },
  footer: {
    built: { en: "Built in Fès, Morocco", fr: "Conçu à Fès, Maroc", ar: "صُنع في فاس، المغرب" },
    rights: { en: "All rights reserved.", fr: "Tous droits réservés.", ar: "جميع الحقوق محفوظة." },
  },
} as const;

type Dict = typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; d: Dict }>({
  lang: "en",
  setLang: () => {},
  d: dict,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr" || saved === "ar") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };
  return <Ctx.Provider value={{ lang, setLang, d: dict }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const { lang, setLang, d } = useContext(Ctx);
  const t = (l: L | { readonly en: string; readonly fr: string; readonly ar: string }) => l[lang];
  return { lang, setLang, d, t };
}
