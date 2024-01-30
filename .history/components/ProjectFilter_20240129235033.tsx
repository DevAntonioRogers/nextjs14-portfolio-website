"use client";

import { useEffect } from "react";

interface Project {
  name: string;
  image: string;
  url: string;
  category?: string;
}

interface ProjectFilterProps {
  setFiltered: React.Dispatch<
    React.SetStateAction<Project[]>
  >;
  activeCategory: string;
  setActiveCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
  projects: Project[];
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  setFiltered,
  activeCategory,
  setActiveCategory,
  projects,
}) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) =>
      project.category?.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);
  return <div>ProjectFilter</div>;
};

export default ProjectFilter;
