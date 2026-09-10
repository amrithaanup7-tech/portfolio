export interface Project {
  id: string;
  name: string;
  subtitle: string;
  status: 'BUILT' | 'IN PROGRESS' | 'EXPERIMENT' | 'LEARNING';
  problem: string;
  idea: string;
  whatIBuilt: string;
  role: string;
  technologies: string[];
  whatILearned: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface LabItem {
  id: string;
  code: string;
  title: string;
  whatITried: string;
  whatILearned: string;
  technology: string;
  status: 'BUILT' | 'EXPERIMENT' | 'LEARNING' | 'IN PROGRESS';
  image?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; tag: string; level: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  status: string;
  description: string;
  learnings: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  note: string;
}

export interface ArticleItem {
  title: string;
  topic: string;
  readTime: string;
  date: string;
  url: string;
  snippet: string;
}

export interface BuildLinkData {
  id: string;
  name: string;
  tagline: string;
  status: string;
  conciseOverview: string;
  fullOverview: string;
  image: string;
  marketStats: {
    stat: string;
    label: string;
    sublabel: string;
  }[];
  problems: {
    title: string;
    detail: string;
  }[];
  marketGaps: {
    method: string;
    flaw: string;
  }[];
  solutionHighlights: {
    title: string;
    detail: string;
  }[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  equipmentCategories: string[];
  aiFeatures: {
    name: string;
    purpose: string;
    badge: string;
  }[];
  keyFeatures: string[];
  businessModel: {
    stream: string;
    detail: string;
  }[];
  competitiveAdvantages: string[];
  targetUsers: {
    group: string;
    users: string[];
  }[];
  expansionPhases: {
    phase: string;
    region: string;
    locations: string;
  }[];
  go_to_market_strategy: string;
  projectOutcomeVision: string;
}

export const BUILDLINK_DATA: BuildLinkData = {
  id: "buildlink",
  name: "BuildLink",
  tagline: "AI-Powered Construction Equipment Rental Marketplace",
  status: "PRODUCT CASE STUDY",
  conciseOverview: "An AI-powered construction equipment rental marketplace connecting contractors with verified equipment owners through location-based discovery, transparent pricing, digital booking, and intelligent equipment matching.",
  fullOverview: "BuildLink is a digital marketplace designed to simplify construction equipment rental by directly connecting equipment owners with contractors, builders, and engineers. The platform addresses traditional rental challenges—phone calls, brokers, hidden fees, unverified machine availability, and costly downtime—by providing a centralized digital experience for discovery, transparent pricing, verified listings, digital contracts, and logistics.",
  image: "/assets/buildlink-marketplace.jpg",
  marketStats: [
    {
      stat: "₹75 Lakh Cr",
      label: "Global Market",
      sublabel: "Construction equipment rental market by 2027"
    },
    {
      stat: "60%",
      label: "Prefer Renting",
      sublabel: "Contractors choose rental over ownership"
    },
    {
      stat: "18%",
      label: "Annual Growth",
      sublabel: "CAGR in emerging infrastructure markets"
    },
    {
      stat: "₹10 Lakh Cr",
      label: "India Opportunity",
      sublabel: "India's construction equipment market"
    }
  ],
  problems: [
    {
      title: "Phone Calls & Brokers",
      detail: "Hours wasted on manual outreach with middleman brokers and unorganized communication."
    },
    {
      title: "No Transparent Pricing",
      detail: "Hidden or unclear rental fees with no reliable rate comparison across providers."
    },
    {
      title: "Unverified Availability",
      detail: "Machines often unavailable when contractors arrive on site, stalling project schedules."
    },
    {
      title: "Project Delays & Losses",
      detail: "Equipment downtime and unavailability cost contractors thousands of rupees per day."
    }
  ],
  marketGaps: [
    {
      method: "Local Brokers",
      flaw: "High brokerage fees with no accountability or guarantees"
    },
    {
      method: "Personal Contacts",
      flaw: "Limited geographic reach and highly unreliable availability"
    },
    {
      method: "WhatsApp Groups",
      flaw: "No verification, unorganized discussions, and chaotic coordination"
    },
    {
      method: "Traditional Rental Agencies",
      flaw: "Rigid pricing models and slow, paperwork-heavy processes"
    }
  ],
  solutionHighlights: [
    {
      title: "Search Nearby",
      detail: "Find construction equipment based on exact site requirements and geographic location."
    },
    {
      title: "Compare Prices",
      detail: "Instantly view transparent daily and project rental rates with zero hidden fees."
    },
    {
      title: "Verified Owners",
      detail: "Browse trusted, rated equipment owners and verified machine listings."
    },
    {
      title: "Book Instantly",
      detail: "Complete digital contracts, online payments, and site delivery arrangements seamlessly."
    }
  ],
  workflowSteps: [
    {
      step: "01",
      title: "Search & Filter",
      description: "Users find construction equipment based on their requirements and location."
    },
    {
      step: "02",
      title: "List Equipment",
      description: "Equipment owners can list their available machinery on the marketplace."
    },
    {
      step: "03",
      title: "Book & Pay",
      description: "Contractors can select equipment and complete the rental process digitally."
    },
    {
      step: "04",
      title: "Deliver to Site",
      description: "The equipment is transported directly to the required construction site."
    }
  ],
  equipmentCategories: [
    "Excavators & Backhoes",
    "Cranes & Bulldozers",
    "Road Rollers & Pavers",
    "Mixers & Dump Trucks",
    "Forklifts"
  ],
  aiFeatures: [
    {
      name: "AI Matching",
      purpose: "Helps identify the nearest available machines based on user requirements.",
      badge: "PROPOSED AI CAPABILITY"
    },
    {
      name: "Price Optimization",
      purpose: "Helps determine competitive rental rates across demand zones.",
      badge: "PROPOSED AI CAPABILITY"
    },
    {
      name: "Demand Forecasting",
      purpose: "Predicts potential equipment requirements and upcoming project demand.",
      badge: "PROPOSED AI CAPABILITY"
    },
    {
      name: "Route Optimization",
      purpose: "Helps minimize transportation distance and logistics costs for machinery dispatch.",
      badge: "PROPOSED AI CAPABILITY"
    }
  ],
  keyFeatures: [
    "Location-based equipment discovery",
    "Equipment search and filtering",
    "Transparent upfront pricing",
    "Verified owner listings",
    "Real-time equipment availability",
    "Digital booking workflow",
    "Digital contracts & e-signatures",
    "Online secure payments",
    "Equipment transportation & logistics",
    "AI-powered recommendations",
    "Price optimization engine",
    "Demand forecasting analytics",
    "Route optimization for dispatch"
  ],
  businessModel: [
    {
      stream: "Booking Commission",
      detail: "10–15% commission fee per completed equipment rental transaction."
    },
    {
      stream: "Premium Listings",
      detail: "Featured placement and priority visibility for top equipment owners."
    },
    {
      stream: "Monthly Subscriptions",
      detail: "Tiered monthly plans for commercial rental companies and fleet operators."
    },
    {
      stream: "Transportation Logistics",
      detail: "Commission on machinery delivery and logistics partner bookings."
    },
    {
      stream: "Insurance Partnerships",
      detail: "Partnership and referral fees for machine and equipment damage protection."
    }
  ],
  competitiveAdvantages: [
    "Real-time equipment availability tracking",
    "Transparent upfront pricing with zero hidden charges",
    "Verified equipment-owner trusted network",
    "Digital contracts and streamlined online payments",
    "AI-powered recommendations & matching",
    "Faster equipment discovery and project execution"
  ],
  targetUsers: [
    {
      group: "Primary Target (Renters)",
      users: [
        "Contractors",
        "Builders",
        "Civil Engineers",
        "Infrastructure Companies"
      ]
    },
    {
      group: "Secondary Target (Suppliers)",
      users: [
        "Equipment Owners",
        "Rental Companies",
        "Fleet Operators"
      ]
    }
  ],
  expansionPhases: [
    {
      phase: "Phase 1 — Kerala",
      region: "Launch Region",
      locations: "Kochi · Trivandrum · Calicut"
    },
    {
      phase: "Phase 2 — South India",
      region: "Regional Expansion",
      locations: "Karnataka · Tamil Nadu · Telangana"
    },
    {
      phase: "Phase 3 — National",
      region: "Pan-India Scale",
      locations: "Pan-India National Marketplace"
    }
  ],
  go_to_market_strategy: "Customer acquisition via contractor partnerships, construction associations, and equipment owner onboarding campaigns.",
  projectOutcomeVision: "Transforming construction equipment rental from fragmented manual phone calls into a unified, transparent, and intelligent digital ecosystem across India."
};

export const PROFILE = {
  name: "AMRITHA",
  headline: "AI DEVELOPER INTERN × PYTHON LEARNER × BUILDER",
  companySubtext: "AI DEVELOPER INTERN @ EXCAPE.AI",
  heroDescription: "Exploring the space between code, data and AI — turning curiosity into things I can actually build.",
  philosophy: "I am still learning, but I am actively building.",
  
  aboutBio: [
    "I'm Amritha — an AI developer intern who enjoys learning by actually building things. I'm currently developing my Python foundations while exploring how code, data and AI come together.",
    "I'm early in the journey, and that's exactly what this portfolio documents: what I'm learning, what I'm experimenting with and what I build along the way."
  ],

  contact: {
    email: "amrithaanup7@gmail.com",
    instagram: "https://www.instagram.com/amritha.py/",
    medium: "https://medium.com/@amrithaanup7",
    linkedin: "https://www.linkedin.com/in/amritha-anup-79b1a531b",
    resumeUrl: "/resume/amritha-anup-resume.pdf"
  },

  images: {
    heroPortrait: "/assets/amritha-portrait.png",
    presentation: "/assets/amritha-presentation.png",
    gwenHero: "/characters/gwen/gwen-hero.svg",
    gwenHanging: "/characters/gwen/gwen-hanging.svg",
    gwenPeek: "/characters/gwen/gwen-peek.svg",
    pinkHalftone: "/textures/pink-halftone.jpg",
    webSketch: "/textures/hand-web-sketch.jpg"
  },

  featuredWork: BUILDLINK_DATA,

  labItems: [
    {
      id: "lab-001",
      code: "LAB / 001",
      title: "Surprise Website for Mom",
      whatITried: "Designed and built a custom surprise website for my mother as a heartfelt gift to make her smile.",
      whatILearned: "How code can create genuine joy, designing warm thoughtful digital experiences for loved ones, and personal web crafting.",
      technology: "HTML, CSS, JavaScript",
      status: "BUILT" as const
    },
    {
      id: "lab-002",
      code: "LAB / 002",
      title: "Python CSV Data Cleaner",
      whatITried: "Wrote small automation scripts to clean and transform messy datasets.",
      whatILearned: "File I/O in Python, string manipulation, and handling missing data fields.",
      technology: "Python 3.x",
      status: "EXPERIMENT" as const
    },
    {
      id: "lab-003",
      code: "LAB / 003",
      title: "NumPy Array Matrix Lab",
      whatITried: "Explored multi-dimensional array operations and matrix indexing.",
      whatILearned: "Understanding vectorization, shape manipulation, and numerical operations.",
      technology: "Python, NumPy",
      status: "LEARNING" as const
    },
    {
      id: "lab-004",
      code: "LAB / 004",
      title: "Spider Editorial Web Interactions",
      whatITried: "Experimented with custom SVG web lines and mouse trail dynamics.",
      whatILearned: "DOM animation performance, SVG paths, and micro-interactions.",
      technology: "TypeScript, Framer Motion",
      status: "BUILT" as const
    }
  ] as LabItem[],

  skills: {
    currentlyLearning: {
      title: "CURRENTLY LEARNING",
      description: "My daily focus and core language",
      skills: [{ name: "Python", tag: "Core Language", level: "Beginner / Actively Learning" }]
    },
    justStarted: {
      title: "JUST STARTED",
      description: "Numerical computation & arrays",
      skills: [{ name: "NumPy", tag: "Data Processing", level: "Exploring Foundations" }]
    },
    foundations: {
      title: "FOUNDATIONS",
      description: "Web & software basics",
      skills: [
        { name: "HTML & CSS", tag: "Web Design", level: "Practical Application" },
        { name: "Git & GitHub", tag: "Version Control", level: "Basics" }
      ]
    },
    nextPath: {
      title: "NEXT UP",
      description: "Where my curiosity is taking me next",
      skills: [
        { name: "Data Analysis", tag: "Future Step", level: "Planned" },
        { name: "AI / Machine Learning", tag: "Long-term Goal", level: "Aspiring" }
      ]
    }
  },

  experience: {
    role: "AI Developer Intern",
    company: "EXCAPE.AI",
    period: "Present",
    status: "Active Internship",
    description: "Getting hands-on exposure to practical AI concepts, workflows, and tool integrations while strengthening core coding skills.",
    learnings: [
      "Exploring real-world AI applications and developer intern workflows",
      "Building practical scripts and web interfaces",
      "Collaborating with technical teams on AI project experimentation"
    ]
  } as ExperienceItem,

  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "VV College of Science and Technology",
    year: "Graduated",
    note: "Strong theoretical foundations in computer science, programming basics, and web fundamentals."
  } as EducationItem,

  journeySteps: [
    { num: "01", label: "BCA Degree", detail: "VV College of Science & Technology" },
    { num: "02", label: "AI Dev Internship", detail: "EXCAPE.AI — Practical Development" },
    { num: "03", label: "Currently Learning", detail: "Python Foundations & Web Builds" },
    { num: "04", label: "What's Next?", detail: "Data Analysis → AI / ML Deep-Dive" }
  ],

  articles: [
    {
      title: "My First Steps in Python: What I Learned Building Small Scripts",
      topic: "Python / Learning Journey",
      readTime: "4 min read",
      date: "2026",
      url: "https://medium.com/@amrithaanup7",
      snippet: "Reflections on transitioning from theory to writing real Python code, handling bugs, and keeping the building momentum."
    },
    {
      title: "Why Being Early in AI is an Advantage for New Builders",
      topic: "AI / Career Exploration",
      readTime: "5 min read",
      date: "2026",
      url: "https://medium.com/@amrithaanup7",
      snippet: "How starting as an intern right now allows me to learn by doing, test tools, and stay curious without fear."
    },
    {
      title: "Building to Make People Smile: A Surprise Website for My Mother",
      topic: "Creative Web / Personal Projects",
      readTime: "3 min read",
      date: "2026",
      url: "https://medium.com/@amrithaanup7",
      snippet: "Lessons learned from using code to create emotional joy, surprising family with custom web design, and making technology feel personal."
    }
  ] as ArticleItem[]
};
