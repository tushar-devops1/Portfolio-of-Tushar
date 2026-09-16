export const personalInfo = {
  name: "Tushar Gavali",
  title: "Entry-Level DevOps Engineer & Cloud Specialist",
  roles: [
    "DevOps Engineer",
    "Cloud Support Engineer",
    "Build & Release Engineer",
    "Backend Developer",
    "Python Developer",
    "Linux & Automation Specialist"
  ],
  location: "Pune, Maharashtra, India",
  email: "133tushargavali@gmail.com",
  phone: "+91 9022655575",
  github: "https://github.com/tushar-devops1",
  linkedin: "https://linkedin.com/in/tushar-gavali-590662314",
  twitter: "https://x.com",
  discord: "tushargavali#0001",
  bio: "Entry-level DevOps Engineer with a Bachelor of Computer Applications (BCA) and hands-on experience in Docker containerization, Jenkins CI/CD pipeline setup, Terraform Infrastructure as Code (IaC), and Linux system administration. Automated deployments and standardized container lifecycles, reducing Docker image size by 40% and manual deployment steps on AWS.",
  stats: [
    { label: "Degree Completed", value: "BCA", icon: "Award" },
    { label: "Docker Image Reduction", value: "40%", icon: "FolderCheck" },
    { label: "AWS Cloud Uptime", value: "99.9%", icon: "GitCommit" },
    { label: "Infra Cost Savings", value: "30%", icon: "Smile" }
  ]
};

export const aboutTabs = [
  {
    id: "bio",
    title: "My Journey",
    content: "Graduated with a Bachelor of Computer Applications (BCA) from B.P.H.E. Society's Ahmednagar College. Passionate about cloud infrastructure, automation pipelines, and container management. Completed Deloitte Australia's Technology Virtual Internship in Python software development and built production-ready DevOps and Full-Stack projects."
  },
  {
    id: "philosophy",
    title: "Engineering Philosophy",
    content: "Infrastructure should be reproducible, secure, and self-healing. I prioritize Infrastructure as Code (IaC) with Terraform, optimized multi-stage Docker container builds, automated Jenkins CI/CD pipelines, and robust Linux administration with zero downtime."
  },
  {
    id: "stack-overview",
    title: "Tech Ecosystem",
    content: "My toolset centers on AWS (EC2, VPC, S3, ELB, Auto Scaling, IAM), Docker containerization, Jenkins CI/CD, Terraform IaC, Nginx web server, Linux (Ubuntu/CentOS/Amazon Linux), Bash/Shell scripting, Python, and Full-Stack development with React 18, Node.js, Express, and SQLite."
  }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "Python Development Virtual Intern",
    company: "Deloitte Australia (Technology Job Simulation)",
    period: "2024",
    location: "Remote",
    type: "Virtual Internship",
    description: "Completed a simulated Python software development project applying object-oriented programming and agile methodologies under enterprise governance guidelines.",
    achievements: [
      "Completed simulated Python software engineering tasks implementing object-oriented programming principles.",
      "Followed industry best practices for code quality, unit testing, and Git version control within enterprise security standards."
    ],
    tech: ["Python", "OOP", "Agile", "Git", "Testing"]
  }
];

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "devops", label: "DevOps & Containers" },
  { id: "cloud", label: "Cloud & IaC" },
  { id: "scripting", label: "Automation & Linux" },
  { id: "fullstack", label: "Full-Stack & Web" }
];

export const skillsData = [
  // DevOps & Containers
  { name: "Docker & Containerization", level: 90, category: "devops", icon: "Container", exp: "2 yrs", highlight: true },
  { name: "Jenkins & CI/CD Pipelines", level: 88, category: "devops", icon: "GitBranch", exp: "2 yrs", highlight: true },
  { name: "Multi-Stage Docker Builds", level: 92, category: "devops", icon: "Boxes", exp: "2 yrs", highlight: true },
  { name: "Git & GitHub Workflow", level: 90, category: "devops", icon: "GitBranch", exp: "3 yrs", highlight: false },

  // Cloud & IaC
  { name: "AWS (EC2, VPC, S3, ELB, Auto Scaling)", level: 88, category: "cloud", icon: "Cloud", exp: "2 yrs", highlight: true },
  { name: "Terraform (Infrastructure as Code)", level: 85, category: "cloud", icon: "Layers", exp: "1 yr", highlight: true },
  { name: "Networking (Subnets, Security Groups, DNS)", level: 85, category: "cloud", icon: "Network", exp: "2 yrs", highlight: false },
  { name: "Nginx Web Server Configuration", level: 88, category: "cloud", icon: "Server", exp: "2 yrs", highlight: false },

  // Automation & Linux
  { name: "Linux System Admin (Ubuntu/CentOS/Amazon Linux)", level: 90, category: "scripting", icon: "Terminal", exp: "3 yrs", highlight: true },
  { name: "Bash & Shell Scripting", level: 88, category: "scripting", icon: "FileCode2", exp: "2 yrs", highlight: true },
  { name: "Python (OOP & Automation)", level: 85, category: "scripting", icon: "Code2", exp: "2 yrs", highlight: true },
  { name: "System Logging & Incident Troubleshooting", level: 86, category: "scripting", icon: "Wrench", exp: "2 yrs", highlight: false },

  // Full-Stack & Web
  { name: "React 18 & Vite Frontend", level: 85, category: "fullstack", icon: "Code2", exp: "2 yrs", highlight: false },
  { name: "Node.js & Express REST APIs", level: 84, category: "fullstack", icon: "Server", exp: "2 yrs", highlight: false },
  { name: "SQLite & Database Management", level: 82, category: "fullstack", icon: "Database", exp: "2 yrs", highlight: false },
  { name: "JWT Auth & Cryptography (scrypt)", level: 85, category: "fullstack", icon: "CheckCircle2", exp: "2 yrs", highlight: false }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "fullstack", label: "Full-Stack Web" },
  { id: "automation", label: "Containers & Automation" }
];

