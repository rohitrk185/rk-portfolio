import React from "react";
import { Fade } from "react-awesome-reveal";

interface Link {
  url: string;
  displayText: string;
}

interface ExperienceCardProps {
  companyName: string;
  dateRange: string;
  jobTitle: string;
  logoUrl: string;
  jobDescription: React.ReactNode;
  links: Link[];
  subCompanyDescription: string;
  location?: string;
}

function ExperienceCard({
  companyName,
  dateRange,
  jobTitle,
  logoUrl, // todo: make the image clickable and redirect to the first link
  jobDescription,
  links = [],
  subCompanyDescription,
  location = "Bengaluru, India",
}: ExperienceCardProps) {
  return (
    <Fade>
      <div className="bg-white bg-opacity-[0.09] backdrop-blur-md rounded-lg shadow-md p-4 mb-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img
            src={logoUrl}
            alt={companyName}
            className="w-20 h-20 rounded-full mr-4 object-contain"
            width={1000}
            height={1000}
          />
          <div className="ml-1 md:ml-3">
            <h3 className="text-lg md:text-xl font-bold text-white">
              {companyName}
              {subCompanyDescription && (
                <span className="text-gray-400">
                  {" | "}
                  {subCompanyDescription}
                </span>
              )}
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              {jobTitle} | {dateRange}
            </p>
            <p className="text-sm md:text-base text-gray-400">{location}</p>{" "}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
              {dateRange}
            </p>
            {links.map((link, index) => (
              <React.Fragment key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm md:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200 ${
                    index > 0 ? "ml-4" : ""
                  }`}
                  aria-label={`Learn more about ${link.displayText} at ${companyName}`}
                >
                  {link.displayText}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <h4 className="text-base md:text-lg font-semibold text-gray-100 mt-3 mb-2">
          {jobTitle}
        </h4>
        <div className="text-sm md:text-base text-gray-200">
          {jobDescription}
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
