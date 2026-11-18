// All site copy lives here. Edit freely; the layout reads from this file.
// Lines marked DRAFT were written as starting points and should be
// rewritten in your own words.

export const EMAIL = "arish.shahab1@gmail.com";
export const CALENDLY = "https://calendly.com/arish-shahab1/30min";
export const RESEARCHGATE = "https://www.researchgate.net/profile/Arish-Shahab";
export const FREQUENCY = "https://macengsociety.ca/pdfs/frequency/TheFrequency_fall_2024.pdf";

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
  { label: "GitHub", href: "https://github.com/arishs24" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export const sidebar = [
  { label: "Start Here", to: "/" },
  {
    label: "About",
    to: "/#about",
    children: [
      { label: "Flaws", to: "/m/flaws" },
      { label: "Dreams", to: "/m/dreams" },
      { label: "Systems", to: "/m/systems" },
      { label: "12 Learnings", to: "/m/learnings" },
      { label: "Contrarian Beliefs", to: "/m/beliefs" },
    ],
  },
  {
    label: "Articles",
    to: "/articles",
    children: [
      { label: "Featured In", to: "/#featured" },
      { label: "Research", to: "/articles#research" },
      { label: "The Frequency", href: FREQUENCY },
    ],
  },
  {
    label: "Elsewhere",
    children: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
      { label: "GitHub", href: "https://github.com/arishs24" },
      { label: "Book a call", href: CALENDLY },
    ],
  },
];

