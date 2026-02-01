"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  techStack: string;
  buttonText?: string;
  pdfUrl?: string; // Added pdfUrl support
  className?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  techStack,
  buttonText = "View Details",
  pdfUrl,
  className = "",
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`project-card group relative h-[500px] rounded-3xl bg-[#f5f5f7] dark:bg-card-dark overflow-hidden flex flex-col border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl ${className}`}
    >
      <div className="p-10 text-center z-10">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
      <div className="flex-1 w-full overflow-hidden relative flex items-end">
        <Image
          alt={imageAlt}
          fill
          className="object-cover translate-y-10 group-hover:translate-y-0 transition-transform duration-700"
          src={imageSrc.startsWith("/") ? imageSrc : `/${imageSrc}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="project-overlay absolute inset-0 bg-primary/95 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0 z-20">
        <h4 className="text-xl font-bold mb-4">{techStack}</h4>
        <button
          onClick={() => pdfUrl && setIsOpen(true)}
          className="bg-white text-primary px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          {buttonText}
        </button>
      </div>

      {pdfUrl && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
          <iframe
            src={pdfUrl}
            className="w-full h-full border-none"
            title={`${title} Project PDF`}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProjectCard;
