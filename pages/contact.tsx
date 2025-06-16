import Head from "next/head";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Assuming you might want a LeetCode icon

// Define a type for contact items for better structure
interface ContactItem {
  name: string;
  href: string;
  icon: React.ElementType;
  handle?: string; // Optional: for displaying username/handle
}

function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  const contactItems: ContactItem[] = [
    {
      name: "Email",
      href: `mailto:${contactEmail}`,
      icon: FaEnvelope,
      handle: contactEmail,
    },
    {
      name: "GitHub",
      href: "https://github.com/rohitrk185", // Replace with your GitHub profile URL
      icon: FaGithub,
      handle: "rohitrk185",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-kumar-r-425b0521b", // Replace with your LinkedIn profile URL
      icon: FaLinkedin,
      handle: "Rohit Kumar R",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/rohitsmudge190/", // Replace with your LeetCode profile URL
      icon: SiLeetcode,
      handle: "rohitsmudge190",
    },
    {
      name: "Twitter / X",
      href: "https://x.com/190R0hit", // Replace with your Twitter/X profile URL
      icon: FaTwitter,
      handle: "@190R0hit",
    },
  ];

  return (
    <div>
      <Head>
        <title>Rohit Kumar R | Contact Me</title>
        <meta
          name="description"
          content="Contact Rohit Kumar R through various channels including email, GitHub, LinkedIn, LeetCode, and Twitter."
        />
      </Head>
      <main
        className="flex-1 p-4 min-h-screen flex flex-col items-center justify-center"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something amazing. Feel free to reach
            out!
          </p>

          <div className="space-y-6">
            {contactItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                // Changed to flex-col for vertical stacking, items-center for horizontal centering of stacked items
                className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-[0.07] backdrop-blur-md rounded-lg shadow-lg hover:bg-opacity-[0.15] transition-all duration-300 ease-in-out group"
              >
                {/* Icon with margin-bottom for spacing, removed margin-right */}
                <item.icon className="text-sky-400 group-hover:text-sky-300 text-3xl md:text-4xl mb-2 transition-colors duration-300" />
                {/* Text content now centered */}
                <div className="text-center">
                  <span className="block text-lg md:text-xl font-semibold text-neutral-100 group-hover:text-white transition-colors duration-300 leading-tight">
                    {item.name}
                  </span>
                  {item.handle && (
                    <span className="block text-sm md:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-tight">
                      {item.handle}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
