"use client";

import React, { useEffect, useRef, useState } from "react";
import { drawContributions } from "github-contributions-canvas";
import { useTheme } from "@/src/app/hooks/useTheme";

export interface Contributions {
  years: Year[];
  contributions: Contribution[];
}

export interface Contribution {
  date: string;
  count: number;
  color: string;
  intensity: number;
}

export interface Year {
  year: string;
  total: number;
  range: {
    start: string;
    end: string;
  };
}

interface GithubContributionsProps {
  username: string;
}

const GithubContributions: React.FC<GithubContributionsProps> = ({
  username,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();
  const [data, setData] = useState<Contributions | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/github?username=${username}`);
        const result: Contributions = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  useEffect(() => {
    if (canvasRef.current && data && !loading) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.clearRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        );
      }

      drawContributions(canvasRef.current, {
        data: data,
        username: username,
        themeName: isDarkMode ? "githubDark" : "standard",
        footerText: `Made by @${username}`,
      });
    }
  }, [data, isDarkMode, username, loading]);

  return (
    <div
      key={`contributions-${isDarkMode}`}
      className="flex justify-center overflow-x-auto p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm transition-all duration-500 border border-gray-100 dark:border-white/5"
    >
      {loading ? (
        <div className="flex items-center gap-2 text-gray-400 py-10">
          <span className="material-icons-round animate-spin">sync</span>
          <p className="text-sm">Crunching data...</p>
        </div>
      ) : (
        <canvas ref={canvasRef} className="max-w-full" />
      )}
    </div>
  );
};

export default GithubContributions;
