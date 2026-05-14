import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-accent to-[#C7A700] p-8 sm:p-16 lg:p-24 text-center"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-40 sm:w-80 h-40 sm:h-80 bg-white rounded-full blur-[60px] sm:blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-60 sm:w-96 h-60 sm:h-96 bg-black rounded-full blur-[80px] sm:blur-[140px]"></div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md text-background text-[10px] font-black mb-6 sm:mb-8 uppercase tracking-[0.2em]"
          >
            <Sparkles size={14} />
            Instant Verdict Engine
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-background mb-6 tracking-tight leading-[0.95]">
            Secure Your <br className="hidden sm:block" /> Financial Future.
          </h2>
          
          <p className="text-background/70 text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto font-bold leading-relaxed px-4">
            Join the elite circle of users navigating the debt market with clinical precision. Your analysis is ready.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link to="/eligibility" className="bg-background text-accent font-black px-8 py-5 rounded-2xl text-xs sm:text-sm uppercase tracking-widest hover:shadow-2xl transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              Start Free Analysis <ArrowRight size={18} />
            </Link>
            <Link to="/calculator" className="bg-transparent border-2 border-background/20 text-background font-black px-8 py-5 rounded-2xl text-xs sm:text-sm uppercase tracking-widest hover:bg-background/10 transition-all w-full sm:w-auto">
              Simulate EMI
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
