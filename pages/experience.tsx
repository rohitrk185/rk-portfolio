import Head from "next/head";
import ExperienceCard from "../components/ExperienceCard";
import experienceData from "../data/experience.json";

function Experience() {
  return (
    <div>
      <Head>
        <title>Rohit Kumar R | Work Experience</title>
      </Head>
      <main className="flex-1 p-4 mb-20" style={{ paddingTop: "5rem" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="my-8 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Work Experience
          </h1>
          {/* <p className="text-neutral-300 text-lg md:text-xl mt-3 mb-8 text-center">
            Explore my work history, highlighting software engineering roles
            I&apos;ve held, the companies I&apos;ve worked for, the projects
            that I worked on, some of the responsibilities I had, and what I
            learned.
          </p> */}
          <div className="flex flex-col gap-8 my-12">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={index}
                companyName={exp.companyName}
                subCompanyDescription={exp.subCompanyDescription || ""}
                dateRange={exp.dateRange}
                jobTitle={exp.jobTitle}
                logoUrl={exp.logoUrl}
                jobDescription={
                  <div
                    dangerouslySetInnerHTML={{ __html: exp.jobDescription }}
                  />
                }
                links={exp.links || []}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Experience;
