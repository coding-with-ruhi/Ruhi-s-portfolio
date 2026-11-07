export interface NavLink {
  label: string;
  href: string;
}

export interface FactItem {
  label: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
  label?: 'Team project' | 'In progress' | string;
  link?: string;
  inProgressNotice?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  dates: string;
  location?: string;
  isCurrent?: boolean;
  bullets: string[];
  tags: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
}

export interface ProfileData {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    logo: string;
    skipToContent: string;
    mobileMenuOpen: string;
    mobileMenuClose: string;
    links: NavLink[];
    socials: SocialLink[];
  };
  hero: {
    nameLine1: string;
    nameLine2: string;
    tagline: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    scrollHint: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    facts: FactItem[];
    skillsHeadingSrOnly: string;
    skillsRow1: string[];
    skillsRow2: string[];
    allSkills: string[];
  };
  projectsSection: {
    heading: string;
    allReposLink: {
      label: string;
      href: string;
    };
    viewGithubLabel: string;
    defaultInProgressNotice: string;
    projects: ProjectItem[];
  };
  experienceSection: {
    heading: string;
    items: ExperienceItem[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaButton: {
      label: string;
      href: string;
    };
    links: {
      label: string;
      href: string;
    }[];
  };
  footer: {
    copyrightName: string;
  };
}

