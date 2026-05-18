import Carousel, { CarouselImage } from "@/components/Carousel";
import CertificateCard from "@/components/CertificateCard";
import ProjectCard from "@/components/ProjectCard";
import TechStackCard from "@/components/TechStackCard";
import GitHubCalendarClient from "@/components/GitHubCalendarClient";
import { getHero, getProjects, getCertificates, getTechStack } from "@/lib/sanity.queries";
import { Hero, Project, Certificate, TechStack } from "@/types";

export const revalidate = 60; // Revalidate the page every 60 seconds

// ─── Fallback data (dipakai jika Sanity belum ada konten) ──────────────────────
const FALLBACK_HERO: Hero = {
  headline: "Full Stack Developer.",
  subheadline: "Architect of experiences.",
  tagline: "Building products with precision, performance, and a touch of magic.",
  aboutTitle: "Fullstack Developer",
  aboutDescription:
    "with strong experience in building scalable, high-performance web applications using React, Next.js, TypeScript, and modern front-end architectures. Experienced in collaborating closely with Business Analysts and System Analysts to translate business requirements and system specifications into responsive, maintainable user interfaces, while delivering reliable API-integrated solutions and optimized user experiences in enterprise environments.",
  githubUsername: "yogaWidodo",
  linkedinUrl: "https://www.linkedin.com/in/yogawidodo/",
  instagramUrl: "https://www.instagram.com/ygyog_/?hl=en",
  email: "yogawidodo1411@gmail.com",
  whatsapp: "6288233181003",
};

const FALLBACK_PROJECTS: Project[] = [
  {
    title: "IDMS",
    subtitle:
      "Inventory Dealer Management System (IDMS) is a comprehensive CMS for Setir Kanan using for manage all the activity behind the Setir Kanan Website",
    imageSrc: "idms.png",
    techStack: ".NET + Bootstrap + PostgreSQL",
    buttonText: "Berijalan Member of Astra",
  },
  {
    title: "Sehati",
    subtitle:
      "Developed an AI-powered web platform for early mental health screening, integrating DASS-21 & LSTM-based deep learning model for sentiment analysis.",
    imageSrc: "Sehati.png",
    techStack: "Python + React + FastAPI",
    buttonText: "Coding Camp By DBS Foundation",
  },
  {
    title: "My Al-Quran",
    subtitle:
      "Developed a personalized Quran application with a clean and beautiful UI, completely free and ad-free to ensure an uninterrupted reading experience",
    imageSrc: "MyAlquran.jpg",
    techStack: "Kotlin",
    buttonText: "Bangkit Academy 2023 Batch 2",
  },
  {
    title: "Berijajan",
    subtitle:
      "QR based digital reward system that replaces manual physical vouchers and reducing administrative overhead to distribute pre-funded performance rewards",
    imageSrc: "Berijajan.png",
    techStack: "Next.js + Supabase + Tailwind",
    buttonText: "Berijalan Member of Astra",
  },
];

const FALLBACK_CERTIFICATES: Certificate[] = [
  {
    title: "Berijalan - Bootcamp Batch 15",
    description: "Fullstack Developer",
    imageSrc: "/certi/berijalan.png",
    pdfUrl: "/pdf/berijalan.pdf",
    techStack:
      "Next.js + Tailwind + Angular Js + PostgreSQL + React Native + .NET + Spring Boot",
    featured: true,
  },
  {
    title: "Coding Camp 2025",
    description: "Machine Learning Engineer",
    imageSrc: "/certi/codingcamp.png",
    pdfUrl: "/pdf/codingcamp.pdf",
    techStack: "Python + TensorFlow + Keras",
  },
  {
    title: "Bank Syariah Indonesia",
    description: "Backend Developer",
    imageSrc: "/certi/itdeveloper.png",
    pdfUrl: "/pdf/itdeveloper.pdf",
    techStack: "Java + Spring Boot",
  },
  {
    title: "Bangkit Academy",
    description: "Mobile Developer",
    imageSrc: "/certi/bangkit.png",
    pdfUrl: "/pdf/bangkit.pdf",
    techStack: "Kotlin + Firebase",
  },
  {
    title: "Bitlabs Academy",
    description: "Data Analyst",
    imageSrc: "/certi/bitlabs.png",
    pdfUrl: "/pdf/bitlabs.pdf",
    techStack: "Python + Pandas + Tableau",
  },
];

const FALLBACK_TECH_STACK: TechStack[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular JS"],
    icon: "data_object",
  },
  {
    category: "Backend",
    skills: [".NET", "Spring Boot", "FastAPI", "Java", "Python"],
    icon: "dns",
  },
  {
    category: "Mobile",
    skills: ["React Native", "Kotlin", "Firebase"],
    icon: "smartphone",
  },
  {
    category: "Database & Tools",
    skills: ["PostgreSQL", "Supabase", "Git", "TensorFlow", "Pandas"],
    icon: "build",
  },
];

const HERO_IMAGES: CarouselImage[] = [
  { src: "hero1.png", alt: "Workspace 1" },
  { src: "hero2.png", alt: "Workspace 2" },
];

const GALLERY_IMAGES: CarouselImage[] = [
  { src: "a.jpg", alt: "Gallery 1" },
  { src: "b.jpg", alt: "Gallery 2" },
  { src: "c.jpg", alt: "Gallery 3" },
  { src: "4.jpeg", alt: "Gallery 4" },
  { src: "d.jpg", alt: "Gallery 5" },
];

