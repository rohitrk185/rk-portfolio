import React from "react";
import { Fade } from "react-awesome-reveal";

interface Link {
  url: string;
  displayText: string;
}

interface EducationCardProps {
  schoolName: string;
  dateRange: string;
  credential: string;
  logoUrl: string;
  eduDescription?: React.ReactNode;
  gpa?: string;
  links: Link[];
  subschoolDescription: string;
  location?: string;
}

function EducationCard({
  schoolName,
  dateRange,
  credential,
  logoUrl,
  eduDescription,
  gpa,
  links = [],
  subschoolDescription,
  location = "Atlanta, GA",
}: EducationCardProps) {
  return (
    <Fade triggerOnce>
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-2 p x-4 md:p-4 md:px-6 mb-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img
            src={logoUrl}
            alt={schoolName}
            className="w-20 h-20 mr-4 object-contain"
            width={1000}
            height={1000}
          />

          <div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">
              {schoolName}
              {subschoolDescription && (
                <>
                  {" "}
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                    |
                  </span>{" "}
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
                    {subschoolDescription}
                  </span>
                </>
              )}
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
              {location}
            </p>{" "}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
              {dateRange}
            </p>
            {links.map((link, index) => (
              <React.Fragment key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs sm:text-sm md:text-base lg:text-lg text-blue-500 underline ${
                    index !== 0 ? "ml-3" : ""
                  }`}
                >
                  {link.displayText}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white">
          {credential}
        </h4>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
          {eduDescription}
        </div>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
          <b> GPA: </b> {gpa}
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
