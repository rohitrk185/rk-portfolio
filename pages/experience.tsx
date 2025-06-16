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
          <h1 className="mt-8 mb-4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-center bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            My Work Experience
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl text-neutral-200 mt-3 mb-8">
            Here, you&apos;ll find a list of software engineering positions
            I&apos;ve held, the companies I&apos;ve worked for, the projects
            that I worked on, some of the responsibilities I had, and what I
            learned.
          </p>
          <div className="flex flex-col gap-8 my-12">
            {experienceData.map((exp, index) => (
              <ExperienceCard
                key={index}
                companyName={exp.companyName}
                subCompanyDescription={exp.subCompanyDescription}
                dateRange={exp.dateRange}
                jobTitle={exp.jobTitle}
                logoUrl={exp.logoUrl}
                jobDescription={
                  <div
                    dangerouslySetInnerHTML={{ __html: exp.jobDescription }}
                  />
                }
                links={exp.links}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Experience;
