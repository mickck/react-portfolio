import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useEffect, useState } from "react";
import db from "../db/db";

export default function IndexPage() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

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

  return (
    <div className="flex flex-col-reverse md:flex-row mt-8 max-w-[90%] 2xl:max-w-[1440px] mx-auto">
      <div className="  md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:pb-8 lg:mt-9">
        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-gray-900">
          {`Hello, I'm Mike`}
          <br className="hidden lg:inline-block" />
        </h1>

        <p className="mb-8 leading-relaxed">
          Thank you for visiting my porfolio site. Web Developer based in
          Melbourne with experience and passion for responsive websites to
          deliver exceptional user experiences. Proficient in&nbsp;
          <strong>
            JavaScript, TypeScript, HTML/CSS, ReactJs, Redux, Tailwindcss,
            NodeJS, PHP, Wordpress
          </strong>
          , modern libraries and frameworks. Passionate about aesthetics and
          usability.
        </p>
        <div className="flex justify-center">
          <Link
            className="mt-2 text-lg bg-blue-500 text-white px-6 py-4 rounded-lg transition-all hover:bg-blue-700"
            to="/project"
          >
            View selected Projects
          </Link>
        </div>
      </div>
      <div className="w-90% mb-12 sm:w-[50%]">
        {!loading && (
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index}>
                <img
                  src={project.img}
                  alt={project.name}
                  className="rounded-2xl border w-full h-72 object-cover sm:h-1/3"
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
