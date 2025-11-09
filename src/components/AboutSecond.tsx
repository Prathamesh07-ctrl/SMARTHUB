import { useEffect, useRef, useState } from "react";
import designerImage2 from "@/assets/designer-photo-2.jpg";

const AboutSecond = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-hero"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={designerImage2}
                    alt="Interior designer portrait"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-full"
                  />
                </div>
                <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.1)] pointer-events-none" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <p className="font-inter text-accent text-sm font-medium mb-4 tracking-wider uppercase">
              My Approach
            </p>
            <h2 className="font-lora text-4xl md:text-5xl font-bold text-foreground mb-6">
              Design Philosophy and
              <br />
              <span className="text-accent">Creative Process</span>
            </h2>
            <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
              <p>
                My design philosophy centers on creating harmonious spaces that reflect the unique personality and lifestyle of each client. I believe that great design is not just about aesthetics, but about creating environments that enhance well-being and inspire daily life.
              </p>
              <p>
                Through a collaborative process, I work closely with clients to understand their needs, preferences, and aspirations. Each project begins with a thorough consultation to grasp the essence of what the space needs to achieve, followed by a detailed design plan that balances creativity with functionality.
              </p>
              <p className="font-medium text-foreground">
                The result is a thoughtfully designed space that not only meets practical requirements but also tells a story and evokes emotion—creating a home that truly feels like you.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {[
                { number: "12+", label: "Years Experience" },
                { number: "200+", label: "Designs Created" },
                { number: "85+", label: "Awards Won" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-lora text-3xl md:text-4xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;