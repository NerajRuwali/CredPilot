import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, BarChart3, Globe, Cpu, Clock, MousePointer2, Fingerprint, Eye } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: "Privacy First Identity",
    description: "We don't just secure data. We anonymize your financial footprint until you're ready to share with lenders.",
    tag: "Security"
  },
  {
    icon: Zap,
    title: "60-Second Verdict",
    description: "Our direct API integrations with credit bureaus and 40+ banks mean no waiting. Just answers.",
    tag: "Speed"
  },
  {
    icon: BarChart3,
    title: "Scenario Planning",
    description: "Visualize 'What-if' scenarios. What if you paid off a credit card? What if you increased your tenure?",
    tag: "Analytics"
  },
  {
    icon: Eye,
    title: "Hidden Cost Detector",
    description: "We scan the fine print for processing fees, foreclosure charges, and floating rate traps.",
    tag: "Transparency"
  },
  {
    icon: Cpu,
    title: "AI Rate Arbitrage",
    description: "Our engine constantly looks for interest rate drops and suggests when to refinance your existing loans.",
    tag: "Optimization"
  },
  {
    icon: MousePointer2,
    title: "Single-Click Apply",
    description: "Once eligible, your verified profile is accepted by our partners with zero additional paperwork.",
    tag: "Experience"
  }
];

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="glass-card p-6 sm:p-8 group relative overflow-hidden h-full flex flex-col"
  >
    <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent/5 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-8 sm:mb-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/[0.03] border border-white/10 rounded-xl flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500">
          <feature.icon className="text-white/60 group-hover:text-accent transition-colors" size={20} sm-size={24} />
        </div>
        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/20">
          {feature.tag}
        </span>
      </div>
      
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-accent transition-colors tracking-tight">
        {feature.title}
      </h3>
      <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-medium">
        {feature.description}
      </p>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section className="section-padding relative">
      <div className="max-w-3xl mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] block mb-3 sm:mb-4">The Platform</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Designed for the <br className="hidden sm:block" />
            <span className="text-accent">Financially Ambitious.</span>
          </h2>
          <p className="text-white/40 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
            CredPilot isn't just a comparison site. It's a precision instrument built to 
            navigate the complex landscape of debt and credit.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Storytelling Connective Element */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 glass-card border-accent/20 bg-accent/[0.02] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 sm:gap-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,214,0,0.1),transparent)] pointer-events-none"></div>
        
        <div className="max-w-xl relative z-10 text-center lg:text-left">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Wait, how is this different from my bank?</h3>
          <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-8">
            Banks want to sell you their products. We want you to find the best product, 
            period. We look at your holistic financial data—not just a single credit 
            score—to find leverage you didn't know you had.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
            {['Unbiased', 'Transparent', 'Instant'].map((tag) => (
              <div key={tag} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className="text-[9px] sm:text-[10px] font-bold text-white/40 uppercase tracking-widest">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="btn-primary whitespace-nowrap w-full lg:w-auto"
        >
          Explore All Capabilities
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
