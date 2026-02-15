import Image from "next/image";
import {
  about,
  education,
  experience,
  interests,
  profile,
  projects,
  skills,
  Project,
} from "@/content";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
  >
    {children}
  </a>
);

const Section = ({
  id,
  number,
  title,
  subtitle,
  children,
}: {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-28 py-14">
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="text-xs tracking-[0.25em] text-slate-500">
          {number} // {title.toUpperCase()}
        </div>
        <h2 className="font-display mt-3 text-3xl md:text-4xl leading-tight">
          {title}
          {subtitle ? (
            <span className="block text-slate-500">{subtitle}</span>
          ) : null}
        </h2>
      </div>
      <div className="hidden md:block h-px w-40 bg-gradient-to-r from-rose-300 via-violet-300 to-transparent" />
    </div>

    <div className="mt-8">{children}</div>
  </section>
);

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs md:text-sm text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white/70 p-6 shadow-[0_20px_60px_-35px_rgba(244,114,182,0.35)] backdrop-blur">
      {children}
    </div>
  );
}

function ProjectMediaView({ p }: { p: Project }) {
  const images = p.media?.images ?? [];
  const video = p.media?.video;

  return (
    <div className="mt-6 space-y-4">
      {images.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
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
          <div className="px-4 py-3 text-sm text-slate-600">
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

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-5">
      {/* HEADER */}
      <header className="sticky top-0 z-10 -mx-5 border-b border-slate-200 bg-white/70 px-5 backdrop-blur">
        <nav className="flex items-center justify-between py-4">
          <div className="font-display text-lg tracking-tight">
            {profile.name}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <NavLink href="#projects">01. Projects</NavLink>
            <NavLink href="#skills">02. Skills</NavLink>
            <NavLink href="#experience">03. History</NavLink>
            <NavLink href="#education">04. Education</NavLink>
            <NavLink href="#about">05. About</NavLink>
          </div>

          <a
            href={profile.links.email}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:shadow transition"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-center">
          <div>
            <h1 className="font-display text-5xl md:text-6xl leading-[0.95] tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500">
                Software Engineer
              </span>{" "}
              (B.Sc.)
              <span className="text-slate-500"> &amp; Architecture.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm">
              <a className="underline text-slate-700 hover:text-slate-900" href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="underline text-slate-700 hover:text-slate-900" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="underline text-slate-700 hover:text-slate-900" href={profile.links.email}>
                Email
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="justify-self-center">
            <div className="relative h-56 w-56 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_30px_80px_-50px_rgba(168,85,247,0.35)]">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={`${profile.name} profile`}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                  No Photo
                </div>
              )}

              {/* soft glow */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-rose-200/40" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section id="projects" number="01" title="Projects" subtitle="Selected Works">
        <div className="space-y-6">
          {projects.map((p) => (
            <Card key={p.name}>
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="font-display text-2xl tracking-tight">
                    {p.name}{" "}
                    {p.period ? (
                      <span className="text-base text-slate-500">({p.period})</span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-slate-600 leading-relaxed">{p.desc}</p>

                  {p.highlights?.length ? (
                    <ul className="mt-4 list-disc pl-5 text-slate-600">
                      {p.highlights.map((h) => (
                        <li key={h} className="mt-1">
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>

                {p.links?.length ? (
                  <div className="flex shrink-0 gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-gradient-to-r from-rose-500 to-violet-500 px-4 py-2 text-sm text-white shadow-sm hover:opacity-95 transition"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <ProjectMediaView p={p} />
            </Card>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" number="02" title="Skills" subtitle="My Toolbox">
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((g) => (
            <Card key={g.title}>
              <div className="font-display text-xl tracking-tight">{g.title}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <Pill key={it}>{it}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" number="03" title="Experience" subtitle="Production + Leadership">
        <div className="space-y-4">
          {experience.map((e) => (
            <Card key={e.period + e.company}>
              <div className="text-sm text-slate-500">{e.period}</div>

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
                        <img
                          src={src}
                          alt="logo"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ) : e.logo ? (
                  <div className="flex shrink-0 h-16 w-28 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
                    <img
                      src={e.logo}
                      alt={`${e.company} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : null}
              </div>


              <ul className="mt-4 list-disc pl-5 text-slate-600">
                {e.bullets.map((b) => (
                  <li key={b} className="mt-1">{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" number="04" title="Education" subtitle="Academia">
        <div className="space-y-4">
          {education.map((ed: any) => (
            <Card key={ed.school}>
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="font-display text-2xl tracking-tight">{ed.school}</div>
                  <div className="mt-1 text-slate-700">{ed.degree}</div>

                  <div className="mt-3 text-slate-500">
                    {ed.period} {ed.extra ? `• ${ed.extra}` : ""}
                  </div>
                </div>

                {ed.logo ? (
                  <div className="flex shrink-0 h-16 w-28 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 shadow-sm">
                    <img
                      src={ed.logo}
                      alt={`${ed.school} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ABOUT + INTEREST CARDS */}
      <Section id="about" number="05" title="About" subtitle="Beyond the Terminal">
        <Card>
          <div className="space-y-3 text-slate-600 leading-relaxed text-lg">
            {about.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {interests.map((c) => (
              <div
                key={c.title}
                className="rounded-[18px] border border-slate-200 bg-white/70 p-5 hover:bg-white transition"
              >
                <div className="text-2xl">
                  {c.title === "Training" ? "💪" : c.title === "Hosting" ? "🍽️" : "✈️"}
                </div>
                <div className="font-display mt-2 text-xl tracking-tight">{c.title}</div>
                <p className="mt-2 text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      <footer className="py-12 text-sm text-slate-500">
        {profile.name} — SOFTWARE ENGINEER // 2026
      </footer>
    </main>
  );
}
