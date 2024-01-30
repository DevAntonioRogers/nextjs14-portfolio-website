"use client";
import { urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { useState } from "react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const ProjectCard = ({
  name,
  image,
  url,
}: {
  name: string;
  image: string;
  url: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="shadow-md cursor-pointer relative"
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <Image
        src={urlFor(image).url()}
        alt={`${name} Image`}
        height={800}
        width={800}
      />

      {isHovered && (
        <a href={url} target="_blank">
          <div className=""></div>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
