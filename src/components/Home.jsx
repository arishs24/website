import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { universityProjects } from "../constants";

const EMAIL = "arish.shahab1@gmail.com";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
  { label: "GitHub", href: "https://github.com/arishs24" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

const sidebar = [
  { label: "Start Here", href: "#top" },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Featured In", href: "#featured" },
      { label: "Work", href: "#work" },
      { label: "Projects", href: "#projects" },
      { label: "Highlights", href: "#highlights" },
    ],
  },
  {
    label: "Elsewhere",
    children: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
      { label: "GitHub", href: "https://github.com/arishs24" },
      { label: "Research", href: "https://www.researchgate.net/profile/Arish-Shahab" },
      { label: "Book a call", href: "https://calendly.com/arish-shahab1/30min" },
    ],
  },
];

const press = [
  {
    source: "McMaster Daily News",
    title: "‘Like a flight simulator for brain surgery’: Undergrad wins at Princeton engineering competition.",
    url: "https://news.mcmaster.ca/like-a-flight-simulator-for-brain-surgery-undergrad-wins-at-princeton-engineering-competition/",
  },
  {
    source: "McMaster Faculty of Health Sciences",
    title: "Takes home health care prize at Princeton engineering competition.",
    url: "https://healthsci.mcmaster.ca/like-a-flight-simulator-for-brain-surgery-undergrad-arish-shahab-takes-home-health-care-prize-at-princeton-engineering-competition/",
  },
  {
    source: "Education News Canada",
    title: "Undergrad wins at Princeton engineering competition.",
    url: "https://educationnewscanada.com/article/education/level/university/1/1176503/b-like-a-flight-simulator-for-brain-surgery-undergrad-wins-at-princeton-engineering-competition.html",
  },
  {
    source: "McMaster Faculty of Health Sciences",
    title: "Meet the next generation of medical entrepreneurs.",
    url: "https://healthsci.mcmaster.ca/meet-the-next-generation-of-medical-entrepreneurs/",
  },
  {
    source: "Steve Orsini on X",
    title: "On the HackPrinceton health care win.",
    url: "https://x.com/SteveOrsini/status/2000995669931384966",
  },
  {
    source: "Galaxy Project",
    title: "Galaxy and Bioconductor Community Conference meeting report.",
    url: "https://galaxyproject.org/news/2025-07-11-june2025-newsletter/",
  },
  {
    source: "JXTX Foundation",
    title: "Scholarships awarded for GBCC2025.",
    url: "https://jxtxfoundation.org/news/2025-6-19-gbcc-awardees/",
  },
];

const work = [
  {
    org: "Harvard Medical School & MGH",
    desc: "Biomedical Engineer. ML and finite element models of how bone responds to force, so orthopedic surgeons can plan before the OR.",
  },
  {
    org: "AlgoSurg (YC W18)",
    desc: "Software Engineer. Automating the hours surgeons spend on pre-operative planning.",
  },
  {
    org: "University Health Network",
    desc: "ML Researcher. Predicting when a rehab patient is improving, plateauing, or quietly declining.",
  },
  {
    org: "Before that",
    desc: "Johns Hopkins (computational neuroscience), RBC Borealis (neuroimaging), Hamilton Health Sciences (arthroplasty outcomes).",
  },
];

const builds = [
  {
    name: "Baymax",
    desc: "A companion robot with a custom voice model and real-time emotion detection.",
    link: "https://github.com/subodh-thallada/Baymax-UofT-Hacks-12-",
    cta: "See the code.",
  },
  {
    name: "FitBud",
    desc: "Real-time motion tracking that classifies exercises and corrects your form.",
    link: "https://github.com/arishs24/FitBud",
    cta: "See the code.",
  },
  {
    name: "Aqua Boost",
    desc: "Bioimpedance sensors that tell you how hydrated you actually are.",
    link: "https://github.com/arishs24/aqua_boost",
    cta: "See the code.",
  },
];

const capstoneBlurbs = [
  "A hip implant redesigned to resist aseptic loosening and promote bone regrowth.",
  "A smart rehab assistant with resistance training and real-time motion feedback.",
  "A wearable foot-drop device that helps people with MS run again.",
];

