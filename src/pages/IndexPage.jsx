import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="flex mt-8 max-w-[90%] 2xl:max-w-[1440px] mx-auto">
      <div className="  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
          {`Hello, I'm Mike`}
          <br className="hidden lg:inline-block" />
        </h1>

        <p className="mb-8 leading-relaxed">
          Front End Developer based in Melbourne with experience and passion for
          responsive websites to deliver exceptional user experiences.
          Proficient in&nbsp;
          <strong>
            JavaScript, TypeScript, HTML/CSS, ReactJs, Redux, Tailwindcss,
            NodeJS, PHP
          </strong>
          , modern libraries and frameworks. Passionate about aesthetics and
          usability.
        </p>
        <div className="flex justify-center">
          <Link className="btn-project" to="/project">
            View selected Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
