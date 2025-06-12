import Head from "next/head";
import EducationCard from "../components/EducationCard";
import educationData from "../data/education.json";

function Education() {
  return (
    <div className="mt-8 mb-20">
      <Head>
        <title>Rohit Kumar R | My Education</title>
      </Head>
      <main className="flex-1 p-4" style={{ paddingTop: "5rem" }}>
        <div className="max-w-4xl mx-auto">
          <p className="sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-2 text-white text-center underline">
            My Education
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl text-white mb-2 text-center">
            Here, you&apos;ll find a list of my educational experiences,
            associations, activities/societies, and awards/achievements.
          </p>

          <div className="flex flex-col gap-8 mt-12">
            {educationData.map((edu, index) => (
              <EducationCard
                key={index}
                schoolName={edu.schoolName}
                subschoolDescription={edu.subschoolDescription}
                dateRange={edu.dateRange}
                credential={edu.credential || ""}
                logoUrl={edu.logoUrl}
                links={edu.links}
                eduDescription={
                  edu.eduDescription ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: edu.eduDescription }}
                    />
                  ) : undefined
                }
                gpa={edu.gpa}
                location={edu.location || undefined} // Pass location if it exists
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Education;
