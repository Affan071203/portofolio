export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'research' | 'all';
  categoryLabel: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  image: string;
  technologies: string[];
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  client?: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  badge: string;
  badgeColor: string;
  summary: string;
  bullets: {
    label: string;
    text: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  description: string;
  honors?: string;
}

