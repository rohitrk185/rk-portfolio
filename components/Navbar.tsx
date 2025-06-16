import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import navbarData from "../data/navbar.json";

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
        background: "linear-gradient(to right, #171F29, #222, #171F29)",
        // background: "linear-gradient(to right, #171F29, #171F29, #171F29)",
      }}
      className="flex text-white p-4 items-center h-16 justify-center w-full px-2 md:px-6 lg:px-8 border-b-[0.5px] border-gray-500 bg-opacity-5 backdrop-blur bg-blend-darken"
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
            <span className="hidden lg:inline-block text-neutral-100 font-bold text-lg ml-3 hover:text-2xl transition-fontSize duration-200 ease-in-out hover:bg-gradient-to-r hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent">
              Home
            </span>
            <HomeIcon className="inline-block lg:hidden h-6 w-6 text-white ml-3 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500" />
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center flex-1 md:pl-0 lg:pl-10 xl:pl-24">
        <div className="flex justify-end">
          {navbarData.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <span
                className={`mx-4 text-lg text-center transition-fontSize duration-200 ease-in-out 
                            ${
                              router.pathname === item.href
                                ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-700 bg-clip-text text-transparent text-2xl" // Updated active link style
                                : "text-neutral-100 hover:text-2xl hover:bg-gradient-to-r hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent" // Default and hover style
                            }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <a
          href="https://github.com/rohitrk185"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500"
        >
          <FaGithub className="h-6 w-6 text-neutral-50 hover:fill-[#3b82f6]" />
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-kumar-r-425b0521b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition-transform ease-in-out duration-200 hover:scale-150 hover:text-blue-500 ml-4 mr-4"
        >
          <FaLinkedin className="h-6 w-6 text-neutral-50 hover:fill-[#3b82f6]" />
        </a>
      </div>
      <div className="hidden md:block items-center">
        <Link href="/contact">
          <button className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-neutral-100 font-bold py-2 px-4 rounded ml-auto hover:text-xl hover:brightness-110 transition-all ease-in-out duration-200">
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
