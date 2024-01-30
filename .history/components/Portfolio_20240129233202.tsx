"use client"

import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string
  image: string
  url: string
}
const Portfolio: React.FC<{projects: Project[]}> = ({projects}) => {
  const [ activeCategory, setActiveCategory] = useState<string>("all")
  const [ filtered, setFiltered] = useState<Project[]>([])
  const [visibleProjects, setVisibleProjects] = useState<number>(6)


  return <div className="h-screen w-fulll">Portfolio</div>;
};

export default Portfolio;