export const projectsData = [
  {
    id: "proj-1",
    title: "Spotify Clone — Cloneify",
    category: "fullstack",
    subtitle: "Full-Stack Music Streaming Web App with JWT Auth & Cloudflare Tunnel",
    description: "Built a full-stack Spotify-style music streaming web application with React 18, Vite, Node.js, Express, and SQLite. Features password hashing with scrypt, 7-day JWT session tokens, persistent player controls, and 56 seeded songs.",
    image: "https://images.unsplash.com/photo-1614680376593-902f749f7e94?auto=format&fit=crop&w=1200&q=80",
    tags: ["React 18", "Node.js", "Express", "SQLite", "JWT", "REST API", "Cloudflare Tunnel"],
    featured: true,
    github: "https://github.com/tushar-devops1",
    liveDemo: "https://example.com",
    metrics: [
      { label: "Seeded Songs", val: "56" },
      { label: "Token Validity", val: "7 Days" },
      { label: "Architecture", val: "Full-Stack" }
    ],
    details: {
      challenge: "Building a fluid music player UI with persistent play state, debounced live search, genre filters, and secure authentication.",
      solution: "Implemented React 18 hooks with Zustand/Context for global player state, scrypt password hashing for security, and published publicly via Cloudflare tunnel.",
      architecture: [
        "React 18 + Vite frontend with debounced search & custom audio player",
        "Node.js + Express REST API with SQLite database persistence",
        "Cloudflare Tunnel for public live deployment"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1614680376593-902f749f7e94?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: "proj-2",
    title: "Cloud Portfolio Deployment with Nginx & Jenkins",
    category: "devops",
    subtitle: "Automated CI/CD Web Hosting on AWS EC2",
    description: "Deployed and hosted a production-ready portfolio website on AWS EC2 using Nginx as a reverse proxy, resolving complex server block & permission issues, and configuring automated Jenkins CI/CD build pipelines.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["AWS", "EC2", "Nginx", "Jenkins", "CI/CD", "Linux", "Bash"],
    featured: true,
    github: "https://github.com/tushar-devops1",
    liveDemo: "https://example.com",
    metrics: [
      { label: "Uptime", val: "99.9%" },
      { label: "Deploy Time", val: "-60%" },
      { label: "Pipeline", val: "Jenkins CI/CD" }
    ],
    details: {
      challenge: "Ensuring zero-downtime automated deployment pipelines and solving Nginx server block permissions on Linux EC2.",
      solution: "Configured Nginx reverse proxy with optimized static asset caching and built a automated Jenkins pipeline triggered on Git push events.",
      architecture: [
        "AWS EC2 instance running Ubuntu Linux",
        "Jenkins CI/CD server for automated build and release",
        "Nginx web server with optimized server blocks"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: "proj-3",
    title: "Containerized Python Application",
    category: "automation",
    subtitle: "Optimized Multi-Stage Docker Build & Lifecycle Management",
    description: "Developed a production-ready Python application using OOP design patterns. Created optimized multi-stage Dockerfiles that reduced image sizes by 40% and standardized dev, staging, and production environments.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Docker", "Multi-Stage Build", "Linux", "Container Lifecycle"],
    featured: true,
    github: "https://github.com/tushar-devops1",
    liveDemo: "https://example.com",
    metrics: [
      { label: "Image Size Redux", val: "40%" },
      { label: "Build Time", val: "-50%" }
    ],
    details: {
      challenge: "Reducing bulky Python base image sizes and maintaining consistent container environments across local development and production.",
      solution: "Utilized multi-stage Docker builds to decouple build dependencies from runtime environments and implemented Docker volume networking standards.",
      architecture: [
        "Python Object-Oriented application core",
        "Multi-stage Dockerfile using Alpine base images",
        "Docker Compose setup for dev & production environments"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: "proj-4",
    title: "AWS Auto-Scaling Web Application",
    category: "devops",
    subtitle: "High-Availability Load Balanced Infrastructure",
    description: "Architected and deployed a highly available web application on AWS achieving 99.9% uptime using Application Load Balancers (ALB) across multi-AZ EC2 instances, reducing cloud costs by 30%.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    tags: ["AWS", "EC2", "ALB", "Auto Scaling", "VPC", "Security Groups", "Linux"],
    featured: false,
    github: "https://github.com/tushar-devops1",
    liveDemo: "https://example.com",
    metrics: [
      { label: "Uptime SLA", val: "99.9%" },
      { label: "Cost Savings", val: "30%" }
    ],
    details: {
      challenge: "Handling dynamic traffic spikes while minimizing idle cloud computing expenses.",
      solution: "Implemented AWS Auto Scaling groups triggered by CPU/Network thresholds, coupled with Application Load Balancer (ALB) traffic distribution.",
      architecture: [
        "AWS VPC with Public/Private subnets across Multi-AZs",
        "Application Load Balancer (ALB) & Auto Scaling Group",
        "Least-privilege Security Groups & IAM roles"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  },
  {
    id: "proj-5",
    title: "Portfolio Website — Cloud & DevOps Engineer",
    category: "fullstack",
    subtitle: "Interactive React 18 Portfolio Deployed on Vercel",
    description: "A luxury, interactive single-page portfolio built with React 18, Vite, and Tailwind CSS. Features an animated canvas-based particle network, custom glowing ring cursor, typewriter role animations, 3D tilt hero card, glassmorphism cards, scroll progress bar, scroll-spy navigation, and confetti-enabled project showcase. Fully responsive with a mobile hamburger drawer. Deployed on Vercel's global edge network for optimal performance.",
    image: "https://images.unsplash.com/photo-1488571554024-6a0c0b70a4e9?auto=format&fit=crop&w=1200&q=80",
    tags: ["React 18", "Vite", "Tailwind CSS", "JavaScript", "Vercel", "Responsive Design"],
    featured: true,
    github: "https://github.com/tushar-devops1/Portfolio-of-Tushar",
    liveDemo: "https://tushar-gavali.vercel.app",
    metrics: [
      { label: "Page Load Time", val: "< 1s" },
      { label: "Lighthouse Performance", val: "95+" },
      { label: "Uptime", val: "99.9%" },
      { label: "Global CDN", val: "Vercel Edge" }
    ],
    details: {
      challenge: "Building a visually striking, highly interactive portfolio that showcases DevOps and full-stack expertise while maintaining excellent performance and responsiveness across all devices.",
      solution: "Architected a modular component-based React 18 application with Vite for blazing-fast builds, Tailwind CSS for utility-first styling with custom glassmorphism effects, and deployed to Vercel's global edge network for instant worldwide delivery.",
      architecture: [
        "React 18 + Vite SPA with modular component architecture and hook-based state",
        "Tailwind CSS with custom amber/purple palette and glassmorphism card effects",
        "Canvas-based interactive particle network with mouse interaction",
        "Custom glowing ring cursor, typewriter role animations, and 3D tilt hero card",
        "Vercel global edge network deployment with automatic CI/CD from GitHub"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1488571554024-6a0c0b70a4e9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Deloitte Australia Technology Job Simulation",
    issuer: "Deloitte Australia (Virtual Internship)",
    date: "2024",
    icon: "Award",
    credentialId: "DELOITTE-PYTHON-2024",
    link: "https://forage.com"
  },
  {
    id: "cert-2",
    title: "AWS Cloud Computing Technical Training",
    issuer: "Amazon Web Services (AWS)",
    date: "2024",
    icon: "Cloud",
    credentialId: "AWS-DEV-TRAINING",
    link: "https://aws.amazon.com"
  },
  {
    id: "cert-3",
    title: "Docker Containerization & Terraform IaC Mastery",
    issuer: "DevOps Engineering Training",
    date: "2024",
    icon: "Container",
    credentialId: "DEVOPS-DOCKER-TF-2024",
    link: "https://docker.com"
  }
];

export const educationData = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Applications (BCA)",
    field: "Computer Science",
    institution: "B.P.H.E. Society's Ahmednagar College",
    location: "Ahmednagar, Maharashtra",
    period: "March 2020 — November 2023"
  }
];

export const testimonialsData = [
  {
    quote: "Tushar demonstrated strong Python software development skills, clean coding practices, and disciplined Git version control during the Deloitte Australia simulation.",
    author: "Deloitte Australia Tech Team",
    role: "Virtual Internship Mentor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
  }
];
