import "./globals.scss";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { useRouter, NextRouter } from "next/router";
import Head from "next/head";
import StarBackground from "../components/StarBackground";
import Layout from "../components/RootLayout";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "900"], // Added various weights
});

function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();
  return (
    <main className={`${poppins.variable} font-sans`}>
      <StarBackground />
      <AnimatePresence mode="wait">
        <div key={router.pathname} className="">
          <Head>
            {/* Favicon links moved inside Head */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/favicon/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon/favicon-32x32.png"
            />
            <meta charSet="utf-8" />
            <title>Rohit Kumar R | Software Engineering Portfolio</title>
            <meta
              name="description"
              content="A custom-made portfolio showcasing a talented, entry-level software engineer based in Atlanta, Georgia and his skills, experience, projects, and more."
            />
            <meta
              name="keywords"
              content="Rohit Kumar R, Software Engineering, Software Engineer, Software Development, Software Developer, Computer Science, Software Engineering Portfolio, Full Stack, Full Stack Developer, Web Developement, Web Developer, Frontend Development, Backend Development, Full Stack Engineer, Full Stack Software Engineer, Full Stack Software Developer"
            />
            <meta name="author" content="Rohit Kumar R" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              property="og:title"
              content="Rohit Kumar R | Software Engineering Portfolio"
            />
            <meta
              property="og:description"
              content="A custom-made portfolio website made by Rohit Kumar R, a talented, software engineer based in Bengaluru, India. The website is dedicated to showcase my skills, experience, projects, and more."
            />
            <meta property="og:type" content="website" />
            {/* <meta property="og:url" content="" /> */}
            <meta property="og:image" content="/favicon.png" />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/site.webmanifest" />
            <meta property="og:image:width" content="448" />
            <meta property="og:image:height" content="448" />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </AnimatePresence>
    </main>
  );
}

export default App;
