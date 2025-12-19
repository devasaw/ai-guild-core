import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, FlaskConical, Lightbulb, Rocket } from 'lucide-react';

const personas = [
  {
    icon: Code,
    title: "AI Engineers",
    description: "Building production systems, pushing model performance, architecting ML infrastructure at scale.",
    tags: ["MLOps", "LLMs", "Systems"],
  },
  {
    icon: FlaskConical,
    title: "Researchers",
    description: "Publishing papers, exploring frontiers, advancing the fundamental science of machine intelligence.",
    tags: ["NeurIPS", "ICML", "arXiv"],
  },
  {
    icon: Lightbulb,
    title: "Students & Rising Builders",
    description: "The next generation of AI talent. Hungry, learning fast, and shipping side projects.",
    tags: ["Learning", "Projects", "Growth"],
  },
  {
    icon: Rocket,
    title: "Founders & CTOs",
    description: "Leading AI companies, making strategic bets, scaling products to millions of users.",
    tags: ["Startups", "Scale", "Vision"],
  },
];

const PersonasSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-wide-custom uppercase text-sm font-medium">
            Who We Are
          </span>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight-custom mt-4">
            Built for the <span className="text-gradient">Elite Few</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full hover:border-primary/40 transition-all duration-500 hover:bg-card/90">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <persona.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {persona.tags.map((tag, j) => (
                        <span 
                          key={j}
                          className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="font-syne text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {persona.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
