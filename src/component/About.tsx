import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";
import { Code2, Palette, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

gsap.registerPlugin(_ScrollTrigger);
function About() {
  const aboutRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-card").forEach((card: any, index: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse",
          },
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className=" skill-card p-8 rounded-xl bg-gradient-to-br from-purple-900/50 to-transparent backdrop-blur-lg border border-purple-500/50">
            <Code2 className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Development
            </h3>
            <p className="text-gray-300">
              Building robust applications with modern technologies and best
              practices
            </p>
          </div>
          <div className=" skill-card p-8 rounded-xl bg-gradient-to-br from-blue-900/50 to-transparent backdrop-blur-lg border border-purple-500/50">
            <Palette className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Development
            </h3>
            <p className="text-gray-300">
              Building robust applications with modern technologies and best
              practices
            </p>
          </div>
          <div className=" skill-card p-8 rounded-xl bg-gradient-to-br from-pink-900/50 to-transparent backdrop-blur-lg border border-purple-500/50">
            <Rocket className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">
              Development
            </h3>
            <p className="text-gray-300">
              Building robust applications with modern technologies and best
              practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
