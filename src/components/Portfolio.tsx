import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

type Category = "All" | "Residential" | "Commercial" | "Modern" | "Minimalist";

interface Project {
  id: number;
  title: string;
  category: Category[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Luxury Bedroom Suite",
    category: ["Residential", "Modern"],
    image: project1,
  },
  {
    id: 2,
    title: "Contemporary Office Space",
    category: ["Commercial", "Minimalist"],
    image: project2,
  },
  {
    id: 3,
    title: "Modern Kitchen Design",
    category: ["Residential", "Modern"],
    image: project3,
  },
  {
    id: 4,
    title: "Spa-Inspired Bathroom",
    category: ["Residential", "Minimalist"],
    image: project4,
  },
  {
    id: 5,
    title: "Artistic Living Room",
    category: ["Residential", "Modern"],
    image: project5,
  },
  {
    id: 6,
    title: "Boutique Hotel Lobby",
    category: ["Commercial", "Modern"],
    image: project6,
  },
];

const categories: Category[] = [
  "All",
  "Residential",
  "Commercial",
  "Modern",
  "Minimalist",
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
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

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory));

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-inter text-accent text-sm font-medium mb-4 tracking-wider uppercase">
            Portfolio
          </p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a curated selection of my work, showcasing diverse styles
            and creative solutions for residential and commercial spaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`font-inter font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold"
                  : "border-border hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-lora text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat) => (
                        <span
                          key={cat}
                          className="font-inter text-xs px-3 py-1 bg-accent/20 backdrop-blur-sm text-white rounded-full"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
