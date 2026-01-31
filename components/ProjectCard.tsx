import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProjectCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-3xl bg-[#f5f5f7] dark:bg-card-dark h-[400px] p-10 flex flex-col justify-between border border-transparent dark:border-white/5">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex justify-center -mb-20 transform group-hover:-translate-y-10 transition-transform duration-500">
        <img
          alt={imageAlt}
          className="rounded-xl shadow-lg w-4/5"
          src={imageSrc}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
