import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : ''
      }`}
    >
      <div className="container-premium py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-syne text-xl font-bold">
          Gods of <span className="text-gradient">AI</span>
        </a>

        {/* Navigation links - desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Community", "Membership"].map((link, i) => (
            <a 
              key={i}
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-underline"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-primary rounded-lg text-sm px-5 py-2.5 text-background font-medium">
          Apply Now
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
