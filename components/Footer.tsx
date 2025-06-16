import Link from "next/link";
import { useMemo } from "react";

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer
      className="text-white p-2 sm:p-3"
      style={{
        background: "linear-gradient(to right, #171F29, #3F4C6B, #171F29)",
      }}
    >
      <div className="max-w-2xl mx-auto flex justify-center items-center gap-x-2">
        <p className="text-neutral-200 text-center text-sm sm:text-base">
          &copy; {year}
        </p>

        <p className="text-xl text-white">|</p>
        <p className="text-center text-sm sm:text-base text-neutral-200">
          <span className="">Made by</span>{" "}
          <span className="text-blue-300 hover:underline transition-colors ease-in-out hover:text-blue-500">
            Rohit Kumar R
          </span>{" "}
          using{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline transition-colors ease-in-out hover:text-blue-500"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline transition-colors ease-in-out hover:text-blue-500"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
