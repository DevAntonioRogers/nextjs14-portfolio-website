"use client";

import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  image: string;
  url: string;
}
const Portfolio: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<string>("all");
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] =
    useState<number>(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prevProjects) => prevProjects + 4);
  };

  return (
    <div
      id="projects"
      className="w-full h-fit py-10 relative bg-white"
    >
      <div className="max-w-[1400px] mx-auto w-[91%]">
        <div className="flex justify-center">
          <span className="bg-yellow-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5">
            Projects
          </span>
        </div>
        <ProjectFilter
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          projects={projects}
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {filtered
            .slice(0, visibleProjects)
            .map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                image={project.image}
                url={project.url}
              />
            ))}
        </div>

        {visibleProjects < filtered.length && (
          <div className="text-center mt-4">
            <button className="bg-yellow-500 py-2 px-4 rounded-md font-bold mt-10"
            onClick={loadMoreProjects}
            aria-label="Show More Projects"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
