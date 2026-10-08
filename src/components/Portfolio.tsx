import { useEffect, useState, type ReactNode } from "react";
import { useI18n, type Lang } from "@/lib/i18n";
import {
  featured, repos, timeline, services, skills, spoken, experience, socials, emailParts, PHOTO_URL, GH, YT,
} from "@/data/projects";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

const btn = "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-primary/85`;
const btnGhost = `${btn} border border-border bg-card/40 text-foreground hover:border-primary/50 hover:text-primary`;
const tag = "rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground";
const emailAddress = emailParts.join("@");
const gmailComposeUrl = (subject: string, body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

function Section({ id, title, sub, children }: { id: string; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28" aria-labelledby={`${id}-h`}>
      <div className="reveal mb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">// {id}</p>
        <h2 id={`${id}-h`} className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
        {sub && <p className="mt-3 max-w-2xl text-muted-foreground">{sub}</p>}
      </div>
      {children}
    </section>
  );
}

function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="flex rounded-lg border border-border p-0.5 font-mono text-xs" role="group" aria-label="Language">
      {(["en", "fr", "ar"] as Lang[]).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`rounded-md px-2 py-1 uppercase transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
          {l}
        </button>
      ))}
    </div>
  );
}

function ThemeToggle() {
  const { d, t } = useI18n();
  const [light, setLight] = useState(false);
  useEffect(() => { setLight(localStorage.getItem("theme") === "light"); }, []);
  useEffect(() => { document.documentElement.classList.toggle("light", light); }, [light]);
  return (
    <button aria-label={t(d.theme)} title={t(d.theme)}
      onClick={() => { const n = !light; setLight(n); localStorage.setItem("theme", n ? "light" : "dark"); }}
      className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground">
      {light ? "☾" : "☀"}
    </button>
  );
}

function Nav() {
  const { d, t } = useI18n();
  const [open, setOpen] = useState(false);
  const keys = Object.keys(d.nav) as (keyof typeof d.nav)[];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="font-mono text-sm font-bold">mb<span className="text-primary">.</span>dev</a>
        <ul className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
          {keys.map((k) => <li key={k}><a href={`#${k}`} className="hover:text-primary">{t(d.nav[k])}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeToggle />
          <button className="rounded-lg border border-border p-2 lg:hidden" aria-label={t(d.menu)} aria-expanded={open} onClick={() => setOpen(!open)}>≡</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-border px-5 py-3 lg:hidden">
          {keys.map((k) => <li key={k}><a onClick={() => setOpen(false)} href={`#${k}`} className="block py-2 text-muted-foreground hover:text-primary">{t(d.nav[k])}</a></li>)}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  const { d, t } = useI18n();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-20 md:grid-cols-[1.4fr_1fr] md:pt-32">
        <div className="reveal">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex max-w-full items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold leading-snug text-foreground shadow-[0_0_30px_-12px_var(--glow)]">
              <span className="relative flex h-3 w-3 shrink-0" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              {t(d.hero.badge)}
            </span>
            <span className="rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs text-muted-foreground">◉ {t(d.hero.location)}</span>
          </div>
          <p className="mt-8 font-mono text-sm text-primary">Mohammed Bourass</p>
          <h1 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{t(d.hero.title)}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t(d.hero.sub)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={gmailComposeUrl("Let's talk about a project")} target="_blank" rel="noreferrer" className={btnGhost}>{t(d.contactMe)}</a>
          </div>
        </div>
        <div className="reveal mx-auto w-full max-w-xs">
          <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_80px_-20px_var(--glow)]">
            {PHOTO_URL ? <img src={PHOTO_URL} alt={t(d.hero.photoAlt)} className="h-full w-full object-cover" />
              : <div className="flex h-full items-center justify-center font-mono text-sm text-muted-foreground" role="img" aria-label={t(d.hero.photoAlt)}>[PHOTO_URL]</div>}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { d, t } = useI18n();
  const a = d.about;
  const stats = [[a.s1v, a.s1], [a.s2v, a.s2], [a.s3v, a.s3], [a.s4v, a.s4]] as const;
  return (
    <Section id="about" title={t(a.title)}>
      <p className="reveal max-w-3xl whitespace-pre-line text-lg leading-relaxed">{t(a.story)}</p>
      <p className="reveal mt-4 font-mono text-sm text-muted-foreground">{t(a.note)}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([v, l], i) => (
          <div key={i} className="reveal card-lift rounded-xl border border-border bg-card p-5">
            <div className="text-2xl font-bold text-primary">{t(v)}</div>
            <div className="mt-1 text-sm text-muted-foreground">{t(l)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Roadmap() {
  const { d, t } = useI18n();
  const [newest, setNewest] = useState(false);
  const items = newest ? [...timeline].reverse() : timeline;
  return (
    <Section id="roadmap" title={t(d.roadmap.title)} sub={t(d.roadmap.sub)}>
      <div className="mb-8 inline-flex rounded-lg border border-border p-0.5 text-sm" role="group">
        {[false, true].map((n) => (
          <button key={String(n)} onClick={() => setNewest(n)} aria-pressed={newest === n}
            className={`rounded-md px-3 py-1.5 ${newest === n ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
            {t(n ? d.roadmap.newest : d.roadmap.oldest)}
          </button>
        ))}
      </div>
      <ol className="relative border-s border-border ps-8">
        {items.map((it, i) => (
          <li key={t(it.date) + t(it.title)} className="reveal relative pb-8 last:pb-0">
            <span className={`absolute -start-[2.4rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-background ${i === (newest ? 0 : items.length - 1) ? "bg-primary shadow-[0_0_16px_var(--glow)]" : "bg-primary/60"}`} />
            <time className="font-mono text-xs text-primary">{t(it.date)}</time>
            <h3 className="mt-1 font-semibold">{t(it.title)}</h3>
            {it.text && <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{t(it.text)}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Projects() {
  const { d, t } = useI18n();
  const [tab, setTab] = useState<keyof typeof repos>("mobile");
  return (
    <Section id="projects" title={t(d.projects.title)} sub={t(d.projects.sub)}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <article key={p.name}
            className="reveal card-lift flex flex-col rounded-xl border border-border bg-card p-5">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{t(p.pitch)}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((x) => <span key={x} className={tag}>{x}</span>)}</div>
          </article>
        ))}
      </div>

      <div className="mt-20">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <h3 className="text-2xl font-bold">{t(d.projects.more)}</h3>
          <a href={GH} target="_blank" rel="noreferrer" className={btnGhost}>{t(d.projects.viewAll)} ↗</a>
        </div>
        <div className="mt-6 flex flex-wrap gap-2" role="tablist">
          {(Object.keys(repos) as (keyof typeof repos)[]).map((k) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}
              className={`rounded-lg px-4 py-2 text-sm ${tab === k ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`}>
              {t(d.projects[k])} <span className="font-mono text-xs opacity-70">{repos[k].length}</span>
            </button>
          ))}
        </div>
        {tab === "practice" ? (
          <details className="mt-6 rounded-xl border border-border bg-card p-5">
            <summary className="cursor-pointer font-medium">{t(d.projects.early)}</summary>
            <ul className="mt-3 space-y-2">{repos.practice.map((r) => (
              <li key={r.name}><a href={`${GH}/${r.name}`} target="_blank" rel="noreferrer" className="font-mono text-sm text-muted-foreground hover:text-primary">{r.name} · {r.lang} ↗</a></li>
            ))}</ul>
          </details>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos[tab].map((r) => (
              <a key={r.name} href={`${GH}/${r.name}`} target="_blank" rel="noreferrer" className="card-lift rounded-xl border border-border bg-card p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold">{r.name}</span>
                  <span className={tag}>{r.lang}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t(r.desc)}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

function Services() {
  const { d, t } = useI18n();
  return (
    <Section id="services" title={t(d.services.title)} sub={t(d.services.sub)}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="reveal card-lift rounded-xl border border-border bg-card p-6">
            <span className="font-mono text-xs text-primary">0{i + 1}</span>
            <h3 className="mt-2 text-lg font-semibold">{t(s.title)}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t(s.outcome)}</p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{s.stack}</p>
          </div>
        ))}
      </div>
      <div className="reveal mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-primary/30 bg-accent/40 p-6">
        <p className="text-lg font-medium">{t(d.services.work)}</p>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <a href={socials.workana} target="_blank" rel="noreferrer" className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline">Workana ↗</a>
            <span aria-hidden="true" className="text-border">·</span>
            <a href={socials.mostaql} target="_blank" rel="noreferrer" className="text-muted-foreground underline-offset-4 hover:text-primary hover:underline">Mostaql ↗</a>
          </div>
          <a href={gmailComposeUrl("Let's talk about a project")} target="_blank" rel="noreferrer" className={btnPrimary}>{t(d.services.workBtn)}</a>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  const { d, t } = useI18n();
  return (
    <Section id="skills" title={t(d.skills.title)}>
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((g, i) => (
          <div key={i} className="reveal rounded-xl border border-border bg-card p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary">{t(g.group)}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((x) => (
                <span key={x} className={g.highlight?.includes(x)
                  ? "rounded-md border border-primary bg-primary/15 px-2.5 py-1 font-mono text-sm font-semibold text-primary"
                  : "rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-sm"}>{x}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="reveal mt-6 text-sm"><span className="font-mono text-primary">{t(d.skills.spoken)}:</span> {t(spoken)}</p>
    </Section>
  );
}

function Experience() {
  const { d, t } = useI18n();
  return (
    <Section id="experience" title={t(d.exp.title)}>
      <div className="space-y-4">
        {experience.map((e, i) => (
          <div key={i} className="reveal grid gap-1 rounded-xl border border-border bg-card p-5 md:grid-cols-[220px_1fr]">
            <span className="font-mono text-xs text-primary">{t(e.date)}</span>
            <div>
              <h3 className="font-semibold">{t(e.title)} <span className="text-muted-foreground">· {e.org}</span></h3>
              {e.text && <p className="mt-1 text-sm text-muted-foreground">{t(e.text)}</p>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const { d, t } = useI18n();
  const c = d.contact;
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Portfolio — ${f.get("name")}`;
    const body = `${f.get("message")}\n\n${f.get("name")} <${f.get("email")}>`;
    window.location.href = gmailComposeUrl(subject, body);
  };
  const links: [string, string][] = [
    ["Telegram", socials.telegram], ["WhatsApp", socials.whatsapp], ["LinkedIn", socials.linkedin],
    ["GitHub", socials.github], ["YouTube", socials.youtube], ["Workana", socials.workana], ["Mostaql", socials.mostaql],
  ];
  const input = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:border-primary focus:outline-none";
  return (
    <Section id="contact" title={t(c.title)} sub={t(c.sub)}>
      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="reveal space-y-4 rounded-xl border border-border bg-card p-6">
          <label className="block text-sm">{t(c.name)}<input name="name" required maxLength={100} className={`${input} mt-1`} /></label>
          <label className="block text-sm">{t(c.email)}<input name="email" type="email" required maxLength={255} className={`${input} mt-1`} /></label>
          <label className="block text-sm">{t(c.message)}<textarea name="message" required maxLength={2000} rows={5} className={`${input} mt-1`} /></label>
          <button type="submit" className={`${btnPrimary} w-full`}>{t(c.send)}</button>
        </form>
        <div className="reveal space-y-6">
          <div className="flex flex-wrap gap-3">
            <a href={gmailComposeUrl("Hello Mohammed")} target="_blank" rel="noreferrer" className={btnPrimary}>✉ {t(c.emailMe)}</a>
            {links.map(([label, url]) => url
              ? <a key={label} href={url} target="_blank" rel="noreferrer" className={btnGhost}>{label}</a>
              : <span key={label} className={`${btnGhost} opacity-60`}>{label}</span>)}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  const { d, t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground">
        <span>{t(d.footer.built)} · © {new Date().getFullYear()} Mohammed Bourass. {t(d.footer.rights)}</span>
        <LangSwitch />
      </div>
    </footer>
  );
}

export function Portfolio() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero /><About /><Roadmap /><Projects /><Services /><Skills /><Experience /><Contact />
      </main>
      <Footer />
    </>
  );
}
