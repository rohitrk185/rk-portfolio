import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

import navbarMenuLinksData from "../data/navbarMenuLinks.json";
type MenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

function NavbarMenu({ isMenuOpen, toggleMenu }: MenuProps) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/resume");
    router.prefetch("/education");
    router.prefetch("/skills");
    router.prefetch("/experience");
    router.prefetch("/projects");
    router.prefetch("/contact");
  }, [router]);
  // useEffect(() => {
  //   // If the menu is being opened, prevent scrolling. Otherwise, allow it.
  //   document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  // }, [isMenuOpen]);
  return (
    <motion.div
      style={{ zIndex: 5, backgroundColor: "#171F29", paddingTop: "64px" }}
      className={`${
        isMenuOpen ? "block" : "hidden"
      } fixed text-white w-full flex justify-center text-center md:hidden`}
      initial={{ y: "-100vh" }}
      animate={{ y: isMenuOpen ? "0" : "-100vh" }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-xl flex flex-col items-center justify-center w-full">
        <Link href={process.env.NEXT_PUBLIC_RESUME_LINK || "#"}>
          <button
            type="button"
            // Consistent hover style with other inactive links
            className="w-full block py-2 px-4 ease-in-out duration-200 transition-all text-white text-lg md:text-xl hover:text-2xl hover:bg-gradient-to-r hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent"
            onClick={toggleMenu}
          >
            Resume
          </button>
        </Link>

        {navbarMenuLinksData.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <button
              type="button"
              className={`w-full block py-2 px-4 ease-in-out duration-200 transition-all 
                          ${
                            router.pathname === item.href
                              ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-700 bg-clip-text text-transparent text-2xl font-semibold" // Active link style
                              : "text-white text-lg md:text-xl hover:text-2xl hover:bg-gradient-to-r hover:from-sky-400 hover:via-blue-500 hover:to-indigo-600 hover:bg-clip-text hover:text-transparent" // Default and hover style
                          }`}
              onClick={toggleMenu}
            >
              {item.name}
            </button>
          </Link>
        ))}

        <Link href="/contact">
          <div className="pb-3">
            <button
              className="text-lg md:text-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-bold py-2 px-4 rounded ease-in-out duration-200 hover:brightness-110 hover:text-xl transition-all"
              onClick={toggleMenu} // Ensure menu closes on contact click too
            >
              Contact Me
            </button>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
export default NavbarMenu;
