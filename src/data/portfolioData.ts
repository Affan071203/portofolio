import { ProjectItem, ExperienceItem, SkillCategory, EducationItem } from '../types';

import profilePhotoImg from '../assets/images/profile.jpg';
import avatarSquareImg from '../assets/images/avatar-square.jpg';
import projectWismaImg from '../assets/images/project-wisma-migas.jpeg';
import projectKlinikImg from '../assets/images/project-klinik.jpeg';
import projectBioskopImg from '../assets/images/project-bioskop.svg';
import projectLazadaImg from '../assets/images/project-ml-lazada.jpeg';
import cvPdfFile from '../assets/Affan_Agung_Prabowo_CV.pdf';

export const PERSONAL_INFO = {
  name: "AFFAN AGUNG PRABOWO",
  title: "IT Professional | Customer Experience | Technology Solutions",
  shortName: "Affan",
  tagline: "Bridging technology, customer experience, and business solutions through effective communication, technical expertise, and a problem-solving mindset.",
  bio: "Informatics Engineering graduate with an interest in IT Services, Customer Experience, Technical Solutions, and Digital Business Development. Proven ability to translate complex technical jargon into actionable solutions, manage client expectations, and optimize digital workflows.",
  aboutDetailed: [
    "I am an Informatics Engineering graduate with a strong passion for technology, customer service excellence, and digital business development.",
    "Throughout my academic and professional journey, I have focused on solving real-world technical problems, communicating with diverse stakeholders, and transforming complex technical workflows into intuitive, practical experiences.",
    "My goal is to create measurable value for progressive organizations by combining deep technical understanding, customer-centric empathy, and business growth awareness."
  ],
  contacts: {
    email: "affanagung85@gmail.com",
    whatsapp: "+62 815-5385-7851",
    whatsappLink: "https://wa.me/6281553857851?text=Hello%20Affan,%20I%20would%20like%20to%20discuss%20a%20professional%20opportunity.",
    linkedin: "https://www.linkedin.com/in/affan-agung-prabowo",
    github: "https://github.com/Affan071203",
    location: "Bojonegoro, East Java, Indonesia",
    status: "Available for Immediate Opportunities"
  },
  cvPdf: cvPdfFile,
  profilePhoto: profilePhotoImg,
  avatarPhoto: avatarSquareImg
};

