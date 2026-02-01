"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

interface GitHubCalendarClientProps {
  username: string;
}

const GitHubCalendarClient = ({ username }: GitHubCalendarClientProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[100px]" />; // Placeholder or null
  }

  return (
    <GitHubCalendar
      username={username}
      fontSize={10}
      blockSize={8}
      blockMargin={3}
    />
  );
};

export default GitHubCalendarClient;
