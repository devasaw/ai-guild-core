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
        {/* Target audience badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6"
        >
          <span className="text-sm tracking-wide text-primary font-medium">
            For AI Engineers, Researchers & Founders
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-syne text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight-custom mb-4"
        >
          <span className="block text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-medium mb-2">Stop Scrolling LinkedIn.</span>
          <span className="block">Join the Inner Circle of</span>
          <span className="block text-gradient">AI Builders</span>
        </motion.h1>

        {/* Subtext - Benefits focused */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-6"
        >
          Get exclusive job referrals, learn from top AI researchers, 
          and build your network with engineers from leading AI labs.
        </motion.p>

        {/* Benefits pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {[
            "🎯 Curated Job Board",
            "🧠 Weekly AI Deep Dives",
            "🤝 Direct Founder Access",
            "🚀 Launch Support"
          ].map((benefit, i) => (
            <span 
              key={i} 
              className="px-3 py-1.5 text-sm bg-card/60 border border-border/50 rounded-full text-foreground/80"
            >
              {benefit}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button className="btn-primary rounded-lg text-background font-syne font-semibold">
            Apply to Join
          </button>
          <button className="btn-outline rounded-lg text-foreground font-syne">
            Explore the Guild
          </button>
        </motion.div>

        {/* Credibility section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-6"
        >
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto">
            {[
              { value: "500+", label: "Members" },
              { value: "50+", label: "AI Companies" },
              { value: "$2M+", label: "Deals Closed" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-syne text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Company logos */}
          <div className="pt-4 border-t border-border/30">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Members from</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-muted-foreground/60">
              {["OpenAI", "Google DeepMind", "Anthropic", "Meta AI", "Microsoft", "Hugging Face"].map((company, i) => (
                <span key={i} className="font-syne text-sm font-medium tracking-wide hover:text-foreground transition-colors">
                  {company}
                </span>
              ))}
            </div>
          </div>
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
