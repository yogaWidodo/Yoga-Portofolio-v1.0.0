import { client } from './sanity.client'
import { Project, Certificate, TechStack, Hero } from '@/types'

// ─── Hero / About ─────────────────────────────────────────────────────────────
export async function getHero(): Promise<Hero | null> {
  return client.fetch(
    `*[_type == "hero"][0]{
      headline,
      subheadline,
      tagline,
      aboutTitle,
      aboutDescription,
      githubUsername,
      linkedinUrl,
      instagramUrl,
      email,
      whatsapp,
      "heroImages": heroImages[]{
        "src": asset->url,
        alt
      },
      "galleryImages": galleryImages[]{
        "src": asset->url,
        alt
      }
    }`
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc){
      _id,
      title,
      subtitle,
      "imageSrc": coalesce(
        image.asset->url,
        imageSrc
      ),
      techStack,
      buttonText,
      link
    }`
  )
}

// ─── Certificates ─────────────────────────────────────────────────────────────
export async function getCertificates(): Promise<Certificate[]> {
  return client.fetch(
    `*[_type == "certificate"] | order(order asc){
      _id,
      title,
      description,
      "imageSrc": coalesce(
        image.asset->url,
        imageSrc
      ),
      pdfUrl,
      techStack,
      featured
    }`
  )
}

// ─── Tech Stack ────────────────────────────────────────────────────────────────
export async function getTechStack(): Promise<TechStack[]> {
  return client.fetch(
    `*[_type == "techStack"] | order(order asc){
      _id,
      category,
      icon,
      skills
    }`
  )
}
