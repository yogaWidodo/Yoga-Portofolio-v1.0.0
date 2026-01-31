
import { Project, Skill } from '@/types';


export const PROJECTS: Project[] = [
    {
        id: '1',
        title: 'E-Commerce Fusion',
        description: 'A modern, lightning-fast shopping experience built with Next.js and Stripe integration.',
        image: 'https://picsum.photos/seed/p1/800/600',
        tags: ['React', 'Next.js', 'Tailwind', 'Stripe'],
        link: '#'
    },
    {
        id: '2',
        title: 'Visionary Dashboard',
        description: 'Real-time data visualization tool for enterprise-level analytics.',
        image: 'https://picsum.photos/seed/p2/800/600',
        tags: ['TypeScript', 'D3.js', 'Firebase'],
        link: '#'
    },
    {
        id: '3',
        title: 'Neural Network Explorer',
        description: 'Interactive playground to understand deep learning concepts visually.',
        image: 'https://picsum.photos/seed/p3/800/600',
        tags: ['Python', 'TensorFlow', 'React'],
        link: '#'
    },
    {
        id: '4',
        title: 'Lumina Social',
        description: 'A privacy-first social platform focused on deep connections.',
        image: 'https://picsum.photos/seed/p4/800/600',
        tags: ['GraphQL', 'Node.js', 'PostgreSQL'],
        link: '#'
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

