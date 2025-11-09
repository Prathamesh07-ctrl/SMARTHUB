import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
    icon: Phone,
      label: "Phone",
      value: "+91 81808 40720",
      href: "tel:+91 81808 40720",
      
      icon: Phone,
      label: "Phone",
      value: "+91 866-8906674",
      href: "tel:+918668906674",
    },
    {
      icon: Mail,
      label: "Email",
      value: "smarthubcore@gmail.com",
      href: "mailto:smarthubcore@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik College Road",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/your_smart_hub?igsh=dG4xdm5uNzc1eGlt&utm_source=qr", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <section
      id="contact"
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
            Get in Touch
          </p>
          <h2 className="font-lora text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create Together
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? I'd love to hear about your project
            and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:shadow-gold transition-all duration-300 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-inter text-sm text-muted-foreground mb-1">
                      {item.label}
                    </div>
                    <div className="font-inter text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-inter text-sm text-muted-foreground mb-4">
                Follow me on social media
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center hover:bg-accent hover:shadow-gold transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-inter text-sm font-medium text-foreground mb-2 block"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-inter text-sm font-medium text-foreground mb-2 block"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="border-border focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="font-inter text-sm font-medium text-foreground mb-2 block"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Project inquiry"
                  className="border-border focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-inter text-sm font-medium text-foreground mb-2 block"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold font-inter font-medium text-base py-6"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
