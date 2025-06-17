import { useMemo } from "react";

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer
      className="text-white p-2 sm:p-3 text-xs"
      style={{
        background: "linear-gradient(to right, #171F29, #3F4C6B, #171F29)",
      }}
    >
      {/* Adjusted for better mobile responsiveness: flex-col on small screens, centered text */}
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-center items-center text-center sm:gap-x-2">
        <p className="text-neutral-200 text-xs sm:text-sm">&copy; {year}</p>
        <p className="text-lg text-white hidden sm:block">|</p>{" "}
        {/* Hidden on small screens, visible from sm upwards */}
        <p className="text-xs sm:text-sm text-neutral-200 mt-1 sm:mt-0">
          {" "}
          {/* Adjusted text size and margin for stacking */}
          <span className="">Made by</span>{" "}
          <span className="text-blue-300 hover:text-blue-400 transition-colors ease-in-out">
            Rohit Kumar R
          </span>{" "}
          using{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 transition-colors ease-in-out"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 transition-colors ease-in-out"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
