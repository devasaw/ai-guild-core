import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] animate-glow-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-syne text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight-custom mb-6"
          >
            Ready to{' '}
            <span className="text-gradient">Ascend</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Join the guild of elite AI minds. Build with the best. 
            Shape the future of intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="btn-primary rounded-lg text-background font-syne font-semibold text-lg px-10 py-5 glow-primary">
              Apply for Membership
            </button>
          </motion.div>

          {/* Trust indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            Applications reviewed within 48 hours · Limited membership
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
