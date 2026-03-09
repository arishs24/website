import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    csys,
    thp,
    shadow,
    math,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mac,
    bag,
    prost,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "news",
      title: "Press",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  
  const experiences = [
    {
      title: "Co-Founder",
      company_name: "Amano",
      icon: "/harvard.png",
      iconBg: "#800000",
      date: "August 2025 – Present",
      points: [
        "Hearing loss affects 1 in 5 people. Most will never afford the existing solution. Amano is changing that — building the world's most accessible hearing aid with clinical partnerships at Harvard Medical School and St. Joseph's Healthcare Hamilton.",
        "Navigating hardware development, regulatory pathways, and clinical validation simultaneously while keeping the device affordable enough to actually reach the people who need it.",
      ],
    },
    {
      title: "Biomedical Engineer",
      company_name: "Harvard Medical School & Massachusetts General Hospital",
      icon: "/harvard.png",
      iconBg: "#800000",
      date: "April 2025 – Present",
      points: [
        "Applying finite element analysis and machine learning to model how musculoskeletal structures respond to force — so orthopedic surgeons can personalize decisions before they enter the room.",
        "Building CT-to-FEA automation pipelines and surgical planning tools for the Foot & Ankle Research and Innovation Lab. Translating computational models into software that clinicians actually use.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "AlgoSurg (YC W18)",
      icon: "/harvard.png",
      iconBg: "#383E56",
      date: "November 2025 – Present",
      points: [
        "Automating the hours surgeons currently spend on pre-operative planning — so they spend more of it with the patient.",
        "Building AI-driven surgical simulation and decision-support systems. Working at the intersection of clinical workflow and computational precision.",
      ],
    },
    {
      title: "ML Researcher",
      company_name: "University Health Network (UHN)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2025 – Present",
      points: [
        "Teaching models to understand the arc of rehabilitation — predicting improvement, plateau, and silent regression before it shows on a chart.",
        "Developing predictive pipelines for functional outcome forecasting and recovery pathway optimization.",
      ],
    },
    {
      title: "Computational Neuroscience Researcher",
      company_name: "Johns Hopkins University",
      icon: "/hopkin.jpeg",
      iconBg: "#383E56",
      date: "October 2024 – January 2026",
      points: [
        "Built ML-driven models to study brain function and disease in the NeuroData Lab.",
        "Collaborated with the Crone Lab on brain-computer interface synchronization — working on the problem of translating neural signals into reliable, real-time control.",
        "Contributed to publications and conference presentations on BCI technology and signal processing.",
      ],
    },
    {
      title: "ML Researcher",
      company_name: "RBC Borealis",
      icon: shopify,
      iconBg: "#383E56",
      date: "September 2025 – December 2025",
      points: [
        "Conducted volumetric brain analysis using ML for early neurodegeneration detection.",
        "Developed scalable pipelines for processing and modeling large-scale neuroimaging datasets.",
      ],
    },
    {
      title: "Clinical Researcher",
      company_name: "Hamilton Health Sciences | Juravinski Hospital",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2024 – September 2025",
      points: [
        "Multi-centre longitudinal study on wait times for hip/knee arthroplasty in osteoarthritis patients under Dr. Thomas Wood.",
        "Managed a SQL and REDCap database covering 3,000 patients. Developed ML models with 85%+ accuracy to predict functional trajectories from pre-operative symptoms.",
        "Administered H/KOOS-JR and EQ5D questionnaires to track pain, function, and opioid use across the surgical continuum.",
      ],
    },
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter AI",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2024 – September 2024",
      points: [
        "Built and shipped 5+ production applications using Next.js, OpenAI, Pinecone, and Stripe — reached 1,000+ users.",
        "Led a team of 4 engineers from design to deployment. Mentored by engineers from Amazon, Bloomberg, and Capital One.",
      ],
    },
    {
      title: "Pharmacy Assistant",
      company_name: "Shoppers Drug Mart",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2022 – Present",
      points: [
        "Dispensing 1,000+ prescriptions weekly. Coordinating insurance pre-authorization and managing clinical inventory.",
        "The closest I get to patients before medical school — a daily reminder of why the system needs better tools.",
      ],
    },
    {
      title: "Robotics Mentor",
      company_name: "Canadian School of Young Scholars",
      icon: csys,
      iconBg: "#E6DEDD",
      date: "January 2017 – May 2022",
      points: [
        "Taught students to design, build, and program EV3 and VEX robots. Coached competition teams.",
        "Where I learned that teaching is the fastest way to understand something — and that most kids just need someone to show them the tools exist.",
      ],
    },
  ];
 
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  // Add this to your constants.js file
export const education = [
  {
    school: 'McMaster University',
    degree: 'Integrated Biomedical Engineering and Health Sciences',
    field: 'Biomedical Engineering',
    date: '2024-2028',
    image: mac, // Ensure this path is correct
  },
];



