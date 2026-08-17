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

export const PROFILE = {
  name: "AMRITHA",
  headline: "AI INTERN × PYTHON LEARNER × BUILDER",
  companySubtext: "AI INTERN @ EXCAPE.AI",
  heroDescription: "Exploring the space between code, data and AI — turning curiosity into things I can actually build.",
  philosophy: "I am still learning, but I am actively building.",
  
  aboutBio: [
    "I'm Amritha — an AI intern who enjoys learning by actually building things. I'm currently developing my Python foundations while exploring how code, data and AI come together.",
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

  featuredWork: {
    id: "buildlink",
    name: "BUILDLINK",
    subtitle: "A resource platform built for early-stage tech creators",
    status: "IN PROGRESS" as const,
    problem: "Navigating tech toolkits, learning resources, and development links is often fragmented and overwhelming for early builders.",
    idea: "A clean, structured platform to organize, curate, and share essential building blocks for projects.",
    whatIBuilt: "Interactive web dashboard interface prototype integrated with Python-backed link categorization logic.",
    role: "Creator & Developer",
    technologies: ["Python", "HTML/CSS", "JavaScript", "Data Structures"],
    whatILearned: "Structuring clean Python data handlers, state management, and user interface composition.",
    image: "/assets/amritha-presentation.png",
    githubUrl: "https://github.com/amrithaanup7",
    liveUrl: "#"
  },

  labItems: [
    {
      id: "lab-001",
      code: "LAB / 001",
      title: "Mother's Custom Showcase Website",
      whatITried: "Designed and built a practical personal website for my mother to present her work cleanly.",
      whatILearned: "Responsive layout design, typography pairing, and building for real non-technical users.",
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
    role: "AI Intern",
    company: "EXCAPE.AI",
    period: "Present",
    status: "Active Internship",
    description: "Getting hands-on exposure to practical AI concepts, workflows, and tool integrations while strengthening core coding skills.",
    learnings: [
      "Exploring real-world AI applications and intern workflows",
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
    { num: "02", label: "AI Internship", detail: "EXCAPE.AI — Practical Exploration" },
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
      title: "Building for Real People: Creating a Website for My Mother",
      topic: "Web Design / Practical Work",
      readTime: "3 min read",
      date: "2026",
      url: "https://medium.com/@amrithaanup7",
      snippet: "Lessons learned from listening to user requirements and delivering a clean, usable web project for family."
    }
  ] as ArticleItem[]
};
