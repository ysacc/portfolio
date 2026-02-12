export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  tech?: string[];
}

export const resumeData = {
  summary:
    "Senior Full Stack Developer with over 7 years of experience building modern, scalable, and user-centric web applications. Specialized in React.js, Next.js, and TypeScript for the front-end, and Node.js/AWS for the back-end. Strong focus on componentization, design systems, performance, and maintainability. Extensive experience in high-demand enterprise and banking platforms (BBVA, Interbank, SANNA), leading seamless integration between front-end and back-end (REST APIs, cloud services). My Full Stack expertise enables me to deliver robust solutions across the entire development lifecycle.",
  experience: [
    {
      company: "Entelgy",
      role: "Senior Front-End Developer",
      period: "04/2024 – 12/2025",
      description:
        "Front-End interface development for investment and customer management banking platforms (BBVA, Interbank).",
      highlights: [
        "Reusable component construction with React and TypeScript, following scalability and Clean Code principles.",
        "Performance improvements, production incident resolution, and visual support for marketing campaigns.",
        "Integration with analytics and tracking tools (GTM, Braze, Hotjar).",
        "Worked under Scrum and Kanban agile methodologies in multi-team environments.",
      ],
      tech: ["React", "TypeScript", "GTM", "Braze", "Hotjar", "Scrum"],
    },
    {
      company: "SafetyMind",
      role: "Senior Front-End / Full Stack Developer",
      period: "05/2024 – 12/2024",
      description:
        "Web and mobile interface development for a real-time risk monitoring and control platform.",
      highlights: [
        "Implementation of dashboards, notification flows, and data visualization.",
        "Integration with Node.js backend services and REST APIs deployed on AWS.",
      ],
      tech: ["Node.js", "AWS", "APIs REST", "React Native"],
    },
    {
      company: "CSTI Corp",
      role: "Front-End Developer",
      period: "12/2023 – 07/2024",
      description:
        "Internal web application development for Laureate Education / UTP.",
      highlights: [
        "Optimization of reusable components and improvement of code maintainability.",
        "Worked with React, TypeScript, Azure DevOps, and Jira.",
      ],
      tech: ["React", "TypeScript", "Azure DevOps", "Jira"],
    },
    {
      company: "Altimea",
      role: "Front-End Developer",
      period: "12/2023 – 02/2024",
      description:
        "Development of the internal academic management system for the Universidad Tecnológica del Perú.",
      highlights: [
        "Creation of the Front-End base project and mentoring for junior developers.",
        "Used React, TypeScript, TailwindCSS, SonarQube, and Azure.",
      ],
      tech: ["React", "TypeScript", "TailwindCSS", "SonarQube", "Azure"],
    },
    {
      company: "Beyond",
      role: "Front-End Developer",
      period: "02/2022 – 02/2023",
      description:
        "Web platform development and maintenance for Pacífico / SANNA.",
      highlights: [
        "Creation of reusable components and improvement of delivery speed by approximately 30%.",
        "Implementation of continuous integration (CI/CD) and worked with React, Next.js and TypeScript.",
      ],
      tech: ["React", "Next.js", "TypeScript", "CI/CD"],
    },
    {
      company: "IPS Consulting",
      role: "Full Stack Developer",
      period: "05/2022 – 12/2023",
      description:
        "Involved in the Front-End development of a corporate ERP for Supermercados Peruanos.",
      highlights: [
        "Integration of web interfaces with backend services and REST APIs.",
        "Collaboration on automated deployments and CI/CD flows.",
      ],
      tech: ["React", "Node.js", "APIs REST", "CI/CD"],
    },
  ],
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Vue.js",
      "TailwindCSS",
      "Design Systems",
    ],
    state: ["Context API", "Redux", "Zustand"],
    quality: ["Performance", "Accessibility", "Clean Code", "Testing (Jest)"],
    backend: ["Node.js", "REST APIs"],
    cloud: ["AWS", "GitLab CI/CD"],
    methodologies: ["Scrum", "Kanban"],
  },
  education: [
    {
      degree: "Computer Science / Information Technology",
      institution: "Relevant Institution",
      period: "2011 - 2015",
    },
  ],
  certifications: [
    "React Basic",
    "JS Intermediate",
    "Python Basic",
    "Intro Cybersecurity",
    "Front End Dev Libraries",
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "B1 / Professional" },
    { name: "German", level: "A1" },
  ],
};
