import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "Working with this designer was an absolute dream. She transformed our dated house into a modern sanctuary that perfectly reflects our family's style. Every detail was thoughtfully considered, and the result exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    content:
      "The commercial space design for our restaurant was exceptional. Not only does it look stunning, but it's also highly functional. Our customers constantly compliment the ambiance, and our staff loves working in such a beautiful environment.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Boutique Owner",
    content:
      "I couldn't be happier with my boutique's interior. The design perfectly captures our brand's aesthetic while creating an inviting shopping experience. Sales have increased significantly since the renovation!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CEO",
    content:
      "Our office redesign has completely transformed our company culture. The modern, thoughtful design has boosted employee morale and productivity. We receive compliments from every visitor and client.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-inter text-accent text-sm font-medium mb-4 tracking-wider uppercase">
            Testimonials
          </p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it—hear from clients who have
            experienced the transformation.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-card rounded-2xl shadow-medium p-8 md:p-12">
            <Quote className="w-12 h-12 text-accent/20 mb-6" />
            
            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="font-inter text-lg md:text-xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-lora text-xl font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-accent hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-border hover:bg-accent/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-accent hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
