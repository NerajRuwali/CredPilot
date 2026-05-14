import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Cpu, BarChart3, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: MousePointer2,
    title: "Sync Your Portfolio",
    description: "Connect your bank statements or enter details manually. We use bank-grade 256-bit encryption to keep your data invisible.",
    color: "accent"
  },
  {
    icon: Cpu,
    title: "The Engine Analyzes",
    description: "Our proprietary AI doesn't just look at credit scores. It analyzes cash flow patterns to find your true leverage.",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "Optimize & Compare",
    description: "See exactly how much you can borrow across 40+ lenders. Adjust tenures and see real-time rate impact.",
    color: "accent"
  },
  {
    icon: ShieldCheck,
    title: "Zero-Friction Choice",
    description: "Select the best deal and apply instantly. No paperwork, no hidden traps, just a direct path to funding.",
    color: "accent"
  }
];

const HowItWorks = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-black">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,214,0,0.05),transparent)] pointer-events-none"></div>
      
      <div className="text-center mb-16 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] block mb-3 sm:mb-4">The Journey</span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">From Data to <span className="text-accent italic font-serif">Disbursement.</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto font-medium text-base sm:text-lg">We've automated the friction out of the lending process, so you can focus on your goals.</p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative group h-full"
            >
              <div className="glass-card p-8 sm:p-10 h-full border-white/5 bg-white/[0.01] flex flex-col">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent text-background flex items-center justify-center mb-6 sm:mb-8 shadow-glow-strong group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shrink-0 mx-auto sm:mx-0">
                  <step.icon size={24} sm-size={28} />
                </div>
                
                <div className="absolute top-4 right-6 sm:-top-6 sm:-right-6 text-4xl sm:text-6xl font-black text-white/[0.02] select-none pointer-events-none">
                  0{i + 1}
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 tracking-tight group-hover:text-accent transition-colors text-center sm:text-left">{step.title}</h3>
                <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-medium group-hover:text-white/60 transition-colors text-center sm:text-left">
                  {step.description}
                </p>
              </div>

              {/* Connector Dot (Desktop) */}
              <div className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-accent/20 -translate-y-1/2 hidden lg:block group-last:hidden">
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Quote Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 sm:mt-32 p-8 sm:p-10 glass-card bg-accent/5 border-accent/10 flex flex-col items-center text-center"
      >
        <p className="text-accent text-base sm:text-lg lg:text-xl font-bold italic font-serif mb-6 leading-relaxed">
          "The fastest way to borrow isn't to walk into a bank. It's to walk into your own data."
        </p>
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-6 sm:w-8 bg-accent/30"></div>
          <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/40 font-bold">Product Philosophy</span>
          <div className="h-[1px] w-6 sm:w-8 bg-accent/30"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
