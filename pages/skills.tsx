import Head from "next/head";
import TechLogo from "../components/TechLogo";
import skillsData from "../data/skills.json";

function Skills() {
  return (
    <div>
      <Head>
        <title>Rohit Kumar R | My Skills</title>
      </Head>

      <main className="flex-1 p-4 mb-20" style={{ paddingTop: "5rem" }}>
        <div className="max-w-4xl mx-auto mt-8 mb-12">
          <h1 className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-2 text-center bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            My Skills
          </h1>

          <p className="mt-3 mb-8 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-1xl text-neutral-200">
            Here, you&apos;ll find a comprehensive and ever-growing list of the
            technologies I&apos;ve worked with and used in my projects and my
            professional work. My experience spans across various domains,
            whether it&apos;s front-end or back-end development, databases, or
            deployment.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-3 bg-[#ccddff] bg-opacity-90 rounded-lg p-8 shadow-lg shadow-neutral-100">
            {skillsData.map((skill) => (
              <TechLogo
                key={skill.name}
                href={skill.href}
                src={skill.logoUrl}
                alt={skill.name}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Skills;
