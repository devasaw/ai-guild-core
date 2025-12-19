import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  "OpenAI Alumni",
  "DeepMind",
  "Anthropic",
  "Cohere",
  "Stability AI",
  "Hugging Face",
  "NVIDIA",
  "Meta AI",
];

const PartnersSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-card/20">
      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-muted-foreground text-sm tracking-wide">
            Members from leading AI organizations
          </span>
        </motion.div>

        {/* Partner logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group"
            >
              <span className="text-lg font-syne font-medium text-muted-foreground/60 group-hover:text-primary transition-colors duration-300 cursor-default">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