export const CORE_PILLARS = [
  {
    title: "Technical Knowledge",
    desc: "Solid understanding of software, hardware, networks, and distributed systems to troubleshoot effectively.",
    icon: "Cpu"
  },
  {
    title: "Customer Service Excellence",
    desc: "Empathetic communication, high emotional intelligence, and prompt conflict resolution under pressure.",
    icon: "Headphones"
  },
  {
    title: "Business & Marketing Alignment",
    desc: "Aligning digital IT capabilities with customer conversion, stakeholder needs, and commercial objectives.",
    icon: "TrendingUp"
  },
  {
    title: "Proactive Problem Solving",
    desc: "Systematic root-cause diagnosis, structured workflow management, and clear technical documentation.",
    icon: "ShieldCheck"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Informatics Engineering (S.Kom)",
    institution: "Universitas Nahdlatul Ulama Sunan Giri Bojonegoro",
    period: "2022 — 2026",
    gpa: "GPA 3.93 / 4.00 (Cum Laude)",
    honors: "Cum Laude Graduate",
    description: "Focus on Web & Mobile Software Engineering, Network Infrastructure, Machine Learning Sentiment Analysis, and Database Management Systems."
  },
  {
    degree: "Social Sciences (IPS)",
    institution: "MA Wali Songo",
    period: "2019 — 2022",
    description: "Fostered a foundational understanding of social dynamics, human psychology, interpersonal empathy, and persuasive communication."
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "kaisar-cs",
    role: "Supervisor & Customer Service",
    company: "Kaisar Digital Audio Vidio",
    period: "2023 — 2026",
    badge: "Core CS IT Role",
    badgeColor: "emerald",
    summary: "Led transmission network data input-output operations and acted as the foremost frontline specialist for technical consultations and customer complaint resolution.",
    bullets: [
      {
        label: "Network Monitoring & Triage",
        text: "Monitored and verified real-time transmission network data streams, proactively detecting transmission anomalies before widespread client disruption."
      },
      {
        label: "Empathetic Problem Resolution",
        text: "Handled inbound technical escalations with an empathetic approach, conducted structured diagnostics, and guided clients step-by-step through connection restoration."
      },
      {
        label: "Client Retention & Impact",
        text: "Maintained client trust, reduced repeat escalations by compiling issue logs, and provided root-cause recommendations to the engineering team."
      }
    ]
  },
  {
    id: "wisma-migas-pm",
    role: "Project Manager — Wisma Migas 2 Web System",
    company: "Wisma Migas 2",
    period: "2025",
    badge: "Marketing & PM IT Role",
    badgeColor: "blue",
    summary: "Took end-to-end ownership of project strategy, workflow mapping, and delivery governance from initial stakeholder consultation to final handover.",
    bullets: [
      {
        label: "Stakeholder Alignment",
        text: "Conducted in-depth consultative sessions with client management to elicit, document, and prioritize business rules for hospitality management."
      },
      {
        label: "Agile Project Governance",
        text: "Formulated clear milestones, managed development backlogs, and conducted quality assurance reviews ensuring 100% adherence to technical specifications."
      },
      {
        label: "Successful Adoption",
        text: "Delivered a fully operational web platform on schedule, enabling internal staff to operate room bookings and billing independently."
      }
    ]
  },
  {
    id: "klinik-frontend",
    role: "Frontend Developer & Client Solutions",
    company: "Healthcare Clinic & Therapy Portal",
    period: "2024",
    badge: "UX & Client Focus",
    badgeColor: "cyan",
    summary: "Engineered a modern, responsive web application for a health clinic, emphasizing accessible navigation for patients and administrative ease for non-technical staff.",
    bullets: [
      {
        label: "User-Centric Architecture",
        text: "Designed intuitive service booking and patient consultation schedules to streamline patient registration workflows."
      },
      {
        label: "Direct Client Coordination",
        text: "Collaborated directly with medical stakeholders to ensure the visual identity and usability exceeded healthcare service standards."
      }
    ]
  },
  {
    id: "cinema-mobile",
    role: "Mobile Application Developer & Innovator",
    company: "Smart Cinema Mobile App",
    period: "2024",
    badge: "Product Innovation",
    badgeColor: "purple",
    summary: "Created a mobile application incorporating geolocation theater recommendations, seamless ticket booking, and verified customer review mechanics.",
    bullets: [
      {
        label: "Geolocation Discovery",
        text: "Implemented smart proximity detection to highlight the nearest theaters, decreasing search-to-ticket journey friction."
      },
      {
        label: "Customer Feedback Loop",
        text: "Built a community rating and review interface that provided valuable consumer sentiment data to movie theater operators."
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "TECHNICAL SKILLS",
    description: "Core technological foundation and hands-on systems expertise",
    iconName: "Terminal",
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "IT Troubleshooting", highlight: true },
      { name: "Hardware & Software Support", highlight: true },
      { name: "Networking Fundamentals" },
      { name: "Technical Documentation", highlight: true },
      { name: "Microsoft Office & 365" },
      { name: "Digital Technology & Web Tools" },
      { name: "Database & SQL Basics" },
      { name: "Operating Systems (Windows/Linux)" }
    ]
  },
  {
    title: "CUSTOMER SERVICE",
    description: "Delivering empathetic support and client satisfaction",
    iconName: "Headphones",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Customer Relationship Management (CRM)", highlight: true },
      { name: "Customer Communication & Empathy", highlight: true },
      { name: "Incident Problem Resolution", highlight: true },
      { name: "Customer Satisfaction & CSAT" },
      { name: "Service Excellence Standards" },
      { name: "Escalation Handling" },
      { name: "Client Onboarding & Training" }
    ]
  },
  {
    title: "MARKETING & BUSINESS",
    description: "Connecting technology with commercial growth and client relationships",
    iconName: "Briefcase",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Digital Marketing Strategies", highlight: true },
      { name: "Technical Product Presentation", highlight: true },
      { name: "Sales & Presales Communication" },
      { name: "Business Requirement Analysis", highlight: true },
      { name: "Client Relationship Management" },
      { name: "Market & Consumer Research" },
      { name: "Project Scope & Proposal Planning" }
    ]
  },
  {
    title: "SOFT SKILLS",
    description: "Interpersonal traits for seamless team and customer collaboration",
    iconName: "Sparkles",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Clear & Persuasive Communication", highlight: true },
      { name: "Collaborative Teamwork" },
      { name: "Adaptability in Fast-Paced Tech", highlight: true },
      { name: "Critical Thinking & Root Cause Analysis" },
      { name: "Active Listening & Patience" },
      { name: "Time & Priority Management" }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "wisma-migas",
    title: "Wisma Migas 2 — Management System",
    category: "web",
    categoryLabel: "Web Development / IT Solutions",
    tagline: "Comprehensive Hospitality & Room Booking Management Platform",
    description: "An end-to-end web management system designed for Wisma Migas 2 to streamline room availability tracking, guest reservations, check-in operations, and administrative billing.",
    problem: "The client operated with fragmented manual spreadsheets, causing booking overlaps, delayed billing reports, and miscommunication between reception and management.",
    solution: "Spearheaded the technical roadmap, designed intuitive workflow modules for reservations and reporting, and led full client validation sprints.",
    impact: "Eliminated double bookings completely, accelerated check-in processing by 60%, and empowered non-technical staff to operate system reporting independently.",
    image: projectWismaImg,
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Responsive UI"],
    role: "Project Manager & Solution Architect",
    client: "Wisma Migas 2",
    year: "2025"
  },
  {
    id: "klinik-kesehatan",
    title: "Healthcare Clinic & Therapy Portal",
    category: "web",
    categoryLabel: "Web Development / Digital Projects",
    tagline: "Modern Patient Service Portal & Online Booking Experience",
    description: "A patient-centric web platform engineered for a therapy and health clinic, featuring schedule overviews, treatment catalog, therapist credentials, and fast booking appointments.",
    problem: "Patients experienced friction discovering service specializations and coordinating schedules over phone lines, burdening front-desk telephone reception.",
    solution: "Engineered a modern, responsive web application with accessible typography, smooth navigation, and direct WhatsApp-integrated reservation channels.",
    impact: "Increased online consultation requests by 45% and delivered a polished brand image that instilled patient confidence.",
    image: projectKlinikImg,
    technologies: ["React.js", "Tailwind CSS", "Vite", "UX Research", "Mobile Responsive"],
    role: "Frontend Developer & UI Specialist",
    client: "Klinik Kesehatan & Terapi",
    year: "2024"
  },
  {
    id: "bioskop-mobile",
    title: "Cinema Go — Mobile Booking & Discovery",
    category: "mobile",
    categoryLabel: "Mobile App / Creative Projects",
    tagline: "Geolocation-Powered Cinema Ticketing & Verified Review Community",
    description: "An innovative mobile application that simplifies theater discovery and ticket acquisition while fostering an active community of verified movie reviewers.",
    problem: "Traditional movie applications often complicate finding the closest screening venue and lack trustworthy, spoiler-free audience feedback.",
    solution: "Designed and built a cross-platform mobile experience with geolocation theater lookup, interactive seat mapping previews, and a community rating feedback loop.",
    impact: "Delivered a rapid prototype with less than 2-second screen transitions and positive usability testing scores from 30+ trial participants.",
    image: projectBioskopImg,
    technologies: ["Flutter", "Dart", "Firebase", "Geolocation API", "Figma UI/UX"],
    role: "Mobile Developer & Product Innovator",
    year: "2024"
  },
  {
    id: "lazada-research",
    title: "Fake Review Detection & Consumer Trust",
    category: "research",
    categoryLabel: "IT Solutions / Digital Projects",
    tagline: "Machine Learning Sentiment & Trust Analysis on Lazada (Sinta 3 Published)",
    description: "Peer-reviewed scientific research analyzing thousands of consumer reviews on Lazada to identify fraudulent patterns and measure impact on purchasing decisions.",
    problem: "Fake online reviews undermine consumer trust and distort digital marketing metrics, leading to poor purchase decisions.",
    solution: "Developed NLP and classification algorithms in Python to extract linguistic markers and sentiment anomalies from large-scale e-commerce datasets.",
    impact: "Successfully published in national accredited journal Sinta 3, providing data-driven recommendations for e-commerce integrity and consumer protection.",
    image: projectLazadaImg,
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "NLP", "Pandas", "Data Visualization"],
    role: "Lead Researcher & Data Analyst",
    year: "2024"
  }
];

