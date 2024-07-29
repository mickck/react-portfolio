import { useEffect, useState } from "react";
import db from "../db/db";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate data fetching with a delay
      setTimeout(() => {
        setProjects(db);
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="loader">Loading...</div> {/* Loading spinner */}
      </div>
    );
  }

  // Show actual content once data is loaded
  return (
    <div className="flex flex-col items-center justify-center px-3 lg:mt-6">
      <header>
        <title>Mike Portfolio</title>
        <meta name="description" content="hard" />
      </header>
      <h1 className="text-3xl font-bold sm:text-5xl pb-10">
        Total Projects:
        <span className="pl-4 text-blue-500">{projects.length}</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 mx-auto p-2 xs:m-0 sm:grid-cols-1 sm:p-10 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-3  ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-sm gap-4 flex flex-col"
          >
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <img
                src={project.img}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-bold">{project.title}</h2>
            <div className="flex gap-2 -mt-1  ">
              {project.tag.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500 text-white px-2 py-1 text-xs font-semibold rounded-full "
                >
                  {tag}
                </span>
              ))}
            </div>
            <p>{project.description}</p>
            {project.site && (
              <a
                href={project.site}
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Visit Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Github
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
