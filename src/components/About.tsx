import { useEffect, useRef, useState } from "react";
import designerImage1 from "@/assets/designer-photo-1.jpg";

const About = () => {
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
      id="about"
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
                    src={designerImage1}
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
              About Me
            </p>
            <h2 className="font-lora text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creating Spaces with
              <br />
              <span className="text-accent">Purpose & Beauty</span>
            </h2>
            <div className="space-y-4 font-inter text-muted-foreground leading-relaxed">
              <p>
                With over a decade of experience in luxury interior design, I
                believe that every space tells a story. My approach combines
                timeless elegance with contemporary functionality, creating
                environments that not only look beautiful but also enhance the
                way you live and work.
              </p>
              <p>
                Specializing in residential and commercial projects, I work
                closely with each client to understand their vision, lifestyle,
                and aspirations. From concept to completion, my goal is to
                transform spaces into personalized sanctuaries that reflect your
                unique style and needs.
              </p>
              <p className="font-medium text-foreground">
                Every project is an opportunity to create something truly
                exceptional—where form meets function and beauty meets purpose.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "150+", label: "Projects Completed" },
                { number: "50+", label: "Happy Clients" },
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

export default About;