export default async function Home() {
  // Fetch dari Sanity, gunakan fallback jika gagal / belum ada data
  let hero = FALLBACK_HERO;
  let projects = FALLBACK_PROJECTS;
  let certificates = FALLBACK_CERTIFICATES;
  let techStack = FALLBACK_TECH_STACK;

  try {
    const [heroData, projectsData, certificatesData, techStackData] =
      await Promise.all([getHero(), getProjects(), getCertificates(), getTechStack()]);

    if (heroData) hero = heroData;
    if (projectsData?.length) projects = projectsData;
    if (certificatesData?.length) certificates = certificatesData;
    if (techStackData?.length) techStack = techStackData;
  } catch (err) {
    // Sanity belum terkonfigurasi atau offline — gunakan fallback
    console.warn("Sanity fetch failed, using fallback data:", err);
  }

  const featuredCert = certificates.find((c) => c.featured);
  const otherCerts = certificates.filter((c) => !c.featured);

  const heroCarousel = hero.heroImages?.length ? hero.heroImages : HERO_IMAGES;
  const galleryCarousel = hero.galleryImages?.length ? hero.galleryImages : GALLERY_IMAGES;

  return (
    <div className="p-10">
      {/* ── Hero ── */}
      <section
        id="home"
        className="mt-70 px-4 md:px-12 bg-white dark:bg-black text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            {hero.headline} <br />
            <span className="text-gray-400 dark:text-gray-600">
              {hero.subheadline}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {hero.tagline}
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              className="bg-primary text-white px-6 py-2.5 rounded-full font-semibold hover:opacity-90 transition-all"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="text-primary hover:underline flex items-center font-semibold"
              href="#activity"
            >
              See live activity{" "}
              <span className="material-icons-round ml-1">chevron_right</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="py-20 px-4 md:px-12 bg-white dark:bg-zinc-950"
      >
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2">
            <Carousel images={heroCarousel} aspectRatio="aspect-4/5" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-justify">
              <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-4 block">
                {hero.aboutTitle}
              </span>
              {hero.aboutDescription}
            </p>
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        className="py-20 px-4 md:px-12 bg-white dark:bg-zinc-950"
        id="projects"
      >
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-justify">
          <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-4 block">
            Projects
          </span>
          Here are some of my favorite projects I&apos;ve worked on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project._id ?? project.id ?? idx}
              title={project.title}
              subtitle={project.subtitle}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt ?? project.title}
              techStack={project.techStack}
              buttonText={project.buttonText}
              carouselImages={project.carouselImages}
            />
          ))}
        </div>
      </section>

      {/* ── Certificates ── */}
      <section
        id="certificates"
        className="py-20 px-4 md:px-12 bg-white dark:bg-zinc-950"
      >
        <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-4 block">
          Certificates
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCert && (
            <div className="project-card group relative md:col-span-2 lg:col-span-2 h-[600px] rounded-3xl bg-apple-gray dark:bg-card-dark overflow-hidden flex flex-col border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl">
              <CertificateCard
                title={featuredCert.title}
                description={featuredCert.description}
                imageSrc={featuredCert.imageSrc}
                imageAlt={featuredCert.imageAlt ?? featuredCert.title}
                pdfUrl={featuredCert.pdfUrl}
                techStack={featuredCert.techStack}
              />
            </div>
          )}
          {otherCerts.map((cert, idx) => (
            <CertificateCard
              key={cert._id ?? idx}
              title={cert.title}
              description={cert.description}
              imageSrc={cert.imageSrc}
              imageAlt={cert.imageAlt ?? cert.title}
              pdfUrl={cert.pdfUrl}
              techStack={cert.techStack}
            />
          ))}
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section
        id="stack"
        className="py-20 px-4 md:px-12 bg-white dark:bg-zinc-950"
      >
        <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-12 block">
          Tech Stack
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((item, idx) => (
            <TechStackCard
              key={item._id ?? idx}
              category={item.category}
              skills={item.skills}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section
        id="gallery"
        className="py-20 px-4 md:px-12 bg-white dark:bg-zinc-950"
      >
        <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-4 block">
          Gallery
        </span>
        <div>
          <Carousel images={galleryCarousel} aspectRatio="aspect-16/9" />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-16">
            <div className="col-span-2 lg:col-span-1">
              <span className="material-icons-round text-2xl mb-4">
                terminal
              </span>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                Crafting digital experiences with an obsession for detail and
                simplicity. Let&apos;s build something extraordinary together.
              </p>
            </div>
            <div>
              <h6 className="text-xs font-bold mb-4 uppercase tracking-wider">
                Social
              </h6>
              <ul className="text-xs space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    className="hover:underline"
                    href={`https://github.com/${hero.githubUsername}`}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={hero.linkedinUrl}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href={hero.instagramUrl}>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-bold mb-4 uppercase tracking-wider">
                Connect
              </h6>
              <ul className="text-xs space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <a
                    className="hover:underline"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${hero.email}`}
                  >
                    Email Me
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href={`https://wa.me/${hero.whatsapp}`}
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-4 lg:col-span-2 overflow-hidden">
              <h6 className="text-xs font-bold mb-4 uppercase tracking-wider">
                GitHub Contributions
              </h6>
              <GitHubCalendarClient username={hero.githubUsername} />
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-gray-500">
              Copyright © 2024 Portfolio Dev Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-[11px] text-gray-500">
              <a className="hover:underline" href="#">
                Indonesia
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
