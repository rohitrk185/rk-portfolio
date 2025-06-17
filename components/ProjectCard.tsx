import React, { ElementType } from "react";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

interface ProjectCardProps {
  name: string;
  description: string;
  githubLink?: string;
  demoLink?: string;
  demoText?: string;
  Icon?: React.ComponentType<{ className?: string }> | ElementType;
  previewImageUrl?: string;
}

function ProjectCard({
  name,
  description,
  githubLink,
  demoLink,
  demoText = "Demo",
  Icon = FaGlobe,
  previewImageUrl,
}: ProjectCardProps) {
  const DefaultIcon = Icon || FaGlobe;
  return (
    <div className="w-full flex justify-center">
      {" "}
      {/* This div will be a flex item in projects.tsx, centering the card content */}
      <Fade className="w-full max-w-5xl">
        {" "}
        {/* Apply max-width to Fade to ensure it doesn't exceed */}
        <div className="bg-white bg-opacity-[0.09] backdrop-blur-md rounded-lg shadow-md overflow-hidden h-full flex flex-col justify-between w-full p-2 px-3">
          {" "}
          {/* Actual card content with a max-width */}
          {previewImageUrl && (
            <a
              target="_blank"
              href={demoLink}
              rel="noopener noreferrer"
              className="w-11/12 h-60 lg:w-2/3 lg:h-96 rounded-2xl mb-3 mx-auto group"
            >
              <img
                src={previewImageUrl}
                alt={`${name} preview`}
                className="w-full h-full object-fill rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </a>
          )}
          <div>
            <h2 className="text-lg md:text-xl font-bold p-3 text-neutral-50">
              {name}
            </h2>
            <hr />
            <div className="p-3 text-neutral-200 text-sm md:text-base">
              {description}
            </div>
          </div>
          <div className="my-4 mx-3 flex justify-between">
            {githubLink && (
              <Link href={githubLink} rel="noopener noreferrer" target="_blank">
                <div className="bg-slate-400 hover:bg-gradient-to-r hover:from-blue-600 hover:via-blue-500 hover:to-blue-400 text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center text-xs md:text-base transition-all duration-200 ease-in-out">
                  <FaGithub className="mr-2 text-sm md:text-base" />
                  <span>GitHub</span>
                </div>
              </Link>
            )}
            {demoLink && (
              <Link href={demoLink} rel="noopener noreferrer" target="_blank">
                <div className="bg-slate-400 hover:bg-gradient-to-r hover:from-green-600 hover:via-green-500 hover:to-emerald-400 text-black hover:text-white font-bold py-2 px-4 rounded inline-flex items-center text-xs md:text-base transition-all duration-200 ease-in-out">
                  <DefaultIcon className="mr-2 text-sm md:text-base" />
                  <span>{demoText}</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProjectCard;
