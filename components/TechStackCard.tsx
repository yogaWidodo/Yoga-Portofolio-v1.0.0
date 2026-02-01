"use client";

import React from "react";

interface TechStackCardProps {
  category: string;
  skills: string[];
  icon: string;
}

const TechStackCard: React.FC<TechStackCardProps> = ({
  category,
  skills,
  icon,
}) => {
  return (
    <div className="p-8 rounded-3xl bg-[#f5f5f7] dark:bg-card-dark border border-gray-100 dark:border-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-icons-round text-primary text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, sIdx) => (
          <span
            key={sIdx}
            className="px-3 py-1.5 rounded-full bg-primary dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-white hover:opacity-90 transition-opacity"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
