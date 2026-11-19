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
      { label: "Featured In", to: "/#featured" },
      { label: "Passions", to: "/#passions" },
      { label: "Work", to: "/#work" },
      { label: "Building Others", to: "/#building" },
    ],
  },
  {
    label: "Articles",
    to: "/articles",
    children: [
      { label: "Research", to: "/articles#research" },
      { label: "Press", to: "/articles#press" },
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
    title: "And much more",
    body: "Neuroscience, teaching, and writing for The Frequency.",
    link: { label: "Read my writing.", href: "/articles" },
  },
];

export const work = [
  {
    org: "Harvard Medical School & MGH",
    desc: "Biomedical Engineer. ML and finite element models of how bone responds to force, so orthopedic surgeons can plan before the OR.",
  },
  {
    org: "Johns Hopkins University",
    desc: "Computational Neuroscience Researcher. ML models of brain function and disease, and signal work for brain-computer interfaces.",
  },
  {
    org: "University Health Network",
    desc: "ML Researcher. Predicting when a rehab patient is improving, plateauing, or quietly declining.",
  },
  {
    org: "Also",
    desc: "AlgoSurg (YC W18), RBC Borealis (neuroimaging), and Hamilton Health Sciences (arthroplasty outcomes).",
  },
];

export const building = [
  {
    title: "Buildojo",
    body: "I help students go from an idea to a running startup.",
    link: { label: "See Buildojo.", href: "https://buildojo.ai" },
  },
  {
    title: "Angel investing & scouting",
    body: "I angel invest, scout for funds, and help people with limited access kick-start their journey.",
  },
];

// DRAFT
export const dreams = [
  ["Practice medicine as a ", "physician who builds"],
  ["Make pre-operative planning take ", "minutes, not hours"],
  ["Catch neurodegeneration ", "years before symptoms"],
  ["Help 100 students start ", "building in healthcare"],
];

// DRAFT
export const howILearn = [
  { lead: "Building things. Shadowing clinicians. Reading papers. Listening to patients." },
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
