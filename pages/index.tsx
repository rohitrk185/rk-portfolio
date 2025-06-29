import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import Head from "next/head";
import homeData from "../data/home.json"; // Assuming you created data/home.json
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedName from "../components/AnimatedName";

function Home() {
  const [init, setInit] = useState(false);

  // State for the animated name
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      console.log(container);
    },
    []
  );

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        // color: {
        //   value: '#0d47a1',
        // },
        image: "",
        position: "",
        repeat: "",
        size: "",
        opacity: 1,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: {
          color: {
            value: "#fff",
          },
          opacity: 1,
        },
        enable: false,
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onDiv: {
            selectors: [],
            enable: false,
            mode: [],
            type: "circle",
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          trail: {
            delay: 1,
            pauseOnStop: false,
            quantity: 1,
          },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: {
            distance: 200,
          },
          bubble: {
            distance: 400,
            duration: 2,
            mix: false,
            opacity: 0.8,
            size: 40,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: [],
            },
          },
          connect: {
            distance: 80,
            links: {
              opacity: 0.5,
            },
            radius: 60,
          },
          grab: {
            distance: 400,
            links: {
              blink: false,
              consent: false,
              opacity: 1,
            },
          },
          push: {
            default: true,
            groups: [],
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: {
            factor: 3,
            radius: 200,
          },
          light: {
            area: {
              gradient: {
                start: {
                  value: "#ffffff",
                },
                stop: {
                  value: "#000000",
                },
              },
              radius: 1000,
            },
            shadow: {
              color: {
                value: "#000000",
              },
              length: 2000,
            },
          },
        },
      },
      manualParticles: [],
      particles: {
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        collisions: {
          absorb: {
            speed: 2,
          },
          bounce: {
            horizontal: {
              value: 1,
            },
            vertical: {
              value: 1,
            },
          },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: {
            enable: true,
            retries: 0,
          },
        },
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
          },
        },
        effect: {
          close: true,
          fill: true,
          options: {},
          type: [],
        },
        groups: {},
        move: {
          angle: {
            offset: 0,
            value: 90,
          },
          attract: {
            distance: 200,
            enable: false,
            rotate: {
              x: 3000,
              y: 3000,
            },
          },
          center: {
            x: 50,
            y: 50,
            mode: "percent",
            radius: 0,
          },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: {
              value: 0,
            },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 2,
          spin: {
            acceleration: 0,
            enable: false,
          },
          straight: false,
          trail: {
            enable: false,
            length: 10,
            fill: {},
          },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
          limit: {
            mode: "delete",
            value: 0,
          },
          value: 90,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 3,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: {
            value: "#000",
          },
          enable: false,
          offset: {
            x: 0,
            y: 0,
          },
        },
        shape: {
          close: true,
          fill: true,
          options: {},
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 10,
          },
          animation: {
            count: 0,
            enable: true,
            speed: 20,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        stroke: {
          width: 0,
        },
        zIndex: {
          value: 0,
          opacityRate: 1,
          sizeRate: 1,
          velocityRate: 1,
        },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: {
              value: 3,
            },
            rate: {
              value: {
                min: 4,
                max: 9,
              },
            },
            sizeOffset: true,
            particles: {},
          },
        },
        roll: {
          darken: {
            enable: false,
            value: 0,
          },
          enable: false,
          enlighten: {
            enable: false,
            value: 0,
          },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
          particles: {
            enable: false,
            frequency: 0.05,
            opacity: 1,
          },
        },
        wobble: {
          distance: 5,
          enable: false,
          speed: {
            angle: 50,
            move: 10,
          },
        },
        life: {
          count: 0,
          delay: {
            value: 0,
            sync: false,
          },
          duration: {
            value: 0,
            sync: false,
          },
        },
        rotate: {
          value: 0,
          animation: {
            enable: false,
            speed: 0,
            decay: 0,
            sync: false,
          },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: {
            value: 45,
          },
          width: 1,
        },
        links: {
          blink: false,
          color: {
            value: "#ffffff",
          },
          consent: false,
          distance: 150,
          enable: true,
          frequency: 1,
          opacity: 0.4,
          shadow: {
            blur: 5,
            color: {
              value: "#000",
            },
            enable: false,
          },
          triangles: {
            enable: false,
            frequency: 1,
          },
          width: 1,
          warp: false,
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      name: "Parallax",
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
    }),
    []
  );

  const socialIcons: { [key: string]: React.ElementType } = {
    FaGithub,
    FaLinkedin,
  };

  // Reset animation if homeData.name changes (though unlikely for static JSON)
  // useEffect(() => {
  //   console.log(homeData);
  // }, []);

  return (
    <div>
      <Head>
        <title>Rohit Kumar R | Home Page</title>
      </Head>
      <div id="container">
        <main className="flex-1">
          <div
            id="tsparticles"
            style={{ height: "100vh", overflow: "auto" }}
            className="w-full relative"
          >
            {init && (
              <Particles
                id="tsparticles"
                options={options}
                particlesLoaded={particlesLoaded}
              />
            )}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              {/* <div
                style={{ width: '20vw', height: '20vw' }}
                className="mx-auto rounded-full overflow-hidden"
              >
                <img
                  src="https://media.licdn.com/dms/image/D5603AQFJHsp7k3lE5g/profile-displayphoto-shrink_800_800/0/1690062986221?e=1708560000&v=beta&t=zxWNvDHLTmQQPPKctNEKAUeFohd1AunVBSIpRABI0Sc"
                  alt="Rohit Kumar R"
                  className="w-full h-full object-cover"
                />
              </div> */}
              <p
                className={
                  "gradientText text-5xl sm:text-7xl md:text-8xl font-bold mt-4 text-center transition-all ease-in-out duration-200 flex flex-col gap-2 md:block"
                }
                style={{
                  // fontFamily: 'Lato, sans-serif',
                  // fontFamily: "var(--font-montserrat), sans-serif",
                  // fontFamily: "var(--font-raleway), sans-serif",
                  fontWeight: 900,
                }}
              >
                <span className="text-4xl sm:text-6xl md:text-7xl">
                  Hey, I&apos;m{" "}
                </span>
                {/* Animated Name */}
                <AnimatedName name={homeData.name} />
              </p>

              {/* Glass box for taglines */}
              <div className="mt-6 mx-auto p-4 sm:p-6 bg-white/10 backdrop-blur-[6px] rounded-xl shadow-lg border border-white/20 w-10/12 md:max-w-max">
                {homeData.taglines.map((tagline, index) => (
                  <p
                    key={index}
                    className={
                      "shadowText text-lg md:text-xl text-center text-white " +
                      (index < homeData.taglines.length - 1 ? "mb-4" : "") // Add margin bottom to all but the last tagline
                    }
                  >
                    {tagline}
                  </p>
                ))}
              </div>

              <div className="flex justify-center mt-8 space-x-2 sm:space-x-4 md:space-x-8">
                {homeData.socialLinks.map((social) => {
                  const IconComponent = socialIcons[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white transition-transform ease-in-out duration-200 hover:scale-115 sm:hover:scale-130 md:hover:scale-150 hover:text-[#3b82f6]"
                    >
                      {IconComponent && <IconComponent size={36} />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
