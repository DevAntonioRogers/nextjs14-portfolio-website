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
          <div className="bg-yellow-500/80 py-1 px-3 absolute w-full top-0 flex justify-center items-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
            <h3 className="text-center text-black text-2xl flex gap-1 items-center font-thin">
              Checkout Project
              <LiaExternalLinkAltSolid />
            </h3>
          </div>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
