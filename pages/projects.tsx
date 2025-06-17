import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import { FaHackerrank } from "react-icons/fa";

// const github_pat = process.env.GITHUB_PAT;

const loadingMessage =
  "Failed to fetch GitHub Repository description. Please try again later.";
// const projectsWithDescriptions = [''];
async function getRepoDescription(githubRepoUrl: string) {
  const [, owner, repo] = new URL(githubRepoUrl).pathname.split("/");
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`
      // {
      //   headers: {
      //     Authorization: `Bearer ${github_pat}`,
      //   },
      // }
    );
    const data = await response.json();
    return data.description || loadingMessage;
  } catch (error) {
    console.error(`Error: ${error}`);
    return "Error: Could not fetch GitHub Repository description. Please try again later.";
  }
}

const iconComponents: { [key: string]: React.ElementType } = {
  FaHackerrank,
};

// function LoadingCard() {
//   return (

//     <div className="flex items-center justify-center p-4">
//       <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
//     </div>
//   );
// }
interface ProjectsProps {
  descriptions: { [key: string]: string };
}
function Projects({ descriptions }: ProjectsProps) {
  const renderProjectCard = (project: any) => {
    let description = project.staticDescription;
    if (!description && project.id) {
      const fetchedDesc = descriptions[project.id] || loadingMessage;
      description = `${project.descriptionPrefix || ""}${fetchedDesc}${
        project.descriptionSuffix || ""
      }`;
    }

    const IconComponent = project.iconName
      ? iconComponents[project.iconName]
      : undefined;

    return (
      <ProjectCard
        key={project.id || project.name}
        name={project.name}
        description={description}
        githubLink={project.githubLink}
        demoLink={project.demoLink}
        demoText={project.demoText}
        previewImageUrl={project.previewImageUrl}
        Icon={IconComponent}
      />
    );
  };

  return (
    <div>
      <Head>
        <title>Rohit Kumar R | My Projects</title>
      </Head>

      <main className="flex-1 p-4 mb-20" style={{ paddingTop: "5rem" }}>
        <div className="max-w-6xl mx-auto">
          <h1 className="mt-8 mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            My Projects
          </h1>

          <p className="text-neutral-300 text-lg md:text-xl mt-3 mb-12 text-center">
            Here, you&apos;ll find a curated list of projects I&apos;ve worked
            on, showcasing my skills in various technologies and my passion for
            building innovative solutions.
          </p>

          {projectsData.ongoing.length > 0 ? (
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-green-300 underline">
                Ongoing Projects
              </h2>
              <div className="flex flex-col items-center gap-8 p-4">
                {projectsData.ongoing.map(renderProjectCard)}
              </div>
            </section>
          ) : null}

          {projectsData.completed.length > 0 ? (
            <section className="mt-12">
              {/* <h2 className="text-2xl font-bold mb-4 text-center text-blue-300 underline">
                Completed Projects
              </h2> */}
              <div className="flex flex-col items-center gap-8 p-4">
                {projectsData.completed.map(renderProjectCard)}
              </div>
            </section>
          ) : null}

          {projectsData.codingChallenges.length > 0 ? (
            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-purple-300 underline">
                Coding Challenge Solutions
              </h2>
              <div className="flex flex-col items-center gap-8 p-4">
                {projectsData.codingChallenges.map(renderProjectCard)}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const descriptions: { [key: string]: string } = {};

  const allProjectEntries = [
    ...projectsData.ongoing,
    ...projectsData.completed,
    ...projectsData.codingChallenges,
  ];

  const projectsToFetchDescriptionsFor = allProjectEntries.map((p) => p.id);

  // if length of descriptions is 0, then we need to fetch descriptions
  if (projectsToFetchDescriptionsFor.length > 0) {
    try {
      // Fetch all descriptions in parallel
      const descriptionPromises = projectsToFetchDescriptionsFor.map(
        (project) =>
          getRepoDescription(`https://github.com/Kevin-Kwan/${project}`) // Assuming your GitHub username is Kevin-Kwan
            .then((description) => {
              descriptions[project] = description;
            })
            .catch((error) => {
              console.error(
                `Error fetching description for ${project}: ${error}`
              );
              descriptions[project] =
                "Error: Could not fetch GitHub Repository description. Please try again later.";
            })
      );

      await Promise.all(descriptionPromises);
    } catch (error) {
      console.error(`Error fetching descriptions: ${error}`);
    }
  }

  return {
    props: {
      descriptions,
    },
    revalidate: 3600, // Revalidate once per hour, or adjust as needed
  };
}

export default Projects;
// Comment out this line if you are doing npm run dev
// export const runtime = 'experimental-edge';
