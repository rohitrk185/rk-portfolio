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
  gpa?: string | null;
  percentage?: string | null;
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
  percentage,
  links = [],
  subschoolDescription,
  location = "Atlanta, GA",
}: EducationCardProps) {
  return (
    <Fade>
      <div className="bg-white bg-opacity-[0.09] backdrop-blur-md rounded-xl shadow-md p-2 px-4 md:p-4 md:px-6 lg:p-6 mb-4 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img
            src={logoUrl}
            alt={schoolName}
            className="w-20 h-20 mr-4 object-contain"
            width={1000}
            height={1000}
          />

          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              {schoolName}
              {subschoolDescription && (
                <span className="text-gray-400">
                  {" | "}
                  {subschoolDescription}
                </span>
              )}
            </h3>
            <p className="text-sm md:text-base text-gray-300">{location}</p>{" "}
            <p className="text-sm md:text-base text-gray-400">{dateRange}</p>
            {links.map((link, index) => (
              <React.Fragment key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm md:text-base text-blue-400 hover:text-blue-300 underline transition-colors duration-200 ${
                    index > 0 ? "ml-4" : ""
                  }`}
                >
                  {link.displayText}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
        <h4 className="mt-3 mb-1 text-base md:text-lg font-semibold text-white">
          {credential}
        </h4>
        <div className="text-sm md:text-base text-gray-300">
          {eduDescription}
        </div>
        <div className="mt-2 text-sm md:text-base text-gray-300">
          {typeof gpa === "string" ? (
            <>
              <b> GPA: </b> {gpa}
            </>
          ) : null}

          {typeof percentage === "string" ? (
            <>
              <b> Percentage: </b> {percentage}
            </>
          ) : null}
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
