import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury interior design showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <p className="font-inter text-accent text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            MOTION ART & RIOR TRAINING
          </p>
          <h1 className="font-lora text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            <div className="font-bold text-foreground">SMART HUB</div>
            <div className="text-accent"> SPADE MOTION ART & RIOR TRAINING</div>
          </h1>
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Transform your vision into stunning reality with bespoke interior
            design that reflects your unique style and elevates everyday living.
          </p>
          <Button
            onClick={scrollToPortfolio}
            size="lg"
            className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold font-inter font-medium text-base px-8 py-6"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;