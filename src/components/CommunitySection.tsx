import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { MessageSquare, Zap, Trophy, Users } from 'lucide-react';

const activities = [
  {
    icon: Zap,
    title: "Live Builds",
    description: "Watch members ship real products in real-time. Learn from the process, not just the outcome.",
    stat: "Weekly Sessions",
  },
  {
    icon: MessageSquare,
    title: "Deep Discussions",
    description: "Technical debates, research breakdowns, and strategic conversations that actually matter.",
    stat: "24/7 Active",
  },
  {
    icon: Users,
    title: "Expert AMAs",
    description: "Exclusive Q&A sessions with industry leaders, researchers, and founders building the future.",
    stat: "Monthly Events",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    description: "Competitive building sprints with prizes, recognition, and pathways to opportunity.",
    stat: "Quarterly",
  },
];

const CommunitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-card/30">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      <div ref={ref} className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary tracking-wide-custom uppercase text-sm font-medium">
            Inside the Guild
          </span>
          <h2 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight-custom mt-4">
            Community in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            This isn't a passive membership. It's an active ecosystem where every member contributes to collective intelligence.
          </p>
        </motion.div>

        {/* Scrolling cards */}
        <motion.div 
          style={{ x }}
          className="flex gap-6 pb-4"
        >
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[320px]"
            >
              <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs text-primary font-medium tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-full">
                    {activity.stat}
                  </span>
                </div>
                
                <h3 className="font-syne text-xl font-semibold mb-3">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
      </div>
    </section>
  );
};

export default CommunitySection;
