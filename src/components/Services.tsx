import { useEffect, useRef, useState } from "react";
import { Home, Box, Lightbulb, PenTool, Palette, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description:
      "Creating beautiful, functional living spaces tailored to your lifestyle and aesthetic preferences.",
  },
  {
    icon: LayoutGrid,
    title: "Commercial Design",
    description:
      "Professional office and retail spaces that enhance productivity and leave lasting impressions.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description:
      "Photorealistic renderings that bring your design vision to life before construction begins.",
  },
  {
    icon: Lightbulb,
    title: "Design Consultation",
    description:
      "Expert guidance on space planning, color schemes, and design decisions for your project.",
  },
  {
    icon: PenTool,
    title: "Renovation Planning",
    description:
      "Strategic renovation plans that maximize value and transform existing spaces beautifully.",
  },
  {
    icon: Palette,
    title: "Custom Furniture",
    description:
      "Bespoke furniture design and curation to perfectly complement your unique space.",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-hero"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-inter text-accent text-sm font-medium mb-4 tracking-wider uppercase">
            Services
          </p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-foreground mb-6">
            What I Offer
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design services tailored to transform your
            space into something extraordinary.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="bg-card rounded-lg p-8 shadow-soft hover:shadow-gold transition-all duration-500 h-full hover:-translate-y-2">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:shadow-gold transition-all duration-500">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-lora text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