const highlights = [
  ["", "1st Place Healthcare", " at HackPrinceton"],
  ["", "Nebius AI Discovery Award", ""],
  ["", "1st in Canada", ", Waterloo Financial Literacy Competition"],
  ["", "13th worldwide", ", International Research Olympiad"],
  ["DECA ", "Top 20 worldwide", " at ICDC"],
  ["", "JXTX Scholar", ""],
];

const ink = "text-[#161616]";
const muted = "text-[#252525]/50";
const underline =
  "underline underline-offset-[3px] decoration-1 hover:text-[#161616] transition-colors duration-200";

const Ext = ({ href, className = "", children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

const Section = ({ id, label, children }) => (
  <section
    id={id}
    className="scroll-mt-24 grid md:grid-cols-[minmax(0,1fr)_minmax(0,500px)_minmax(0,1fr)] gap-x-12 gap-y-4 mb-28 last:mb-0"
  >
    <h2 className="md:text-right text-[#252525] text-[26px] md:text-[28px] uppercase leading-[1.1] tracking-[-0.25px] whitespace-pre-line">
      {label}
    </h2>
    <div className={`${muted} text-[17.6px] leading-[1.5]`}>{children}</div>
  </section>
);

const Entry = ({ title, children }) => (
  <div className="mb-5 last:mb-0">
    <p className={ink}>{title}</p>
    {children}
  </div>
);

// Soft frosted circle that trails the pointer, like the reference site.
const Cursor = () => {
  const ref = useRef(null);
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    let x = -100, y = -100, cx = x, cy = y, scale = 1, target = 1, raf;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      target = e.target.closest?.("a, button") ? 2 : 1;
    };
    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      scale += (target - scale) * 0.15;
      el.style.transform = `translate3d(${cx - 12}px, ${cy - 12}px, 0) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 h-6 w-6 rounded-full bg-[#faf7f5]/10 backdrop-blur-[3px] shadow-[0_0_10px_rgba(0,0,0,0.08)]"
    />
  );
};

const SideLink = ({ href, children, sub }) => {
  const external = href?.startsWith("http");
  const cls = `block text-[#eeedec]/80 hover:text-white transition-colors duration-200 ${
    sub ? "pl-[10px] text-[13.5px] leading-[21px]" : "text-[14px] leading-[22px]"
  }`;
  if (!href) return <p className={cls}>{children}</p>;
  return external ? (
    <Ext href={href} className={cls}>{children}</Ext>
  ) : (
    <a href={href} className={cls}>{children}</a>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-black text-[#faf7f5] font-helvetica">
      <Cursor />

      {/* Top bar */}
      <header className="relative z-20 flex items-center justify-between px-6 h-[60px] md:h-[64px]">
        <a href="#top" className="text-[20px] md:text-[24px] leading-none">
          <span className="hidden md:inline">Arish Shahab</span>
          <span className="md:hidden">AS</span>
        </a>
        <nav className="flex items-center gap-4 text-[13.6px]">
          {social.map((s) => (
            <Ext key={s.label} href={s.href} className="hover:opacity-60 transition-opacity">
              {s.label}
            </Ext>
          ))}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden ml-1 text-[12px]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`inline-block transition-transform ${menuOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4" onClick={() => setMenuOpen(false)}>
          {sidebar.map((g) => (
            <div key={g.label}>
              <SideLink href={g.href}>{g.label}</SideLink>
              {g.children?.map((c) => (
                <SideLink key={c.label} href={c.href} sub>{c.label}</SideLink>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="md:flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="hidden md:block w-[220px] shrink-0"
        >
          <div className="sticky top-0 px-6 pt-[30px] space-y-4">
            {sidebar.map((g) => (
              <div key={g.label}>
                <SideLink href={g.href}>{g.label}</SideLink>
                {g.children?.map((c) => (
                  <SideLink key={c.label} href={c.href} sub>{c.label}</SideLink>
                ))}
              </div>
            ))}
          </div>
        </motion.aside>

        {/* Card */}
        <motion.main
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
          className="flex-1 min-w-0 bg-[#faf7f5] text-[#252525] rounded-t-[10px] md:rounded-[4px] md:mr-4 md:mb-4 md:mt-[30px] px-6 md:px-10 pt-16 md:pt-[100px] pb-24"
        >
          <Section id="north-star" label={"North\nStar"}>
            <p className="text-[#252525]/50 text-[26px] md:text-[28px] uppercase leading-[1.1] tracking-[-0.25px]">
              Build tools that make
              <br />anything less than precision
              <br />unacceptable in medicine.
            </p>
          </Section>

          <Section id="about" label="About">
            <p className="mb-4">
              Hi, I&rsquo;m <span className={ink}>Arish Shahab</span>.
            </p>
            <p className="mb-6">
              Currently, I&rsquo;m building{" "}
              <Ext href="https://amanolabs.com" className={`${ink} hover:opacity-60 transition-opacity`}>Amano</Ext>,
              the world&rsquo;s most accessible hearing aid, with Harvard Medical School and
              St. Joseph&rsquo;s Healthcare Hamilton. Hearing loss affects 1 in 5 people. Most will
              never afford what already exists.
            </p>
            <p className="mb-6">
              Previously, I co-founded <span className={ink}>Neurite</span>, the first ML tool for
              PSP detection, and built <span className={ink}>Manar</span>, a top-100 religion app on
              the App Store.
            </p>
            <p className="mb-6">
              I study Integrated Biomedical Engineering &amp; Health Sciences at{" "}
              <span className={ink}>McMaster</span>, and spend most of my time on surgical planning,
              rehab prediction, and the tools clinicians actually use.
            </p>
            <p className="mb-6">
              I want to practice medicine, but I can&rsquo;t ignore what&rsquo;s possible with
              computation. Most weeks you&rsquo;ll still find me behind a pharmacy counter.
            </p>
            <p>
              Say hi via{" "}
              <Ext href="https://calendly.com/arish-shahab1/30min" className={`${ink} ${underline}`}>Calendly</Ext>.
            </p>
          </Section>

          <Section id="featured" label={"Featured\nIn"}>
            {press.map((p) => (
              <Entry key={p.url} title={p.source}>
                <Ext href={p.url} className={underline}>{p.title}</Ext>
              </Entry>
            ))}
          </Section>

          <Section id="work" label="Work">
            {work.map((w) => (
              <Entry key={w.org} title={w.org}>
                <p>{w.desc}</p>
              </Entry>
            ))}
          </Section>

          <Section id="projects" label="Projects">
            {builds.map((b) => (
              <Entry key={b.name} title={b.name}>
                <p>{b.desc}</p>
                <Ext href={b.link} className={underline}>{b.cta}</Ext>
              </Entry>
            ))}
            {universityProjects.map((p, i) => (
              <Entry key={p.name} title={p.name.replace(/^Design Project \d+ - /, "")}>
                <p>{capstoneBlurbs[i]}</p>
                <button
                  onClick={() => navigate(`/project/${i}`, { state: { project: p } })}
                  className={`${underline} text-left`}
                >
                  Read the deep dive.
                </button>
              </Entry>
            ))}
          </Section>

          <Section id="highlights" label="Highlights">
            <ol className="list-decimal pl-[26px] marker:text-[#252525]/50 space-y-[2px]">
              {highlights.map(([pre, strong, post]) => (
                <li key={strong}>
                  {pre}<span className={ink}>{strong}</span>{post}
                </li>
              ))}
            </ol>
          </Section>

          <Section id="why" label={"Why\nMedicine"}>
            <p className={`${ink} mb-6`}>
              &ldquo;Whoever saves one life, it is as if he had saved all of mankind.&rdquo;
              <span className={muted}> Quran 5:32</span>
            </p>
            <p className={ink}>I believe the best clinicians will also be builders.</p>
            <Ext href="https://www.researchgate.net/profile/Arish-Shahab" className={underline}>
              Read my published research.
            </Ext>
          </Section>

          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,500px)_minmax(0,1fr)] gap-x-12 mt-28">
            <p className="md:col-start-2 text-[#161616] text-[17.6px] leading-[1.5]">
              For research, collaborations, or anything else:{" "}
              <a href={`mailto:${EMAIL}`} className={underline}>{EMAIL}</a>
            </p>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Home;
