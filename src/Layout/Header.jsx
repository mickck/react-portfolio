import { Link } from "react-router-dom";
import logo from "../../public/mk.ico";
// import DarkModeToggleButton from "./pages/darkModuleToggleBtn";
export default function Header() {
  function onFooter() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <header className="text-gray-600 body-font shadow-md mb-10 ">
      <div className="py-4 flex flex-col sm:flex-row min-h max-w-[90%] 2xl:max-w-[1440px] mx-auto">
        {/* Navbar left side */}
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} className="" alt="logo" width={35} height={35}></img>
          <span className="ml-3">Mike`s portfolio</span>
        </Link>
        {/* Navbar right side */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
          <Link className="hover:text-gray-800" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-800" to="/project">
            Project
          </Link>
          <div
            className="hover:text-gray-800 cursor-pointer"
            onClick={onFooter}
          >
            Contact
          </div>
          {/* <DarkModeToggleButton /> */}
        </nav>
      </div>
    </header>
  );
}
