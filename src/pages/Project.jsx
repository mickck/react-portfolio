export default function Projects({ projects }) {
  return (
    <div className="flex flex-col items-center justify-center px-3">
      <header>
        <title>Mike Portfolio</title>
        <meta name="description" content="hard" />
      </header>
      <h1 className="text-3xl font-bold sm:text-5xl pb-10">
        Toal Projects:
        <span className="pl-4 text-blue-500"></span>
      </h1>

      <div className="grid grid-cols-1 gap-10 m-20 mx-auto xs:p-1 xs:m-0 sm:grid-cols-1 sm:p-10 md:grid-cols-2 md:p-10 lg:grid-cols-3 lg:p-20 ">
        {/* {projects.results.map((aProject) => (
          <ProjectItem key={aProject.id} data={aProject} />
        ))} */}
      </div>
    </div>
  );
}
