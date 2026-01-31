import ImageRounded from "@/components/ImageRounded";
import Carousel, { CarouselImage } from "@/components/Carousel";
import ProjectCard from "@/components/ProjectCard";

const HERO_IMAGES: CarouselImage[] = [
  {
    src: "hero1.png",
    alt: "Workspace 1",
  },
  {
    src: "hero2.png",
    alt: "Workspace 2",
  },
];

const GALLERY_IMAGES: CarouselImage[] = [
  {
    src: "1.jpg",
    alt: "Workspace 1",
  },
  {
    src: "2.jpg",
    alt: "Workspace 2",
  },
  {
    src: "3.jpg",
    alt: "Workspace 3",
  },
  {
    src: "4.jpeg",
    alt: "Workspace 4",
  },
  {
    src: "5.jpg",
    alt: "Workspace 5",
  },
];
export default function Home() {
  return (
    <div className="p-10">
      <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Full Stack Developer. <br />
            <span className="text-gray-400 dark:text-gray-600">
              Architect of experiences.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building products with precision, performance, and a touch of magic.
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
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2">
            <Carousel images={HERO_IMAGES} aspectRatio="aspect-4/5" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-justify">
              <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-4 block">
                Fullstack Developer
              </span>
              with strong experience in building scalable, high-performance web
              applications using React, Next.js, TypeScript, and modern
              front-end architectures. Experienced in collaborating closely with
              Business Analysts and System Analysts to translate business
              requirements and system specifications into responsive,
              maintainable user interfaces, while delivering reliable
              API-integrated solutions and optimized user experiences in
              enterprise environments.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 md:px-12 bg-white dark:bg-zinc-950"
        id="projects"
      >
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed text-justify">
          <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-4 block">
            Projects
          </span>
          Here are some of my favorite projects I've worked on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <ProjectCard
            title="IDMS"
            description="Inventory Dealer Management System (IDMS) is a comprehensive CMS for Setir Kanan using for manage all the activity behind the Setir Kanan Website"
            imageSrc="idms.png"
            imageAlt="Dashboard UI with productivity charts"
          />
          <ProjectCard
            title="IDMS"
            description="Inventory Dealer Management System (IDMS) is a comprehensive CMS for Setir Kanan using for manage all the activity behind the Setir Kanan Website"
            imageSrc="idms.png"
            imageAlt="Dashboard UI with productivity charts"
          />
        </div>
      </section>

      {/* Gallery */}
      <span className="text-primary text-5xl md:text-6xl font-bold tracking-tight mb-4 block">
        Gallery
      </span>
      <div className="">
        <Carousel images={GALLERY_IMAGES} aspectRatio="aspect-16/9" />
      </div>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-1">
              <span className="material-icons-round text-2xl mb-4">
                terminal
              </span>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                Crafting digital experiences with an obsession for detail and
                simplicity. Let's build something extraordinary together.
              </p>
            </div>
            <div>
              <h6 className="text-xs font-bold mb-4 uppercase tracking-wider">
                Social
              </h6>
              <ul className="text-xs space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover:underline" href="#">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Twitter / X
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
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
                  <a className="hover:underline" href="#">
                    Email Me
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-xs font-bold mb-4 uppercase tracking-wider">
                Legal
              </h6>
              <ul className="text-xs space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  <a className="hover:underline" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-gray-500">
              Copyright © 2024 Portfolio Dev Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-[11px] text-gray-500">
              <a className="hover:underline" href="#">
                United States
              </a>
              <span className="hidden md:inline border-l border-gray-300 dark:border-white/20 h-3 my-auto"></span>
              <a className="hover:underline" href="#">
                English
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
