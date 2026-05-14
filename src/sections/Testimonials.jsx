import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: "Jatin Kala",
    role: "Series A Founder",
    content: "CredPilot helped us secure ₹2Cr in working capital when traditional banks were stuck in paperwork. The AI's rate prediction was spot on.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jatin",
    verified: true
  },
  {
    name: "Kartikeye Bisht",
    role: "Senior Fintech Analyst",
    content: "The level of data granularity in the dashboard is impressive. It feels like having a private banker in your pocket.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kartikeye",
    verified: true
  },
  {
    name: "Akshat Bhatt",
    role: "Product Designer",
    content: "Finally, a finance app that doesn't feel like it's from 2005. The UX of loan comparison is seamless.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akshat",
    verified: true
  },
  {
    name: "Pooja Chuphal",
    role: "Operations Lead",
    content: "Switched my mortgage to a partner suggested by CredPilot. Saved ₹12,000 in monthly EMIs. Unbelievable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
    verified: true
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-black relative">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 sm:mb-24 gap-10 sm:gap-12 text-center md:text-left">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] block mb-3 sm:mb-4">Wall of Trust</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">Voices of <br className="hidden sm:block" /><span className="text-accent">CredPilot.</span></h2>
            <p className="text-white/40 text-base sm:text-lg font-medium leading-relaxed">Real stories from the 12,000+ individuals who have optimized their borrowing this year.</p>
          </motion.div>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 glass-card px-6 sm:px-8 py-3 sm:py-4 bg-white/[0.02]">
          <div className="flex -space-x-2 sm:-space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background" alt="User" />
            ))}
          </div>
          <div className="text-left">
            <p className="text-white font-bold text-xs sm:text-sm">4.9/5 Rating</p>
            <p className="text-white/30 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest">Verified Reviews</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="glass-card p-6 sm:p-8 relative flex flex-col group h-full"
          >
            <Quote className="absolute top-4 right-6 sm:top-6 sm:right-8 text-accent/5 group-hover:text-accent/10 transition-colors" size={48} sm-size={60} />

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={12} sm-size={14} className="fill-accent text-accent" />
              ))}
            </div>

            <p className="text-white/70 text-sm sm:text-base font-medium leading-relaxed mb-8 relative z-10">
              "{t.content}"
            </p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/5" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-white font-bold text-xs sm:text-sm">{t.name}</h4>
                    {t.verified && <CheckCircle2 size={12} sm-size={14} className="text-accent" />}
                  </div>
                  <p className="text-white/30 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                <ShieldCheck size={16} className="text-accent" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