export const volunteerExperiences = [
  {
    title: "Frequency Writer",
    company_name: "The Frequency — McMaster Engineering Society",
    icon: "/mac.jpg",
    iconBg: "#FF0000",
    date: "September 2024 – Present",
    points: [
      "Writing research-backed articles for McMaster Engineering's student journal. The work of making technical ideas legible to people who almost understand them.",
      "Pitching, drafting, and refining pieces that sit at the edge of engineering and clinical relevance.",
    ],
    link: 'https://macengsociety.ca/pdfs/frequency/TheFrequency_fall_2024.pdf',
  },
  {
    title: "Dialysis Assistant",
    company_name: "Trillium Health Partners",
    icon: thp,
    iconBg: "#E8A317",
    date: "May 2024 – Present",
    points: [
      "Supporting outpatient visits at the Speakman Renal Dialysis Care Centre. Patient intake, record management, care coordination.",
      "Three to five hours per session, multiple times a week, for patients who have no other option. It recalibrates what 'urgency' means.",
    ],
  },
  {
    title: "Clinical Shadowing",
    company_name: "Juravinski Hospital · Royal Oak Clinic · Renal Care Centre",
    icon: shadow,
    iconBg: "#1E90FF",
    date: "September 2022 – Present",
    points: [
      "Orthopaedics — Dr. Thomas Wood, MD. Clinical and surgical observation at Juravinski Hospital.",
      "Family Medicine — Dr. Evis Skendaj, MD. Royal Oak Clinic.",
      "Nephrology — Dr. Sharn Bhandal, MD. Renal Care Centre, dialysis.",
    ],
  },
  {
    title: "Biomedical Team Lead",
    company_name: "Eclipto Network",
    icon: shadow,
    iconBg: "#1E90FF",
    date: "March 2024 – July 2024",
    points: [
      "Led biomedical research projects from ideation through structured execution.",
      "Ran brainstorming sessions and technical reviews for cross-disciplinary problems at the intersection of life science and engineering.",
    ],
  },
  {
    title: "STEM Teaching Assistant",
    company_name: "Mathstronauts",
    icon: math,
    iconBg: "#00000",
    date: "January 2020 – February 2022",
    points: [
      "Taught kids programming, 3D modelling, and CAD. The goal was never the project — it was the moment they stopped asking for permission to build.",
    ],
  },
];

