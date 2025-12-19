import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Eye, Briefcase, Users } from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: "Deep Learning",
    subtitle: "Knowledge",
    description: "Access cutting-edge research discussions, AMAs with industry leaders, and curated resources that accelerate your growth.",
  },
  {
    icon: Eye,
    title: "Visibility",
    subtitle: "Recognition",
    description: "Showcase your work to decision-makers. Get noticed by the people building the most important AI companies.",
  },
  {
    icon: Briefcase,
    title: "Opportunities",
    subtitle: "Career",
    description: "Exclusive job postings, collaboration requests, and partnership opportunities flowing through the network.",
  },
  {
    icon: Users,
    title: "Network",
    subtitle: "Connections",
    description: "Build relationships with peers who will shape the next decade of AI. Your network becomes your net worth.",
  },
];

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary tracking-wide-custom uppercase text-sm font-medium">
              Member Benefits
            </span>
            <h2 className="font-syne text-4xl md:text-5xl font-bold tracking-tight-custom mt-4 mb-6">
              What You <span className="text-gradient">Gain</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Membership isn't just about access — it's about transformation. 
              Every aspect is designed to accelerate your career and amplify your impact.
            </p>

            {/* CTA */}
            <button className="btn-outline rounded-lg text-foreground font-syne inline-flex items-center gap-2 group">
              View Full Benefits
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

          {/* Right side - Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-syne font-semibold">{benefit.title}</div>
                      <div className="text-xs text-muted-foreground">{benefit.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
