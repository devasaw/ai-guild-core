import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container-premium">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="font-syne text-2xl font-bold mb-4">
              Gods of <span className="text-gradient">AI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The exclusive guild for elite AI builders, researchers, and visionaries shaping the future of intelligence.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">Navigate</span>
            {["About", "Membership", "Community", "Apply"].map((link, i) => (
              <a 
                key={i}
                href="#" 
                className="text-foreground/80 hover:text-primary transition-colors hover-underline w-fit"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">Connect</span>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Gods of AI. For serious minds only.
          </p>
          <p className="text-xs text-muted-foreground/60 italic">
            "The future belongs to those who build it."
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
