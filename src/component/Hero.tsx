import gsap from "gsap";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

function Hero() {
  const textRef = useRef(null);
  const starsRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // initial animation
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });

      //   star
      const stars = starsRef.current?.children;
      if (stars) {
        gsap.to(stars, {
          duration: 4,
          repeat: -1,
          y: "random(-50, 50)",
          x: "random(-50, 50)",
          ease: "sine.inOut",
          stagger: {
            amount: 0.1,
            from: "random",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    // hero section
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black w-full">
      {/* all bg shapes */}

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="hero-shape absolute top-20 left-10 w-40 h-40 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="hero-shape absolute top-40 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="hero-shape absolute bottom-20 left-1/2 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>

      {/* start */}

      <div
        ref={starsRef}
        className="absolute inset-0 z-0 flex justify-center items-center"
      >
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="w-1 h-1 bg-white rounded-full absolute"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              opacity: Math.random(),
            }}
          ></div>
        ))}
      </div>

      <div ref={textRef} className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Arif Hossain
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Full Stack Developer crafting beautiful digital experiences with
          modern technologies
        </p>
        {/* social icons */}

        <div className=" flex justify-center gap-6 mb-12">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* cta btn */}

        <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
          View My Work
        </button>
      </div>
    </div>
  );
}

export default Hero;
