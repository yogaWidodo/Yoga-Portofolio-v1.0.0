export interface Project {
  _id?: string
  id?: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt?: string
  techStack: string
  buttonText: string
  link?: string
}

export interface Certificate {
  _id?: string
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  pdfUrl: string
  techStack: string
  featured?: boolean
}

export interface TechStack {
  _id?: string
  category: string
  icon: string
  skills: string[]
}

export interface Hero {
  headline: string
  subheadline: string
  tagline: string
  aboutTitle: string
  aboutDescription: string
  githubUsername: string
  linkedinUrl: string
  instagramUrl: string
  email: string
  whatsapp: string
  heroImages?: Array<{ src: string; alt: string }>
  galleryImages?: Array<{ src: string; alt: string }>
}

// Legacy types (kept for backwards compatibility)
export interface Skill {
  name: string
  icon: string
  level: number
}
