import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { PortfolioContentData, Project } from "@/content";

type Props = {
  content: PortfolioContentData;
  isHebrew?: boolean;
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    className="text-sm text-slate-600 transition-colors hover:text-slate-900"
  >
    {children}
  </a>
);

function Section({
  id,
  number,
  title,
  subtitle,
  children,
  alignRight = false,
}: {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  alignRight?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-8 md:py-10">
      <div className="flex items-end justify-between gap-4">
        {alignRight ? (
          <>
            <div className="hidden h-px w-40 bg-gradient-to-r from-rose-300 via-violet-300 to-transparent md:block" />
            <div className="text-right">
              <div className="text-xs tracking-[0.25em] text-slate-500">
                {number} // {title}
              </div>
              <h2 className="font-display mt-3 text-3xl leading-tight md:text-4xl">
                {title}
                {subtitle ? (
                  <span className="block text-slate-500">{subtitle}</span>
                ) : null}
              </h2>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="text-xs tracking-[0.25em] text-slate-500">
                {number} // {title.toUpperCase()}
              </div>
              <h2 className="font-display mt-3 text-3xl leading-tight md:text-4xl">
                {title}
                {subtitle ? (
                  <span className="block text-slate-500">{subtitle}</span>
                ) : null}
              </h2>
            </div>
            <div className="hidden h-px w-40 bg-gradient-to-r from-rose-300 via-violet-300 to-transparent md:block" />
          </>
        )}
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      dir="ltr"
      className="inline-flex rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur md:text-sm"
    >
      {children}
    </span>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white/70 p-6 shadow-[0_20px_60px_-35px_rgba(244,114,182,0.35)] backdrop-blur">
      {children}
    </div>
  );
}

