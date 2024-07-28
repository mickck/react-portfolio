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
    <div className="flex flex-col items-center justify-center px-3">
      <header>
        <title>Mike Portfolio</title>
        <meta name="description" content="hard" />
      </header>
      <h1 className="text-3xl font-bold sm:text-5xl pb-10">
        Total Projects:
        <span className="pl-4 text-blue-500">{projects.length}</span>
      </h1>

      <div className="grid grid-cols-1 gap-10 mx-auto xs:p-1 xs:m-0 sm:grid-cols-1 sm:p-10 md:grid-cols-2 md:p-10 lg:grid-cols-3 lg:p-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-5 border rounded-lg shadow-sm gap-2 flex flex-col"
          >
            <img src={project.img} alt="" className="rounded-lg " />
            <h2 className="text-xl font-bold">{project.title}</h2>
            <div className="flex gap-2 -mt-1 ">
              {project.tag.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-blue-500 text-white px-2 py-1 text-sm font-semibold rounded-full "
                >
                  {tag}
                </span>
              ))}
            </div>
            <p>{project.description}</p>
            <a
              href={project.site}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
            <p hidden>{project.createdby}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
