"use client";

import { useEffect } from "react";

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

const ProjectFilter = ({
  setFiltered,
  activeCategory,
  setActiveCategory,
  projects,
}) => {
  return <div>ProjectFilter</div>;
};

export default ProjectFilter;
