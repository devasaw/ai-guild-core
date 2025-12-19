import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Search, Crown } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Apply",
    description: "Submit your application with your background, projects, and what you'll bring to the community.",
  },
  {
    icon: Search,
    step: "02",
    title: "Get Reviewed",
    description: "Our curation team evaluates every application for technical depth, builder mindset, and community fit.",
  },
  {
    icon: Crown,
    step: "03",
    title: "Ascend",
    description: "Welcome to the guild. Your journey to shaping the future of AI begins now.",
  },
];

const JoinSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-wide-custom uppercase text-sm font-medium">
            Membership
          </span>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight-custom mt-4">
            How to <span className="text-gradient">Join</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We maintain quality through a thoughtful curation process. Here's what to expect.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-20 bottom-20 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="glass-card p-8 flex-1 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-primary/60 font-syne text-sm font-medium">{step.step}</span>
                    <h3 className="font-syne text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Applications are reviewed within 48 hours. We value depth over breadth.
        </motion.p>
      </div>
    </section>
  );
};

export default JoinSection;
