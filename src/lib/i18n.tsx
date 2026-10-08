import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";
export type L = Record<Lang, string>;

const dict = {
  nav: {
    about: { en: "About", fr: "À propos", ar: "عني" },
    roadmap: { en: "Roadmap", fr: "Parcours", ar: "المسار" },
    projects: { en: "Projects", fr: "Projets", ar: "المشاريع" },
    services: { en: "Services", fr: "Services", ar: "الخدمات" },
    skills: { en: "Skills", fr: "Compétences", ar: "المهارات" },
    experience: { en: "Experience", fr: "Expérience", ar: "الخبرة" },
    contact: { en: "Contact", fr: "Contact", ar: "تواصل" },
  },
  contactMe: { en: "Let's talk", fr: "Discutons", ar: "لنتحدث" },
  theme: { en: "Toggle light / dark", fr: "Basculer clair / sombre", ar: "تبديل الوضع الفاتح / الداكن" },
  menu: { en: "Menu", fr: "Menu", ar: "القائمة" },
  hero: {
    badge: { en: "Open to PFE internship, freelance and collaborations", fr: "Ouvert à un stage PFE, au freelance et aux collaborations", ar: "متاح لتدريب PFE والعمل الحر والتعاون" },
    location: { en: "Fès, Morocco", fr: "Fès, Maroc", ar: "فاس، المغرب" },
    title: { en: "Computer Science Engineer (Génie Informatique) & Software Engineer", fr: "Ingénieur en génie informatique & ingénieur logiciel", ar: "مهندس في علوم الحاسوب ومهندس برمجيات" },
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
      en: "I didn’t choose the easy road. In 2022 I entered ENSA, and when I found out about the preparatory years, I decided to teach myself instead of waiting. I started with algorithms on paper, then moved to C, C++ and C#, then to databases, one concept and one small project at a time. Over time those small projects became real products.\n\nToday I build SaaS products for Moroccan businesses with eByte Software: restaurants, clinics, shops and marketplaces. I care about clean architecture and solid databases, and I like shipping things people use every day. I also share the journey on YouTube, because I learned from people who did the same, and I want to give that back.\n\nI’m looking for a PFE internship where I can learn from a strong team and bring my engineering skills to real problems.",
      fr: "Je n’ai pas choisi la voie la plus facile. En 2022, j’ai intégré l’ENSA et, en découvrant les années préparatoires, j’ai décidé d’apprendre par moi-même plutôt que d’attendre. J’ai commencé par les algorithmes sur papier, puis le C, le C++ et le C#, avant de passer aux bases de données, un concept et un petit projet à la fois. Avec le temps, ces petits projets sont devenus de vrais produits.\n\nAujourd’hui, je crée avec eByte Software des produits SaaS pour les entreprises marocaines : restaurants, cabinets médicaux, commerces et marketplaces. J’accorde de l’importance à une architecture propre et à des bases de données solides, et j’aime livrer des outils que les gens utilisent chaque jour. Je partage aussi mon parcours sur YouTube : j’ai appris grâce à des personnes qui ont suivi la même voie, et j’aimerais à mon tour transmettre ce que j’ai appris.\n\nJe recherche un stage PFE où je pourrai apprendre auprès d’une équipe expérimentée et mettre mes compétences d’ingénieur au service de problèmes concrets.",
      ar: "لم أختر الطريق السهل. التحقت بـ ENSA سنة 2022، وعندما تعرفت على السنوات التحضيرية قررت أن أعتمد على التعلم الذاتي بدلًا من الانتظار. بدأت بالخوارزميات على الورق، ثم انتقلت إلى C وC++ وC#، وبعدها إلى قواعد البيانات، مفهومًا ومشروعًا صغيرًا في كل مرة. ومع الوقت تحولت تلك المشاريع الصغيرة إلى منتجات حقيقية.\n\nأبني اليوم مع eByte Software منتجات SaaS للشركات المغربية: المطاعم والعيادات والمتاجر والأسواق الإلكترونية. أهتم بالهندسة البرمجية الواضحة وقواعد البيانات المتينة، وأحب إطلاق أدوات يستخدمها الناس كل يوم. وأشارك رحلتي على يوتيوب، لأنني تعلمت من أشخاص خاضوا التجربة نفسها، وأرغب في رد الجميل ومشاركة ما تعلمته.\n\nأبحث عن تدريب PFE أتعلم فيه من فريق متمرس، وأسخّر مهاراتي الهندسية لحل مشكلات واقعية.",
    },
    note: {
      en: "Fun fact: I built my first game, Adams-Gam, after seeing a game on my little cousin’s phone and thinking: I can make this.",
      fr: "Anecdote : j’ai créé mon premier jeu, Adams-Gam, après en avoir vu un sur le téléphone de mon petit cousin et m’être dit : « Je peux le faire. »",
      ar: "معلومة طريفة: صنعت لعبتي الأولى Adams-Gam بعدما رأيت لعبة على هاتف ابن عمي الصغير وفكرت: يمكنني صنع واحدة مثلها.",
    },
    s1v: { en: "3+ years", fr: "3+ ans", ar: "+3 سنوات" },
    s1: { en: "of self-driven learning", fr: "d'apprentissage autodidacte", ar: "من التعلم الذاتي" },
    s2v: { en: "4 domains", fr: "4 domaines", ar: "4 مجالات" },
    s2: { en: "healthcare, retail/POS, marketplace, restaurants", fr: "santé, retail/POS, marketplace, restauration", ar: "الصحة، البيع بالتجزئة/POS، المتاجر الإلكترونية، المطاعم" },
    s3v: { en: "EN · FR · AR", fr: "EN · FR · AR", ar: "EN · FR · AR" },
    s3: { en: "multilingual products", fr: "produits multilingues", ar: "منتجات متعددة اللغات" },
    s4v: { en: "1+ year", fr: "Plus d'un an", ar: "أكثر من سنة" },
    s4: { en: "building real-world products", fr: "à créer des produits concrets", ar: "من العمل على منتجات حقيقية" },
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
  services: {
    title: { en: "What I can do", fr: "Ce que je peux faire", ar: "ما يمكنني تقديمه" },
    sub: { en: "For clients who need software that holds up in production.", fr: "Pour les clients qui ont besoin d'un logiciel solide en production.", ar: "للعملاء الذين يحتاجون برمجيات تصمد في بيئة الإنتاج." },
    work: { en: "Have a project in mind? Let's build it.", fr: "Un projet en tête ? Construisons-le.", ar: "لديك مشروع؟ لنبنه معًا." },
    workBtn: { en: "Let's talk", fr: "Discutons", ar: "لنتحدث" },
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