function BulletList({
  items,
  isHebrew,
}: {
  items: string[];
  isHebrew: boolean;
}) {
  if (!isHebrew) {
    return (
      <ul className="mt-4 list-disc pl-5 text-slate-600">
        {items.map((item) => (
          <li key={item} className="mt-1">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-4 space-y-2 text-right text-slate-600">
      {items.map((item) => (
        <div key={item} dir="rtl" className="relative pr-5">
          <span className="absolute right-0 top-0 text-slate-500">•</span>
          <span style={{ unicodeBidi: "plaintext" }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectMediaView({
  project,
  isHebrew,
}: {
  project: Project;
  isHebrew: boolean;
}) {
  const images = project.media?.images ?? [];
  const video = project.media?.video;

  return (
    <div className="mt-6 space-y-4">
      {images.length > 0 && (
        <div dir="ltr" className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img) => (
            <div
              key={img.src}
              className="relative h-44 w-72 shrink-0 overflow-hidden rounded-[18px] border border-slate-200 bg-white"
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {video?.src && (
        <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          <div className={`px-4 py-3 text-sm text-slate-600 ${isHebrew ? "text-right" : ""}`}>
            {video.title ?? "Demo"}
          </div>
          <video controls className="w-full" playsInline>
            <source src={video.src} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  isHebrew,
}: {
  project: Project;
  isHebrew: boolean;
}) {
  return (
    <Card>
      <div dir={isHebrew ? "rtl" : "ltr"} className={isHebrew ? "text-right" : ""}>
        {project.links?.length ? (
          <div dir="ltr" className="mb-4 flex flex-wrap gap-2 justify-start">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-rose-500 to-violet-500 px-4 py-2 text-sm text-white shadow-sm transition hover:opacity-95"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}

        <div
          className="font-display text-2xl tracking-tight"
          style={isHebrew ? { unicodeBidi: "plaintext" } : undefined}
        >
          {project.name}{" "}
          {project.period ? (
            <span dir="ltr" className="text-base text-slate-500">
              ({project.period})
            </span>
          ) : null}
        </div>

        <p
          className="mt-3 leading-relaxed text-slate-600"
          style={isHebrew ? { unicodeBidi: "plaintext" } : undefined}
        >
          {project.desc}
        </p>

        {project.highlights?.length ? (
          <BulletList items={project.highlights} isHebrew={isHebrew} />
        ) : null}

        <div className={`mt-5 flex flex-wrap gap-2 ${isHebrew ? "justify-end" : ""}`}>
          {project.stack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>
      </div>

      <ProjectMediaView project={project} isHebrew={isHebrew} />
    </Card>
  );
}

export default function PortfolioPage({
  content,
  isHebrew = false,
}: Props) {
  const {
    profile,
    about,
    buildInPractice,
    education,
    experience,
    interests,
    projects,
    skills,
  } = content;

  const labels = isHebrew
    ? {
        contact: "יצירת קשר",
        navPractice: "01. מה אני בונה בפועל",
        navProjects: "02. פרויקטים",
        navSkills: "03. יכולות",
        navExperience: "04. ניסיון",
        navEducation: "05. השכלה",
        navAbout: "06. עליי",
        practiceTitle: "מה אני בונה בפועל",
        practiceSubtitle: "התחומים שאני עובדת איתם ביום־יום",
        projectsTitle: "פרויקטים",
        projectsSubtitle: "עבודות נבחרות",
        skillsTitle: "יכולות",
        skillsSubtitle: "הכלים שאני עובדת איתם",
        experienceTitle: "ניסיון",
        experienceSubtitle: "Production + Leadership",
        educationTitle: "השכלה",
        educationSubtitle: "רקע אקדמי",
        aboutTitle: "עליי",
        aboutSubtitle: "מעבר לקוד",
        footer: "מהנדסת תוכנה // 2026",
        email: "אימייל",
      }
    : {
        contact: "Contact",
        navPractice: "01. Practice",
        navProjects: "02. Projects",
        navSkills: "03. Skills",
        navExperience: "04. Experience",
        navEducation: "05. Education",
        navAbout: "06. About",
        practiceTitle: "What I Build in Practice",
        practiceSubtitle: "Core areas I work with",
        projectsTitle: "Projects",
        projectsSubtitle: "Selected Works",
        skillsTitle: "Skills",
        skillsSubtitle: "My Toolbox",
        experienceTitle: "Experience",
        experienceSubtitle: "Production + Leadership",
        educationTitle: "Education",
        educationSubtitle: "Academia",
        aboutTitle: "About",
        aboutSubtitle: "Beyond the Terminal",
        footer: "SOFTWARE ENGINEER // 2026",
        email: "Email",
      };

  return (
    <main className="mx-auto max-w-6xl px-5">
      <header className="sticky top-0 z-10 -mx-5 border-b border-slate-200 bg-white/70 px-5 backdrop-blur">
        <nav className="flex items-center justify-between py-4" dir="ltr">
          <div className="flex items-center gap-3">
            <Link
              href={isHebrew ? "/" : "/he"}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:shadow"
            >
              {isHebrew ? "English" : "עברית"}
            </Link>

            <a
              href={profile.links.email}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:shadow"
            >
              {labels.contact}
            </a>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <NavLink href="#practice">{labels.navPractice}</NavLink>
            <NavLink href="#projects">{labels.navProjects}</NavLink>
            <NavLink href="#skills">{labels.navSkills}</NavLink>
            <NavLink href="#experience">{labels.navExperience}</NavLink>
            <NavLink href="#education">{labels.navEducation}</NavLink>
            <NavLink href="#about">{labels.navAbout}</NavLink>
          </div>

          <div dir={isHebrew ? "rtl" : "ltr"} className="font-display text-lg tracking-tight">
            {profile.name}
          </div>
        </nav>
      </header>

      <section className="py-10 md:py-14">
        {isHebrew ? (
          <div dir="ltr" className="grid gap-10 md:grid-cols-[260px_1fr] md:items-center">
            <div className="justify-self-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_30px_80px_-50px_rgba(168,85,247,0.35)]">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} profile`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-rose-200/40" />
              </div>
            </div>

            <div dir="rtl" className="text-right">
              <div className="text-sm tracking-[0.2em] text-slate-500">
                {profile.title}
              </div>

              <h1 className="font-display mt-4 text-5xl leading-[0.95] tracking-tight md:text-6xl">
                <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
                  {profile.heroTitle}
                </span>
              </h1>

              <p
                className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
                style={{ unicodeBidi: "plaintext" }}
              >
                {profile.tagline}
              </p>

              <div className="mt-7 flex flex-wrap justify-end gap-2">
                {profile.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <div dir="ltr" className="mt-8 flex flex-wrap justify-end gap-5 text-sm">
                <a
                  className="text-slate-700 underline hover:text-slate-900"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-slate-700 underline hover:text-slate-900"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="text-slate-700 underline hover:text-slate-900"
                  href={profile.links.email}
                >
                  {labels.email}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center">
            <div>
              <div className="text-sm tracking-[0.2em] text-slate-500">
                {profile.title}
              </div>

              <h1 className="font-display mt-4 text-5xl leading-[0.95] tracking-tight md:text-6xl">
                <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent">
                  {profile.heroTitle}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {profile.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {profile.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm">
                <a
                  className="text-slate-700 underline hover:text-slate-900"
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="text-slate-700 underline hover:text-slate-900"
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="text-slate-700 underline hover:text-slate-900"
                  href={profile.links.email}
                >
                  {labels.email}
                </a>
              </div>
            </div>

            <div className="justify-self-center">
              <div className="relative h-56 w-56 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_30px_80px_-50px_rgba(168,85,247,0.35)]">
                <Image
                  src={profile.photo}
                  alt={`${profile.name} profile`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-rose-200/40" />
              </div>
            </div>
          </div>
        )}
      </section>

      <Section
        id="practice"
        number="01"
        title={labels.practiceTitle}
        subtitle={labels.practiceSubtitle}
        alignRight={isHebrew}
      >
        <Card>
          <div className="grid gap-3 md:grid-cols-2">
            {buildInPractice.map((item) => (
              <div
                key={item}
                className={`rounded-[18px] border border-slate-200 bg-white/70 px-4 py-3 text-slate-700 ${
                  isHebrew ? "text-right" : ""
                }`}
                style={
                  isHebrew
                    ? { unicodeBidi: "plaintext", direction: "rtl" }
                    : undefined
                }
              >
                {item}
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <Section
        id="projects"
        number="02"
        title={labels.projectsTitle}
        subtitle={labels.projectsSubtitle}
        alignRight={isHebrew}
      >
        <div className="space-y-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} isHebrew={isHebrew} />
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        number="03"
        title={labels.skillsTitle}
        subtitle={labels.skillsSubtitle}
        alignRight={isHebrew}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((g) => (
            <Card key={g.title}>
              <div className={`font-display text-xl tracking-tight ${isHebrew ? "text-right" : ""}`}>
                {g.title}
              </div>
              <div className={`mt-4 flex flex-wrap gap-2 ${isHebrew ? "justify-end" : ""}`}>
                {g.items.map((it) => (
                  <Pill key={it}>{it}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        number="04"
        title={labels.experienceTitle}
        subtitle={labels.experienceSubtitle}
        alignRight={isHebrew}
      >
        <div className="space-y-4">
          {experience.map((e) => (
            <Card key={e.period + e.company}>
              <div className={`text-sm text-slate-500 ${isHebrew ? "text-right" : ""}`}>
                {e.period}
              </div>

              {isHebrew ? (
                <div dir="ltr" className="mt-3 flex items-start justify-between gap-6">
                  {e.logos?.length ? (
                    <div className="flex shrink-0 items-center gap-3">
                      {e.logos.map((src: string) => (
                        <div
                          key={src}
                          className="flex h-16 w-28 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm"
                        >
                          <img src={src} alt="logo" className="h-full w-full object-contain" />
                        </div>
                      ))}
                    </div>
                  ) : e.logo ? (
                    <div className="flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
                      <img
                        src={e.logo}
                        alt={`${e.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div />
                  )}

                  <div dir="rtl" className="min-w-0 text-right md:max-w-[78%]">
                    <div className="font-display text-2xl tracking-tight">{e.role}</div>
                    <div className="text-slate-600">{e.company}</div>
                  </div>
                </div>
              ) : (
                <div className="mt-3 flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="font-display text-2xl tracking-tight">{e.role}</div>
                    <div className="text-slate-600">{e.company}</div>
                  </div>

                  {e.logos?.length ? (
                    <div className="flex shrink-0 items-center gap-3">
                      {e.logos.map((src: string) => (
                        <div
                          key={src}
                          className="flex h-16 w-28 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm"
                        >
                          <img src={src} alt="logo" className="h-full w-full object-contain" />
                        </div>
                      ))}
                    </div>
                  ) : e.logo ? (
                    <div className="flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
                      <img
                        src={e.logo}
                        alt={`${e.company} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : null}
                </div>
              )}

              <BulletList items={e.bullets} isHebrew={isHebrew} />
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="education"
        number="05"
        title={labels.educationTitle}
        subtitle={labels.educationSubtitle}
        alignRight={isHebrew}
      >
        <div className="space-y-4">
          {education.map((ed) => (
            <Card key={ed.school}>
              {isHebrew ? (
                <div dir="ltr" className="flex items-start justify-between gap-6">
                  {ed.logo ? (
                    <div className="flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
                      <img
                        src={ed.logo}
                        alt={`${ed.school} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div />
                  )}

                  <div dir="rtl" className="min-w-0 text-right md:max-w-[78%]">
                    <div className="font-display text-2xl tracking-tight">{ed.school}</div>
                    <div className="mt-1 text-slate-700">{ed.degree}</div>
                    <div className="mt-3 text-slate-500 text-right">
                      <span className="inline-flex flex-row-reverse items-center gap-2">
                        {ed.extra ? (
                          <span style={{ unicodeBidi: "plaintext" }}>{ed.extra}</span>
                        ) : null}
                        {ed.extra ? <span>•</span> : null}
                        <span dir="ltr">{ed.period}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <div className="font-display text-2xl tracking-tight">{ed.school}</div>
                    <div className="mt-1 text-slate-700">{ed.degree}</div>
                    <div className="mt-3 text-slate-500">
                      {ed.period} {ed.extra ? `• ${ed.extra}` : ""}
                    </div>
                  </div>

                  {ed.logo ? (
                    <div className="flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
                      <img
                        src={ed.logo}
                        alt={`${ed.school} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : null}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        number="06"
        title={labels.aboutTitle}
        subtitle={labels.aboutSubtitle}
        alignRight={isHebrew}
      >
        <Card>
          <div className={`space-y-3 text-lg leading-relaxed text-slate-600 ${isHebrew ? "text-right" : ""}`}>
            {about.map((line) => (
              <p key={line} style={isHebrew ? { unicodeBidi: "plaintext" } : undefined}>
                {line}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {interests.map((c) => (
              <div
                key={c.title}
                className={`rounded-[18px] border border-slate-200 bg-white/70 p-5 transition hover:bg-white ${isHebrew ? "text-right" : ""}`}
              >
                <div className="text-2xl">
                  {c.title === "Training" || c.title === "אימונים"
                    ? "💪"
                    : c.title === "Hosting" || c.title === "אירוח"
                    ? "🍽️"
                    : "✈️"}
                </div>
                <div className="font-display mt-2 text-xl tracking-tight">{c.title}</div>
                <p
                  className="mt-2 text-slate-600"
                  style={isHebrew ? { unicodeBidi: "plaintext" } : undefined}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <footer className={`py-10 text-sm text-slate-500 ${isHebrew ? "text-right" : ""}`}>
        {profile.name} — {labels.footer}
      </footer>
    </main>
  );
}