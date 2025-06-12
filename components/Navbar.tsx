import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

interface NavbarProps {
  fixed?: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function Navbar({ fixed = true, isMenuOpen, toggleMenu }: NavbarProps) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/resume");
    router.prefetch("/education");
    router.prefetch("/skills");
    router.prefetch("/experience");
    router.prefetch("/projects");
    router.prefetch("/contact");
  }, [router]);

  useEffect(
    function () {
      const handleResize = function () {
        if (window.innerWidth >= 916 && isMenuOpen) {
          toggleMenu();
        }
      };

      window.addEventListener("resize", handleResize);

      return function () {
        window.removeEventListener("resize", handleResize);
      };
    },
    [isMenuOpen, toggleMenu]
  );
  return (
    <nav
      style={{
        zIndex: 10,
        position: fixed ? "fixed" : "relative",
        top: fixed ? 0 : "auto",
        width: fixed ? "100%" : "auto",
        // background: "linear-gradient(to right, #171F29, #171F29, #171F29)",
      }}
      className="flex text-white p-4 items-center h-16 justify-center w-full px-2 md:px-6 lg:px-8 border-b-[0.5px] border-gray-500 bg-black bg-opacity-5 backdrop-blur bg-blend-darken"
    >
      <div className="flex items-center justify-center">
        <Link href="/">
          <span className="flex items-center justify-center">
            <img
              src="/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2 transform transition-transform duration-200 ease-in-out hover:scale-125 hover:rotate-[15deg] rounded-lg"
            />
            <span className="hidden lg:inline-block text-white font-bold text-lg ml-3 hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500">
              Home
            </span>
            <HomeIcon className="inline-block lg:hidden h-6 w-6 text-white ml-3 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500" />
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center flex-1 md:pl-0 lg:pl-10 xl:pl-24">
        <div className="flex justify-end">
          <Link href="/resume">
            <span className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Resume
            </span>
          </Link>
          <Link href="/education">
            <span className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Education
            </span>
          </Link>
          <Link href="/skills">
            <span className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Skills
            </span>
          </Link>
          <Link href="/experience">
            <span className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Experience
            </span>
          </Link>
          <Link href="/projects">
            <span className="text-white mx-4 text-lg hover:text-2xl transition-fontSize duration-200 ease-in-out hover:text-blue-500 text-center">
              Projects
            </span>
          </Link>
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <a
          href="https://github.com/Kevin-Kwan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/kevinkwan3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500 ml-4 mr-4"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
      </div>
      <div className="hidden md:block items-center">
        <Link href="/contact">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto hover:text-xl transition-fontSize ease-in-out duration-200">
            Contact Me
          </button>
        </Link>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <button
          className="text-white hover:text-gray-300 focus:outline-none h-6 w-6 inline-block"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RxCross1 size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
