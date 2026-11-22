// All site copy lives here. Edit freely; the layout reads from this file.
// Lines marked DRAFT were written as starting points and should be
// rewritten in your own words.

export const EMAIL = "arish.shahab1@gmail.com";
export const RESEARCHGATE = "https://www.researchgate.net/profile/Arish-Shahab";

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
  { label: "GitHub", href: "https://github.com/arishs24" },
  { label: "Instagram", href: "https://www.instagram.com/arishshahabb/" },
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
      { label: "Health Systems", to: "/#health-systems" },
    ],
  },
  {
    label: "Writing",
    to: "/learnings",
    children: [{ label: "Biggest Learnings", to: "/learnings" }],
  },
  {
    label: "Articles",
    to: "/articles",
    children: [
      { label: "Research", to: "/articles#research" },
      { label: "Press", to: "/articles#press" },
    ],
  },
  {
    label: "Elsewhere",
    children: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/arishshahab/" },
      { label: "GitHub", href: "https://github.com/arishs24" },
      { label: "Instagram", href: "https://www.instagram.com/arishshahabb/" },
    ],
  },
];

export const press = [
  {
    source: "CBC News",
    title: "McMaster students are making hearing aids affordable.",
    url: "https://www.cbc.ca/news/canada/hamilton/mcmaster-students-affordable-hearing-aids-9.7259207",
  },
  {
    source: "McMaster Daily News",
    title: "From the classroom to California: McMaster students launch hearing care startup Amano.",
    url: "https://news.mcmaster.ca/mcmaster-students-launch-hearing-care-startup-amano/",
  },
  {
    source: "Founders, Inc. on X",
    title: "Amano's hearing device, built at Founders, Inc.",
    url: "https://x.com/fdotinc/status/2054634415649874097",
  },
  {
    source: "Pubity",
    title: "Feature on Amano.",
    url: "https://www.instagram.com/p/DeZuFk9DSfU/",
  },
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
    source: "JXTX Foundation",
    title: "Scholarships awarded for GBCC2025.",
    url: "https://jxtxfoundation.org/news/2025-6-19-gbcc-awardees/",
  },
];

// Homepage digest of the press list, grouped by story.
export const featuredOutlets = [
  "CBC News",
  "McMaster",
  "Founders, Inc.",
  "Pubity",
  "Education News Canada",
];

export const featuredStories = [
  {
    story: "Amano",
    headline: "Affordable hearing care, from the classroom to California.",
    sources: [
      { label: "CBC News", url: "https://www.cbc.ca/news/canada/hamilton/mcmaster-students-affordable-hearing-aids-9.7259207" },
      { label: "McMaster Daily News", url: "https://news.mcmaster.ca/mcmaster-students-launch-hearing-care-startup-amano/" },
      { label: "Founders, Inc.", url: "https://x.com/fdotinc/status/2054634415649874097" },
      { label: "Pubity", url: "https://www.instagram.com/p/DeZuFk9DSfU/" },
    ],
  },
  {
    story: "HackPrinceton",
    headline: "1st in healthcare for \u201ca flight simulator for brain surgery.\u201d",
    sources: [
      { label: "McMaster Daily News", url: "https://news.mcmaster.ca/like-a-flight-simulator-for-brain-surgery-undergrad-wins-at-princeton-engineering-competition/" },
      { label: "McMaster Health Sciences", url: "https://healthsci.mcmaster.ca/like-a-flight-simulator-for-brain-surgery-undergrad-arish-shahab-takes-home-health-care-prize-at-princeton-engineering-competition/" },
      { label: "Education News Canada", url: "https://educationnewscanada.com/article/education/level/university/1/1176503/b-like-a-flight-simulator-for-brain-surgery-undergrad-wins-at-princeton-engineering-competition.html" },
    ],
  },
  {
    story: "Also",
    headline: "The next generation of medical entrepreneurs, and a GBCC2025 scholarship.",
    sources: [
      { label: "McMaster Health Sciences", url: "https://healthsci.mcmaster.ca/meet-the-next-generation-of-medical-entrepreneurs/" },
      { label: "JXTX Foundation", url: "https://jxtxfoundation.org/news/2025-6-19-gbcc-awardees/" },
    ],
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
    title: "Personalized care",
    body: "Every patient is different. Care should be built around the person, not the average.",
  },
  {
    title: "How the world gets care",
    body: "Who gets treated, how fast, and at what cost changes from one country to the next. I go see it for myself.",
    link: { label: "Where I've been.", href: "/#health-systems" },
  },
  {
    title: "And much more",
    body: "Neuroscience, teaching, and hackathons.",
  },
];

export const work = [
  {
    org: "Amano",
    desc: "Co-Founder. The future of personalized wellness. Part of Founders, Inc. and Lightyear (HF0).",
  },
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
  {
    title: "Hackathons",
    body: "I sponsor and mentor at hackathons. They're what got me where I am today, and one of the best things you can do.",
  },
  {
    title: "Guest lectures",
    body: "I guest lecture on ML in healthcare, and on how to take the first step in starting a company.",
  },
];

// Health systems seen in person. id is the ISO 3166 numeric code used by
// the map data; at is [longitude, latitude] for the marker dot.
export const healthSystems = [
  { id: "124", name: "Canada", at: [-79.4, 43.7] },
  { id: "840", name: "United States", at: [-77.0, 38.9] },
  { id: "170", name: "Colombia", at: [-74.1, 4.7] },
  { id: "372", name: "Ireland", at: [-6.3, 53.3] },
  { id: "826", name: "United Kingdom", at: [-0.1, 51.5] },
  { id: "620", name: "Portugal", at: [-9.1, 38.7] },
  { id: "724", name: "Spain", at: [-3.7, 40.4] },
  { id: "504", name: "Morocco", at: [-6.8, 34.0] },
  { id: "682", name: "Saudi Arabia", at: [46.7, 24.7] },
  { id: "784", name: "UAE", at: [55.3, 25.2] },
  { id: "586", name: "Pakistan", at: [73.0, 33.7] },
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

export const learnings = {
  title: "Biggest Things I've Learned",
  updated: "November 2026",
  items: [
    {
      title: "Make family non-negotiable.",
      body: ["Prioritize family above everything else, and don't let anything move that."],
    },
    {
      title: "Do the thing that makes you most uncomfortable.",
      body: [
        "That's where real growth comes from. Once you do it, you realize it wasn't as scary as it seemed.",
        "For me, that was public speaking.",
      ],
    },
    {
      title: "Drop your ego and talk to everyone.",
      body: [
        "Wherever you go, speak to everyone. You never know where a conversation will take you, or how it might change your life.",
      ],
    },
    {
      title: "Travel the world.",
      body: ["See how different cultures and people view the world, and let it change how you see it."],
    },
    {
      title: "Do something you actually love.",
      body: [
        "I could have studied computer science or biomedical engineering at Waterloo. I knew where that path led: big tech, or another AI SaaS startup.",
        "Instead I did the unusual thing and studied biomedical engineering and health sciences at McMaster, because that's what I'm passionate about. I enjoy it so much more.",
      ],
    },
  ],
};