export const press = [
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

// DRAFT
export const passions = [
  {
    title: "Surgery & the operating room",
    body: "The OR is where engineering decisions become irreversible. I want the right ones made before the first incision.",
    link: { label: "How Synovia won at Princeton.", href: "https://news.mcmaster.ca/like-a-flight-simulator-for-brain-surgery-undergrad-wins-at-princeton-engineering-competition/" },
  },
  {
    title: "Hearing health",
    body: "1 in 5 people live with hearing loss. Most will never afford a hearing aid. That's a design problem.",
    link: { label: "What I'm building at Amano.", href: "https://amanolabs.com" },
  },
  {
    title: "Faith & consistency",
    body: "Building Manar taught me that consistency is a design problem, not a willpower problem.",
  },
  {
    title: "And much more",
    body: "Neuroscience, teaching, writing for The Frequency, and the patients I meet behind the pharmacy counter.",
    link: { label: "Read my writing.", href: "/articles" },
  },
];

export const work = [
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

export const builds = [
  {
    name: "Baymax",
    desc: "A companion robot with a custom voice model and real-time emotion detection.",
    href: "https://github.com/subodh-thallada/Baymax-UofT-Hacks-12-",
  },
  {
    name: "FitBud",
    desc: "Real-time motion tracking that classifies exercises and corrects your form.",
    href: "https://github.com/arishs24/FitBud",
  },
  {
    name: "Aqua Boost",
    desc: "Bioimpedance sensors that tell you how hydrated you actually are.",
    href: "https://github.com/arishs24/aqua_boost",
  },
];

export const capstoneBlurbs = [
  "A hip implant redesigned to resist aseptic loosening and promote bone regrowth.",
  "A smart rehab assistant with resistance training and real-time motion feedback.",
  "A wearable foot-drop device that helps people with MS run again.",
];

// [plain before, highlighted, plain after]
export const highlights = [
  ["", "1st Place Healthcare", " at HackPrinceton"],
  ["", "Nebius AI Discovery Award", ""],
  ["", "1st in Canada", ", Waterloo Financial Literacy Competition"],
  ["", "13th worldwide", ", International Research Olympiad"],
  ["DECA ", "Top 20 worldwide", " at ICDC"],
  ["", "JXTX Scholar", ""],
];

// DRAFT
export const dreams = [
  ["Practice medicine as a ", "physician who builds"],
  ["Put an affordable hearing aid in ", "100 million ears"],
  ["Make pre-operative planning take ", "minutes, not hours"],
  ["Catch neurodegeneration ", "years before symptoms"],
  ["Help 100 students start ", "building in healthcare"],
];

// DRAFT
export const howILearn = [
  { lead: "Building things. Shadowing clinicians. Reading papers. Listening to patients." },
  {
    lead: "The fastest way to understand a system is to build a tool for it.",
    link: { label: "See what I've built.", href: "/#projects" },
  },
  {
    lead: "Research is a conversation. I try to join it early.",
    link: { label: "Read my published research.", href: "/articles#research" },
  },
  {
    lead: "“Whoever saves one life, it is as if he had saved all of mankind.”",
    muted: "Quran 5:32",
  },
];

export const research = [
  {
    title: "When does patient function “plateau” after total joint arthroplasty? A cohort study",
    where: "International Orthopaedics, 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/39007939/",
  },
  {
    title: "The effects of chlorhexidine, povidone-iodine and vancomycin on growth and biofilms of pathogens that cause prosthetic joint infections",
    where: "Journal of Hospital Infection, 2024",
    href: "https://pubmed.ncbi.nlm.nih.gov/38992843/",
  },
  {
    title: "Optimization of a ligand-targeted, smart liposomal drug delivery system for interstitial lung disease",
    where: "Wireless Devices and Sensors Lab, University of Waterloo, 2024",
    href: "https://docs.google.com/document/d/10j3IIps_KfYgitQG2ic30XpG5OyOm71VEwJBbDiEagY/edit?usp=sharing",
  },
  {
    title: "CRISPR and the LRP5 gene: the power of gene editing for bone health",
    where: "Juno Journal, 2023",
    href: "https://medium.com/@arishshahab/crispr-and-the-lrp5-gene-displaying-the-power-of-gene-editing-for-bone-health-9f7e55217cca",
  },
];

// Sub-pages. Each block is { p }, { h }, or { ol: [...] }. ALL DRAFT.
export const pages = {
  flaws: {
    title: "My Flaws",
    updated: "November 2026",
    blocks: [
      { p: "I have plenty of flaws. Some I work on. Others I keep, because their flipside is a strength." },
      { p: "Here are a few:" },
      {
        ol: [
          "I say yes to too much. Five projects at once means some get less than they deserve.",
          "I move fast and skip the write-up. Future me pays for it.",
          "I build before I ask. Sometimes the answer was one conversation away.",
          "I find it hard to stop working on something once it's interesting.",
          "I'm slow to ask for help, even when it's right there.",
        ],
      },
    ],
  },
  dreams: {
    title: "My Dreams",
    updated: "November 2026",
    blocks: [
      {
        ol: [
          "Practice medicine as a physician who builds",
          "Put an affordable hearing aid in 100 million ears",
          "Make pre-operative planning take minutes, not hours",
          "Catch neurodegeneration years before symptoms",
          "Help 100 students start building in healthcare",
        ],
      },
    ],
  },
  systems: {
    title: "My Systems, Routines, and Tools",
    updated: "November 2026",
    blocks: [
      { p: "How I split my time between class, the lab, a startup, and the pharmacy." },
      { h: "Weeks" },
      { p: "I batch. Lab and research work get long uninterrupted blocks. Meetings get stacked on the same days. Pharmacy shifts are the reset button." },
      { h: "Energy" },
      { p: "Sleep first, then everything else. A walk between deep-work blocks does more than another coffee." },
      { h: "Tools" },
      {
        ol: [
          "Python, PyTorch and TensorFlow for models",
          "FEA software for musculoskeletal simulation",
          "React and Next.js for anything a clinician needs to click",
          "A notebook. Still the fastest way to think.",
        ],
      },
    ],
  },
  learnings: {
    title: "12 Learnings",
    updated: "November 2026",
    blocks: [
      { p: "Things that have changed how I work:" },
      { h: "Building" },
      {
        ol: [
          "Ship the ugly version. Feedback beats polish.",
          "Talk to the person who will use it before you write a line of code.",
          "Thirty-six hours is enough to build something real.",
          "Constraints make better products than budgets.",
        ],
      },
      { h: "Medicine" },
      {
        ol: [
          "Clinicians don't need more data. They need the right number at the right time.",
          "The pharmacy counter teaches more about healthcare than most lectures.",
          "Every patient is an n of 1.",
          "Precision is a form of care.",
        ],
      },
      { h: "Life" },
      {
        ol: [
          "Consistency beats intensity.",
          "Say yes early, then learn to say no.",
          "Be around people who make the right thing the default.",
          "Most regrets are things you didn't try.",
        ],
      },
    ],
  },
  beliefs: {
    title: "Contrarian Beliefs",
    updated: "November 2026",
    blocks: [
      { p: "[People tell me these are wrong. I take that as a good sign.]" },
      {
        ol: [
          "Hearing aids should cost less than a pair of headphones.",
          "Surgeons will rehearse every operation in simulation before they perform it.",
          "The best clinicians of the next decade will also write code.",
          "Most healthcare AI fails on workflow, not accuracy.",
          "Undergrads can do serious research, if someone lets them.",
        ],
      },
    ],
  },
};
