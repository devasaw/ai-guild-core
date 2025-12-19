import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container-premium relative z-10"
      >
        {/* Section label */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-primary tracking-wide-custom uppercase text-sm font-medium">
            The Vision
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          variants={itemVariants}
          className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight-custom mb-8 max-w-4xl"
        >
          Not a forum.{' '}
          <span className="text-muted-foreground">A guild of builders shaping the future of intelligence.</span>
        </motion.h2>

        {/* Description grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              title: "High-Signal Discourse",
              description: "Every conversation cuts through noise. Technical depth, research insights, and real-world applications — no fluff.",
            },
            {
              title: "Builder-First Culture",
              description: "Ship code, publish papers, launch products. This is where theory meets execution at the highest level.",
            },
            {
              title: "Curated Network",
              description: "Rigorous vetting ensures every member adds value. Your peers are CTOs, researchers, and founders building the future.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-card p-8 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <h3 className="font-syne text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
