import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-background">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        
        {/* Gradient orbs */}
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        >
          <div className="w-full h-full bg-primary animate-glow-pulse" />
        </motion.div>
        
        <motion.div 
          style={{ y }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <div className="w-full h-full bg-accent animate-glow-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 container-premium text-center"
      >
        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight-custom mb-4"
        >
          <span className="block">Where Elite</span>
          <span className="block text-gradient">AI Minds</span>
          <span className="block">Converge</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-8"
        >
          A curated guild of AI researchers, engineers, and visionaries. 
          High-signal discussions. Real builders. Real outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="btn-primary rounded-lg text-background font-syne font-semibold">
            Apply to Join
          </button>
          <button className="btn-outline rounded-lg text-foreground font-syne">
            Explore the Guild
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "500+", label: "Elite Members" },
            { value: "50+", label: "AI Companies" },
            { value: "∞", label: "Possibilities" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-syne text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-border flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