export const profileData: ProfileData = {
  meta: {
    title: 'Ruhi Sharma',
    description:
      'Ruhi Sharma: AI, cybersecurity and full-stack projects. Making things smarter, while looking for the loopholes.',
  },
  navigation: {
    logo: 'Ruhi Sharma',
    skipToContent: 'Skip to content',
    mobileMenuOpen: 'Menu',
    mobileMenuClose: 'Close',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    socials: [
      {
        name: 'GitHub',
        href: 'https://github.com/coding-with-ruhi',
        ariaLabel: 'Visit Ruhi Sharma on GitHub',
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ruhiisharma/',
        ariaLabel: 'Visit Ruhi Sharma on LinkedIn',
      },
    ],
  },
  hero: {
    nameLine1: 'Ruhi',
    nameLine2: 'Sharma',
    tagline: 'Making things smarter, while looking for the loopholes.',
    primaryCta: {
      label: 'View work',
      href: '#projects',
    },
    secondaryCta: {
      label: 'GitHub ↗',
      href: 'https://github.com/coding-with-ruhi',
    },
    scrollHint: 'Scroll',
  },
  about: {
    heading: 'About',
    paragraphs: [
      "I'm an undergraduate at REVA University, pursuing Artificial Intelligence and Data Science, with a natural curiosity about technology and how things work. I enjoy exploring different areas of tech, from full-stack development and machine learning to cybersecurity, DevOps, and even getting hands-on with hardware like Raspberry Pi.",
      "I'm someone who loves learning by building, experimenting with new tools, breaking things (occasionally!), and figuring out how to make them work. Whether it's developing an application, working with sensors, or exploring something completely new, I enjoy the process of turning ideas into something real. Always curious, always learning, and always looking for something new to build!",
    ],
    facts: [
      {
        label: 'Graduating 2027',
        detail: 'B.Tech AI & Data Science, REVA University',
      },
      {
        label: 'CGPA 8.07',
        detail: 'REVA University, Bengaluru',
      },
    ],
    skillsHeadingSrOnly: 'Technical Skills and Technologies',
    skillsRow1: [
      'Python',
      'TypeScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'Flask',
      'Streamlit',
      'Node.js',
      'Raspberry Pi',
      'Computer Vision',
      'Git',
    ],
    skillsRow2: [
      'Gemini',
      'OpenAI API',
      'Ollama',
      'LlamaIndex',
      'ChromaDB',
      'RAG',
      'LLM Security',
      'OWASP',
      'Kali Linux',
      'Security Onion',
      'Web3.js',
    ],
    allSkills: [
      'Python',
      'TypeScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'Flask',
      'Streamlit',
      'Node.js',
      'Raspberry Pi',
      'Computer Vision',
      'Git',
      'Gemini',
      'OpenAI API',
      'Ollama',
      'LlamaIndex',
      'ChromaDB',
      'RAG',
      'LLM Security',
      'OWASP',
      'Kali Linux',
      'Security Onion',
      'Web3.js',
    ],
  },
  projectsSection: {
    heading: 'Projects',
    allReposLink: {
      label: 'All repos ↗',
      href: 'https://github.com/coding-with-ruhi',
    },
    viewGithubLabel: 'View on GitHub ↗',
    defaultInProgressNotice: 'Hardware build, software integration in progress',
    projects: [
      {
        id: 'ai-dashcam',
        number: '01',
        name: 'AI Dashcam',
        featured: true,
        label: 'In progress',
        description:
          'A Raspberry Pi smart dashcam that combines camera modules, GNSS/GPS and IMU sensors to record driving footage with synchronized time and location, and uses AI video analysis to detect motion and events for road safety and post-incident review.',
        tags: ['Raspberry Pi', 'Computer Vision', 'GNSS/GPS', 'IMU Sensors'],
        inProgressNotice: 'Hardware build, software integration in progress',
      },
      {
        id: 'ai-security-gateway',
        number: '02',
        name: 'AI Security Gateway',
        description:
          'A firewall for LLMs. It inspects every prompt before it reaches the model, scores risk from 0 to 10, strips injected instructions and redacts sensitive data, with a live SOC-style dashboard.',
        tags: ['LLM Security', 'Prompt Injection', 'Risk Scoring', 'SOC Dashboard'],
        link: 'https://github.com/coding-with-ruhi/AI-Security-Gateway',
      },
      {
        id: 'crimedna',
        number: '03',
        name: 'CrimeDNA',
        label: 'Team project',
        description:
          'AI crime intelligence platform for Karnataka State Police FIR data. An 11-stage ML pipeline turns isolated FIRs into a behavioral network of patterns, hotspots and links between cases.',
        tags: ['Python', 'React', 'TypeScript', 'Node.js'],
        link: 'https://github.com/coding-with-ruhi/CrimeDNA',
      },
      {
        id: 'trustscore-ai-lens',
        number: '04',
        name: 'TrustScore AI Lens',
        description:
          'Protects online shoppers by catching phishing links, typosquatted domains and fake reviews, combining heuristic checks with Gemini 2.5 Flash. F1-score of 0.895.',
        tags: ['React', 'TypeScript', 'Gemini 2.5 Flash', 'Tailwind CSS'],
        link: 'https://github.com/coding-with-ruhi/trustscore-ai-lens',
      },
      {
        id: 'ai-security-agent',
        number: '05',
        name: 'AI Security Agent',
        description:
          'Reads authentication logs, flags suspicious IPs and targeted accounts, scores risk and writes incident reports with a local LLM, with human approval before any response action.',
        tags: ['Python', 'Ollama', 'Llama 3.2'],
        link: 'https://github.com/coding-with-ruhi/Ai-Security-Agent',
      },
      {
        id: 'clarity-ai',
        number: '06',
        name: 'Clarity AI',
        label: 'Team project',
        description:
          'A digital wellness and media literacy platform. It checks text for credibility, bias and logical fallacies, scores cognitive load and guides users through a reflection process.',
        tags: ['Python', 'Flask', 'JavaScript', 'LLMs'],
        link: 'https://github.com/arnav-eluri/clarity_ai',
      },
      {
        id: 'farmtrace',
        number: '07',
        name: 'FarmTrace',
        label: 'Team project',
        description:
          'Farm-to-buyer provenance for produce. Each crop batch gets a unique ID stored on blockchain, with a cloud fallback, and a QR code buyers scan to verify where it came from.',
        tags: ['React', 'TypeScript', 'Web3.js', 'QR Codes'],
        link: 'https://github.com/Sanjanarprasad/Supply_chain',
      },
    ],
  },
  experienceSection: {
    heading: 'Experience',
    items: [
      {
        id: 'kratoscloud',
        role: 'Project Intern',
        company: 'KratosCloud Consulting',
        dates: 'Oct – Present',
        isCurrent: true,
        bullets: [
          'Developing an AI-powered dashcam using Raspberry Pi.',
          'Integrating cameras, GPS/GNSS and IMU sensors.',
          'Building Python-based software for real-time data processing.',
          'Implementing AI-driven event detection and automated video recording.',
        ],
        tags: ['Raspberry Pi', 'Python', 'OpenCV', 'Linux', 'ML'],
      },
      {
        id: 'seconize',
        role: 'Software Engineer Intern',
        company: 'Seconize Technologies',
        dates: 'Aug – Oct',
        location: 'Bengaluru',
        bullets: [
          'Built an LLM-powered tool that tests REST APIs against the OWASP API Top 10, with automated test generation, risk scoring and reports.',
          'Resolved 30+ frontend and backend bugs within 4-week sprints.',
        ],
        tags: ['LLMs', 'API Security', 'OWASP'],
      },
    ],
  },
  contact: {
    eyebrow: "What's next?",
    heading: 'Get in touch',
    description:
      'Open to software engineering and security research internships. If you have a role or just want to chat, my inbox is open.',
    ctaButton: {
      label: "Let's connect",
      href: 'mailto:ruhiskz.sharma@gmail.com',
    },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/coding-with-ruhi',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ruhiisharma/',
      },
      {
        label: 'Email',
        href: 'mailto:ruhiskz.sharma@gmail.com',
      },
    ],
  },
  footer: {
    copyrightName: 'Ruhi Sharma',
  },
};