export const publishedResearch = [
  {
    title: 'Optimization of a Ligand-Targeted, Smart Liposomal Drug Delivery System for the Treatment of Interstitial Lung Disease Using CHIR99021',
    date: '2024',
    journal: 'Wireless Devices and Sensors Lab - University of Waterloo',
    icon: shopify, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Reviewed the optimization of a ligand-targeted, smart liposomal drug delivery system using CHIR99021 for ILD treatment.',
      'Explored liposomal formulations advantages: enhanced drug stability, bioavailability, and precise delivery to affected lung tissues.',
      'Characterized liposomal formulations using dynamic light scattering (DLS), high-performance liquid chromatography (HPLC), and zeta potential measurements, achieving a uniform size distribution (~100 nm) and high encapsulation efficiency (90% ± 5%).',
      'Anticipated significant morphological changes for PS400 and PCD formulations post-exposure, with DLC and TiMoS2 formulations maintaining their as-received appearance.'
    ],
    link: 'https://docs.google.com/document/d/10j3IIps_KfYgitQG2ic30XpG5OyOm71VEwJBbDiEagY/edit?usp=sharing', // Add link to the research paper

  },

  {
    title: 'The effects of chlorhexidine, povidone-iodine and vancomycin on growth and biofilms of pathogens that cause prosthetic joint infections: an in-vitro model',
    date: '2024',
    journal: 'The Journal of hospital infection',
    icon: starbucks, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Investigated the effects of chlorhexidine gluconate (CHG), povidone-iodine (PI), and vancomycin on pathogen growth and biofilm formation in prosthetic joint infections (PJI) using an in-vitro model.',
      'Employed checkerboard assays to measure potential synergy of CHG and PI together and with vancomycin.',
      'Highlighted the need for careful consideration of vancomycin use in P. aeruginosa infections.'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/38992843/', // Add link to the research paper

  },

  {
    title: 'When does patient function "Plateau" after total joint arthroplasty? A cohort study',
    date: '2024',
    journal: 'International orthopaedics',
    icon: starbucks, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Analyzed the trajectory of patient-reported outcome measures (PROMs) following total hip arthroplasty (THA) and total knee arthroplasty (TKA) to determine when patient function plateaus.',
      'Mean pre-operative Oxford scores were 18.0 (±7.8) for THA and 20.1 (±7.5) for TKA.',
      'Concluded that patients can expect clinically meaningful improvements within the first six months after surgery, with a plateau in PROMs beyond this period.'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/39007939/', // Add link to the research paper

  },

  {
    title: 'CRISPR and the LRP5 Gene: Displaying the Power of Gene Editing for Bone Health',
    date: '2023',
    journal: 'Juno Journal',
    icon: shopify, // Update with correct path
    iconBg: '#f9f9f9',
    points: [
      'Integration of CRISPR gene editing technology with the pivotal LRP5 gene harbour potential for significant advancements in the fields of scientific research, personalized healthcare, and agricultural development.'
    ],
    link: 'https://medium.com/@arishshahab/crispr-and-the-lrp5-gene-displaying-the-power-of-gene-editing-for-bone-health-9f7e55217cca', // Add link to the research paper

  },
];

