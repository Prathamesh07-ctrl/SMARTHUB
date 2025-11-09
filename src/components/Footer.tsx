const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-lora text-xl font-bold mb-4">SMART HUB</h3>
            <p className="font-inter text-sm text-white/70 leading-relaxed">
              Motion Art & RIOR Training - Creating innovative spaces and experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-inter text-sm font-semibold mb-4 tracking-wider uppercase">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {["Home", "About", "Portfolio", "Services", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block font-inter text-sm text-white/70 hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-inter text-sm font-semibold mb-4 tracking-wider uppercase">
              Contact
            </h4>
            <div className="space-y-2 font-inter text-sm text-white/70">
              <p>Nashik College Road</p>
              <p>
                <a
                  href="tel:+918668906674"
                  className="hover:text-accent transition-colors"
                >
                  +91 866-8906674
                </a>
              </p>
              <p>
                <a
                  href="mailto:smarthubcore@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  smarthubcore@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-sm text-white/50">
              © {currentYear} SMART HUB. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button className="font-inter text-sm text-white/50 hover:text-accent transition-colors">
                Privacy Policy
              </button>
              <button className="font-inter text-sm text-white/50 hover:text-accent transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
