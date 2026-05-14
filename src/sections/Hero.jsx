import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, TrendingUp, DollarSign, ArrowUpRight, Activity, PieChart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const MetricCard = ({ label, value, trend, icon: Icon, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
    className={`glass-card p-4 flex flex-col gap-1 min-w-[140px] sm:min-w-[160px] bg-white/[0.02] border-white/5 ${className}`}
  >
    <div className="flex justify-between items-start">
      <div className="p-2 rounded-lg bg-accent/10 text-accent">
        <Icon size={14} sm-size={16} />
      </div>
      {trend && (
        <span className="text-[9px] sm:text-[10px] text-green-400 font-bold flex items-center gap-0.5">
          <ArrowUpRight size={10} /> {trend}
        </span>
      )}
    </div>
    <span className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-widest mt-2 font-medium">{label}</span>
    <span className="text-base sm:text-lg font-bold text-white tracking-tight">{value}</span>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-12 sm:pt-20">
      {/* Background Ambience - Reduced for mobile performance */}
      <div className="absolute top-[-20%] right-[-10%] w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-accent/5 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none animate-pulse-glow"></div>
      
      <div className="section-padding grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Content Side */}
        <div className="lg:col-span-6 z-10 text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-accent text-[10px] sm:text-xs font-semibold mb-6 sm:mb-8 backdrop-blur-md mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              v2.4 Live: New Analytics Engine
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-[0.9] sm:leading-[0.9] tracking-tight">
              Borrow with <br />
              <span className="text-accent glow-text italic font-serif">Absolute</span> <br className="hidden sm:block" />
              Confidence.
            </h1>
            
            <p className="text-white/50 text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Understand your borrowing power before you talk to the bank. 
              Real-time eligibility, risk-adjusted rates, and a roadmap to 
              your financial goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
              <Link to="/eligibility" className="btn-primary group w-full sm:w-auto">
                See Borrowing Power 
                <ChevronRight size={18} sm-size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/calculator" className="btn-outline w-full sm:w-auto">
                Simulate Repayment
              </Link>
            </div>

            <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/5 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <span className="block text-lg sm:text-2xl font-bold text-white mb-1">₹84Cr</span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/30 font-bold">Assessed</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-bold text-white mb-1">12K+</span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/30 font-bold">Weekly</span>
              </div>
              <div>
                <span className="block text-lg sm:text-2xl font-bold text-white mb-1">2.4m</span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/30 font-bold">Speed</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Mockup Side */}
        <div className="lg:col-span-6 relative min-h-[350px] sm:min-h-[500px] lg:h-[600px] flex items-center justify-center order-1 lg:order-2">
          {/* Main Dashboard Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[500px] glass-card p-4 sm:p-6 border-white/10 relative z-10 shadow-2xl overflow-hidden group"
          >
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Activity size={14} sm-size={18} className="text-background" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs font-bold text-white leading-none">Financial Health</h4>
                  <p className="text-[8px] sm:text-[10px] text-white/30 mt-1 uppercase tracking-tighter">Updated 2 mins ago</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                <span className="text-[8px] sm:text-[10px] font-bold text-accent">LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3 sm:p-4 col-span-2">
                <div className="flex justify-between items-end mb-3 sm:mb-4">
                  <div>
                    <span className="text-[8px] sm:text-[10px] text-white/30 uppercase tracking-widest font-bold">Credit Score</span>
                    <h3 className="text-2xl sm:text-4xl font-black text-white">824</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold text-accent">EXCELLENT</span>
                  </div>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[82%] h-full bg-accent"></div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3 sm:p-4 flex flex-col items-center">
                <span className="text-[8px] sm:text-[10px] text-white/30 uppercase tracking-widest font-bold block mb-1 text-center">Probability</span>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 my-1">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path className="text-white/5" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                    <path className="text-accent" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs font-bold">92%</div>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-3 sm:p-4">
                <span className="text-[8px] sm:text-[10px] text-white/30 uppercase tracking-widest font-bold block mb-1">Power</span>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">₹45L</h4>
                <div className="flex items-center gap-1 text-[8px] sm:text-[10px] text-accent">
                  <Sparkles size={8} sm-size={10} /> Optimized
                </div>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 p-2 sm:p-3 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-2 sm:gap-3">
              <div className="p-1 rounded-lg bg-accent/20 shrink-0">
                <Zap size={12} sm-size={14} className="text-accent" />
              </div>
              <p className="text-[8px] sm:text-[10px] text-accent/90 font-medium leading-tight">
                Consolidate your 2 active cards to improve score by 15 pts.
              </p>
            </div>
          </motion.div>

          {/* Floating Elements - Hidden on small mobile, resized for tablet */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 sm:-top-10 sm:-right-5 z-20 hidden sm:block"
          >
            <MetricCard label="Active" value="₹1.2L" trend="+12K" icon={TrendingUp} delay={0.2} className="shadow-2xl" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 sm:-bottom-10 sm:-left-10 z-20 scale-75 sm:scale-100"
          >
            <div className="glass-card p-4 sm:p-5 bg-black/60 border-white/5 flex items-center gap-3 sm:gap-4 min-w-[180px] sm:min-w-[240px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-green-500" size={18} sm-size={20} />
              </div>
              <div>
                <p className="text-[8px] sm:text-[10px] text-white/30 uppercase tracking-widest font-bold">Approved</p>
                <p className="text-xs sm:text-sm font-bold text-white">₹15L Personal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
