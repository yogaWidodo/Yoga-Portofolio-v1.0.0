"use client";

import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

interface CertificateCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  techStack?: string;
  buttonText?: string;
  pdfUrl?: string;
}

const CertificateCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  techStack,
  buttonText = "View Details",
  pdfUrl,
}: CertificateCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="project-card relative group overflow-hidden rounded-3xl bg-[#f5f5f7] dark:bg-card-dark h-full p-10 flex flex-col justify-between border border-transparent dark:border-white/5 transition-all duration-500 hover:shadow-2xl">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex justify-center -mb-16 transform group-hover:-translate-y-12 transition-transform duration-500 relative h-72 w-full mt-6 overflow-hidden rounded-t-3xl shadow-xl">
        <Image
          alt={imageAlt}
          fill
          className="object-cover object-top"
          src={imageSrc.startsWith("/") ? imageSrc : `/${imageSrc}`}
          sizes="(max-width: 768px) 90vw, 40vw"
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
            title={`${title} PDF`}
          />
        </Modal>
      )}
    </div>
  );
};

export default CertificateCard;