export const universityProjects = [
  {
    name: "Design Project 2 - Hip Implant",
    description: "Redesigning and 3D-modelling a hip implant that addresses aseptic loosening while promoting bone regrowth. ",
    sections: {
      "Patient Profile": "Our patient, Tahani Al-Jamil, has an ostomy and uses a two-piece drainable system. She has a very physically demanding job that requires frequent twisting and bending of the abdomen. Unfortunately during these types of activities, Tahani experiences a frequent failure of the snap-in coupling of the flange and the pouch. With regular use, including a frequent need to adjust bag positioning, Tahani has found that the coupling loses its secure connection resulting in her ostomy bag falling off on multiple occasions. ",
      "Objectives and Constraints": "The goal was to develop a secure and comfortable ostomy bag, considering constraints like material safety, ease of use, and durability.",
      "Proposed Solution": "The Twist-Lock Ostomy was designed to specifically address the uncoupling failure the patient experiences while also limiting bag movement. ",
      "Responsibilities and Contributions": "As a coordinator, I recommended kinetic tape and took notes during team meetings.Our solution consists of two main components: 1. **First Component:** two-part twist-lock system. 1. the flange has a set of tabs that can be fitted into the slots present on the bag. The bag will then have to be fitted to the flange and twisted down so it locks in place.  2. Further supported by velcro attachments (see Figure 2) 2. **Second Component:** an elastic strap to stabilize the bag. 1. two clips on either side of the elastic band will then allow the user to secure the ends to the waistband of their pants in a desired position.",
      "Project Learning Opportunities and Challenges": "Learned to collaborate effectively and handle user-centric design challenges.",
      "Final Results": "Overall, I am really happy with the outcome of our final design. There is always room for improvement; however, I am proud of the way our team was able to develop and communicate ideas that led to the creation of a unique prototype to meet our patients' needs. The challenges we had faced along the way had given way to several learning opportunities that contributed to the iterative nature of the project, emphasizing the importance of adaptability, through testing, and continuous refinement in the engineering design process. This project helped reinforce the importance of time management and organization, as many milestones and conceptual designs required the team to meet outside of class hours. There was also a significant emphasis on problem-solving throughout the project. This is because developing an engineering solution is often iterative and dynamic, involving several stages of adjustments and modifications. Our team was ultimately able to address these challenges in our final design and create a product that met the majority of the objectives we had identified.",
    },
    role: "Subject Matter Expert",
    softSkills: ["✅Teamwork & Collaboration", "✅Oral & Written Communication", "✅Problem-solving", "✅Time Management"],
technicalSkills: ["✅CAD Using Autodesk Inventor 2025", "✅Engineering Sketches", "✅Material Analysis", "✅3D printing Using PrusaSlicer"],
    tags: [
      { name: "Biomedical", color: "blue-text-gradient" },
      { name: "3D Modelling", color: "green-text-gradient" },
      { name: "Material Analysis", color: "pink-text-gradient" },
    ],
    image: prost,
    source_code_link: "https://github.com/arishs24/dp1",
  },
  {
    name: "Design Project 3 - FlexAid",
    description: "A smart rehabilitation assistant with resistance training, real-time motion feedback, and data visualization for injury recovery.",
    sections: {
      "Patient Profile": "The target demographic includes adults (18+) recovering from muscle injuries such as strains, overuse injuries, or partial tears. These users range from casual gym-goers to athletes. The biggest challenge they face is maintaining proper form during recovery exercises, which can lead to reinjury if not corrected.",
      "Objectives and Constraints": "The goal was to guide users through proper rehabilitation with live feedback, adjustable resistance, and tracking — within constraints of fit, budget, and safety for all users.",
      "Proposed Solution": "FlexAid is a wearable device with a servo-controlled resistance band, orientation sensor for motion tracking, and a Raspberry Pi interface. It alerts users when improper form is detected and tracks progress over time.",
      "Responsibilities and Contributions": "As the SME, I designed the servo mount, gear holders, and casing using Autodesk Inventor. I led the mechanical design integration, helped with final assembly, and worked with both hardware and software teams to ensure seamless fit and function.",
      "Project Learning Opportunities and Challenges": "I gained hands-on experience designing motion systems using bevel gears, learned the importance of tolerancing in CAD, and improved cross-team communication. We iterated through several 3D print revisions to achieve stability and motion control.",
      "Final Results": "This project taught me that iteration and testing are just as important as initial planning. I would've allocated more time for hands-on testing earlier in the design phase to refine mechanics and feedback calibration.",
    },
    role: "Project Coordinator & Computing Subteam",
softSkills: [
  "✅Team Communication & Scheduling",
  "✅Technical Documentation",
  "✅Adaptability",
  "✅Cross-Team Collaboration"
],
technicalSkills: [
  "✅Machine Learning Logic for Personalized Resistance",
  "✅GUI Development using Tkinter (Python)",
  "✅Sensor Data Integration & Real-Time Feedback",
  "✅Backend Logic for Raspberry Pi",
  "✅Basic Mechanical Support (3D Printing, Assembly)"
],
tags: [
  { name: "Rehabilitation", color: "blue-text-gradient" },
  { name: "Computing Systems", color: "green-text-gradient" },
  { name: "Raspberry Pi", color: "pink-text-gradient" }
],
image: "/dp3.jpg", // make sure to import or define ezstep image
source_code_link: "https://github.com/arishs24/flexaid",
  },
  {
    name: "Design Project 4 - EZ-STEP",
    description: "A wearable foot-drop assistive device that uses force sensors and a servo-driven gear system to support running for MS patients.",
    sections: {                         
      "Patient Profile": "Bradley, an adult with Multiple Sclerosis, has foot drop in his left leg and cannot run. Our goal was to create a wearable assistive device to aid his dorsiflexion, allowing him to regain confidence and mobility in running exercises.",
      "Objectives and Constraints": "We aimed to support gait correction, ensure comfort, track cadence, and allow for real-time feedback. Constraints included size, safety, compatibility with Raspberry Pi and FSRs, and use of approved printable materials.",
      "Proposed Solution": "EZ-STEP features a bicycle-inspired chain and gear mechanism, a servo motor triggered by FSR sensors, and a custom 3D-printed mount. It supports dorsiflexion based on gait timing, with a UI interface and real-time alerts.",
      "Responsibilities and Contributions": "As Subject Matter Expert, I designed and printed mechanical components, helped optimize servo alignment, contributed to the DHF and final memo, and supported physical testing and iteration.",
      "Project Learning Opportunities and Challenges": "I learned to account for servo friction and mechanical tolerance, and saw firsthand how poor placement can affect functionality. Real-time testing provided critical feedback.",
      "Final Results": "We successfully built a working prototype that provides functional assistance. With further refinement and comfort testing, EZ-STEP can be a viable rehabilitation support device for foot drop patients.",
    },
    role: "Subject Matter Expert",
    softSkills: [
      "✅Team Collaboration",
      "✅Problem Solving",
      "✅Documentation",
      "✅Mechanical Debugging",
    ],
    technicalSkills: [
      "✅3D CAD with Inventor",
      "✅FSR Integration",
      "✅Servo Calibration",
      "✅Gear System Design",
    ],
    tags: [
      { name: "Biomedical", color: "blue-text-gradient" },
      { name: "Assistive Tech", color: "green-text-gradient" },
      { name: "Mechatronics", color: "pink-text-gradient" },
    ],
    image: "/woo.png", // make sure to import or define ezstep image
    source_code_link: "https://github.com/arishs24/ezstep", // replace with your actual repo link
  }
  
];
  
  const projects = [
    // {
    //   name: "SupraScan (Early Diagnostic Tool for PSP (Progressive Supraunclear Palsy)",
    //   description:
    //     "Developed a 3D CNN model analyzing PET/MRI scans for early PSP detection, achieving 75% accuracy and reducing false positives using detection of Tau protein and amyloid beta buildup",
    //   tags: [
    //     {
    //       name: "Python",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "TensorFlow",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "PyTorch",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "OpenCV",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "Scikit-learn",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "Streamlit",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "FastAPI",
    //       color: "yellow-text-gradient",
    //     },
    //   ],
    //   image: "/psp.png",
    //   source_code_link: "https://github.com/arishs24/SupraScan",
    // },
    {
      name: "Baymax (Healthcare Robot Assistant)",
      description:
        "Baymax Bot is a health and general companion robot designed to provide personalized care for users of all ages. Featuring a custom-trained voice model, a fine-tuned ChatGPT API, and real-time OpenCV emotion detection, the robot delivers tailored medical and emotional support. Built with a Raspberry Pi, motors, servos, voltage regulators, and 3D-printed components.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "MOSFETs, Voltage Regulators & Motor Controllers",
          color: "green-text-gradient",
        },
        {
          name: "Tensor Flow",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
        {
          name: "Raspberry Pi",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "yellow-text-gradient",
        },
        {
          name: "React",
          color: "red-text-gradient",
        },
      ],
      image: "/IMG_4283.jpg",
      source_code_link: "https://github.com/subodh-thallada/Baymax-UofT-Hacks-12-",
    },
    {
      name: "FitBud",
      description:
        "FitBud is a real-time motion monitoring and workout optimization system that leverages machine learning to classify exercises like bicep curls, providing actionable feedback such as 'move up' or 'move left' to improve form and performance while ensuring accuracy and safety.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
        {
          name: "RAG",
          color: "pink-text-gradient",
        },
        {
          name: "C++",
          color: "pink-text-gradient",
        },
        {
          name: "Socket.IO",
          color: "yellow-text-gradient",
        },
        {
          name: "React",
          color: "red-text-gradient",
        },
      ],
      image: "/fitbud.png",
      source_code_link: "https://github.com/arishs24/FitBud",
    },
    {
      name: "Aqua Boost",
      description:
        "Aqua Boost is an advanced hydration system designed to optimize water intake by utilizing bioimpedance sensors to monitor and analyze the body's hydration levels in real-time, ensuring precise and personalized hydration management.",
      tags: [
        {
          name: "MATLAB",
          color: "blue-text-gradient",
        },
        {
          name: "AutoCAD",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
        {
          name: "Raspberry PI",
          color: "yellow-text-gradient",
        },
        {
          name: "Keras",
          color: "red-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/arishs24/aqua_boost",
    },
    {
      name: "Surgery Inventory Tracker",
      description:
        "Web application developed to streamline the process of tracking and managing surgery items using AI and ML.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Material-UI",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "GCP",
          color: "green-text-gradient",
        },
        {
          name: "Vercel",
          color: "pink-text-gradient",
        },
        {
          name: "GPT Vision API",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "CI/CD",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/arishs24/inventory_tracker",
    },
    {
      name: "MedVault XR",
      description:
        "Developed an augmented reality (AR) solution to provide immersive consultations, medication guidance, and chronic disease management. The platform replicates an in-person pharmacy experience virtually, empowering rural patients to understand and use their medications effectively.",
      tags: [
        {
          name: "Blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "Augmented Reality",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "AR.js",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
      ],
      image: "/Pharm.png",
      source_code_link: "https://github.com/arishs24/MedVaultXR",
    },
    {
      name: "JellyAR",
      description:
        "Created a system that automatically applies augmented reality (AR) effects and visual filters to video clips based on the content of the conversation, enhancing the visual appeal and engagement of the videos.",
      tags: [
        {
          name: "Augemented Reality",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Tensor Flow",
          color: "pink-text-gradient",
        },
        {
          name: "Three JS",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "FFMPEG",
          color: "pink-text-gradient",
        },
      ],
      image: "/Jelly.png",
      source_code_link: "https://github.com/arishs24/JellyAR",
    },
    {
      name: "Iremia (Raspberry Pi Fitness Tracker)",
      description:
        "Developed a Raspberry Pi-integrated fitness tracking and monitoring system that tracks key health metrics and provides real-time feedback to enhance workout effectiveness and health monitoring.",
      tags: [
        {
          name: "Raspberry Pi",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "IoT",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "EMG Sensor",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
      ],
      image: "/workout.png",
      source_code_link: "https://github.com/arishs24/iremia",
    },
    {
      name: "Islamic Hub",
      description:
        "Developed an Advanced Islamic Desktop Companion, calculating prayer times, locating nearby restaurants and mosques, interactive Quran feature, etc.",
      tags: [
        {
          name: "JavaFX",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        },
        {
          name: "JSON",
          color: "pink-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
      ],
      image: "/islam.png",
      source_code_link: "https://github.com/arishs24/IslamicHub",
    },
    {
      name: "Weather App using Pygame",
      description:
        "Developed a Weather App using Pygame, integrating APIs and live-updates through data parsing.",
      tags: [
        {
          name: "Python (Pygame)",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
      ],
      image: "/weather.jpeg",
      source_code_link: "https://github.com/arishs24/iremia",
    },
    {
      name: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio using ThreeJS to showcase 3D models and animations, creating an interactive and visually impressive user experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "pink-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/arishs24/website",
    },
  ];
  
  export { experiences, projects, technologies};
