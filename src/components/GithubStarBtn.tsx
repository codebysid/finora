"use client";
import Link from "next/link";
import { useEffect } from "react";

const GithubStarBtn = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Link
      className="github-button"
      href="https://github.com/codebysid/finora"
      data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;"
      data-size="large"
      data-show-count="true"
      aria-label="Star codebysid/finora on GitHub"
    >
      Star
    </Link>
  );
};

export default GithubStarBtn;
