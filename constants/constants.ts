
import { Project, Skill } from '@/types';


export const PROJECTS: Project[] = [
    {
        title: "E-Commerce Fusion",
        subtitle: "A modern, lightning-fast shopping experience built with Next.js and Stripe integration.",
        imageSrc: "https://picsum.photos/seed/p1/800/600",
        techStack: "React + Next.js + Tailwind + Stripe",
        buttonText: "View Project",
        link: "#"
    },
    {
        title: "Visionary Dashboard",
        subtitle: "Real-time data visualization tool for enterprise-level analytics.",
        imageSrc: "https://picsum.photos/seed/p2/800/600",
        techStack: "TypeScript + D3.js + Firebase",
        buttonText: "View Project",
        link: "#"
    },
    {
        title: "Neural Network Explorer",
        subtitle: "Interactive playground to understand deep learning concepts visually.",
        imageSrc: "https://picsum.photos/seed/p3/800/600",
        techStack: "Python + TensorFlow + React",
        buttonText: "View Project",
        link: "#"
    },
    {
        title: "Lumina Social",
        subtitle: "A privacy-first social platform focused on deep connections.",
        imageSrc: "https://picsum.photos/seed/p4/800/600",
        techStack: "GraphQL + Node.js + PostgreSQL",
        buttonText: "View Project",
        link: "#"
    }
];

export const SKILLS: Skill[] = [
    { name: 'React / Next.js', icon: 'fa-brands fa-react', level: 95 },
    { name: 'TypeScript', icon: 'fa-solid fa-code', level: 90 },
    { name: 'Java', icon: 'fa-brands fa-java', level: 85 },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', level: 80 },
    { name: 'Python', icon: 'fa-brands fa-python', level: 75 },
    { name: 'Machine Learning', icon: 'fa-solid fa-brain', level: 70 }
];

