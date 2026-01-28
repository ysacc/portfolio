export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    stack: string[];
    links: {
        github?: string;
        live?: string;
    };
    highlights: string[];
    role: string;
}

export const projectsData: Project[] = [
    {
        slug: "interbank-erni",
        title: "Interbank Erni",
        shortDescription: "Investment management platform for Interbank clients.",
        description: "Detailed platform for managing investment funds, focused on user experience and real-time data visualization. Built with React.js, Angular, Flutter, Tailwind, and Braze.",
        image: "/projects/erni.png",
        stack: ["React", "Angular", "Flutter", "TailwindCSS", "Braze", "TypeScript", "GTM", "Hotjar"],
        links: {
            live: "https://erni.interfondos.com.pe/",
        },
        highlights: ["Implemented real-time analytics", "Optimized onboarding flow"],
        role: "Front-End Engineer",
    },
    {
        slug: "chambita",
        title: "Chambita Website",
        shortDescription: "Corporate website for employment services.",
        description: "Recruitment platform with advanced filtering and application tracking. Built with Next.js, React, HTML, CSS, and Styled Components.",
        image: "/projects/chambita.jpg",
        stack: ["Next.js", "React", "TypeScript", "Styled Components", "TailwindCSS", "Node.js"],
        links: {
            live: "https://chambita-jet.vercel.app/",
        },
        highlights: ["SEO Optimization", "Mobile-first responsive design"],
        role: "Front-End Engineer",
    },
    {
        slug: "silbia-utp",
        title: "Silbia UTP System",
        shortDescription: "Internal syllabus management for UTP University.",
        description: "Admin platform for managing academic content and internal workflows for UTP. Built with Next.js, React, DS, Azure, Sonar, AWS, and Docker.",
        image: "/projects/Silvia.jpg",
        stack: ["Next.js", "React", "TypeScript", "Azure DevOps", "AWS", "Docker", "SonarQube"],
        links: {
            live: "https://silbia2-dev.utpxpedition.com/",
        },
        highlights: ["Micro-services integration", "Improved admin efficiency by 40%"],
        role: "Front-End Engineer",
    },
    {
        slug: "erp-spsa",
        title: "ERP – Supermercados Peruanos",
        shortDescription: "Internal management system for SPSA.",
        description: "Project developed for the Intercorp Group as a Full Stack Developer. Built with React, Node.js, MySQL, and GCP.",
        image: "/projects/ERP1.jpg",
        stack: ["React", "Node.js", "MySQL", "Oracle", "GCP", "CI/CD", "Docker"],
        links: {},
        highlights: ["Led database design", "Implemented real-time inventory tracking"],
        role: "Full Stack Developer",
    },
    {
        slug: "sanna-scheduling",
        title: "SANNA Scheduling",
        shortDescription: "Appointment scheduling interface for SANNA healthcare.",
        description: "A fast, intuitive medical appointment booking system built from scratch using Next.js, React, and Styled Components.",
        image: "/projects/sanna.jpg",
        stack: ["Next.js", "React", "TypeScript", "Styled Components", "Context API", "Unit Testing"],
        links: {
            live: "https://web-sanna.vercel.app/",
        },
        highlights: ["Accessibility compliance", "State management for multi-step forms"],
        role: "Front-End Engineer",
    },
    {
        slug: "cumpa-peru",
        title: "Cumpa Peru",
        shortDescription: "E-commerce platform for Cumpa Peru.",
        description: "E-commerce developed in Shopify integrated with WordPress and Elementor, including Google Analytics and MercadoPago integrations.",
        image: "/projects/cumpa.jpg",
        stack: ["Shopify", "WordPress", "Elementor", "Google Analytics", "MercadoPago"],
        links: {
            live: "https://cumpaperu.com/",
        },
        highlights: ["Integrated MercadoPago", "Custom Shopify-WordPress sync"],
        role: "Lead Developer",
    },
    {
        slug: "bubba-bags",
        title: "Bubba Bags",
        shortDescription: "Official Bubba Bags e-commerce (Peru).",
        description: "E-commerce built in WooCommerce with WordPress and Elementor, including scheduled maintenance and feature updates.",
        image: "/projects/bubba.jpg",
        stack: ["WooCommerce", "WordPress", "Elementor", "PHP", "MySQL"],
        links: {
            live: "https://bubbabags.com.pe/",
        },
        highlights: ["Increased checkout conversion by 15%", "Mobile optimization"],
        role: "Maintenance Lead",
    },
    {
        slug: "valhalla",
        title: "Valhalla",
        shortDescription: "Air pollution monitoring application.",
        description: "Air pollution monitoring and control application. Built from scratch with React and Styled Components, using Chart.js and MUI libraries. Integrated with backend APIs via Postman and deployed on AWS S3.",
        image: "/projects/valhalla.jpg",
        stack: ["React", "AWS S3", "Python (Backend)", "Node.js", "Chart.js", "MUI", "PostgreSQL"],
        links: {},
        highlights: ["Real-time data visualization", "AWS deployment"],
        role: "Front-End Developer",
    },
    {
        slug: "rick-and-morty-wiki",
        title: "Rick and Morty Wiki",
        shortDescription: "A character wiki for Rick and Morty fans.",
        description: "A wiki app for one of my favorite shows, Rick and Morty. Includes character filtering by name or status. Built from scratch with React, Redux, Express, Node, PostgreSQL, and CSS.",
        image: "/projects/rickandmorty.jpg",
        stack: ["React", "Redux", "Express", "Node.js", "PostgreSQL", "CSS3"],
        links: {
            live: "https://rick-and-morty-iota-cyan.vercel.app/",
            github: "https://github.com/ysacc/rick-and-morty",
        },
        highlights: ["Character filtering", "Redux state management"],
        role: "Self-Project",
    },
    {
        slug: "redflix",
        title: "RedFlix",
        shortDescription: "Netflix clone with movie catalog.",
        description: "A replica of a popular streaming platform. Built from scratch with React, HTML, and CSS.",
        image: "/projects/RedFlix.jpg",
        stack: ["React", "JavaScript", "HTML5", "CSS3", "Firebase"],
        links: {
            live: "https://redflix-two.vercel.app/",
            github: "https://github.com/ysacc/RedFlix",
        },
        highlights: ["Responsive UI", "Dynamic movie listing"],
        role: "Self-Project",
    },
    {
        slug: "web-model",
        title: "Web-Model",
        shortDescription: "Practice landing page for modern UI.",
        description: "A personal web page created for practice. Built from scratch with React, HTML, and CSS.",
        image: "/projects/WebModel.jpg",
        stack: ["React", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
        links: {
            live: "https://web-model.vercel.app/",
            github: "https://github.com/ysacc/WebModel",
        },
        highlights: ["Practice with CSS animations", "Mobile-first design"],
        role: "Self-Project",
    },
];
