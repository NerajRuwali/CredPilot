import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, GraduationCap, Car, CreditCard, Heart, ArrowRight } from 'lucide-react';

const categories = [
  { icon: Home, title: "Home Loans", rate: "8.4%", color: "text-blue-400" },
  { icon: Briefcase, title: "Business Loans", rate: "11.2%", color: "text-accent" },
  { icon: GraduationCap, title: "Education Loans", rate: "7.5%", color: "text-purple-400" },
  { icon: Car, title: "Car Loans", rate: "9.0%", color: "text-red-400" },
  { icon: CreditCard, title: "Personal Loans", rate: "12.5%", color: "text-green-400" },
  { icon: Heart, title: "Medical Loans", rate: "10.0%", color: "text-pink-400" },
];

const LoanCategories = () => {
  return (
    <section className="section-padding bg-secondary/10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 sm:mb-16 gap-8 text-center md:text-left">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight"
          >
            Loan <span className="text-accent italic font-serif">Categories.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-base sm:text-lg font-medium leading-relaxed"
          >
            Explore a wide range of loan products tailored to your specific needs and life stages.
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-accent hover:text-white transition-colors flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-[10px]"
        >
          View all categories <ArrowRight size={14} />
        </motion.button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 flex flex-col items-center text-center group cursor-pointer hover:bg-white/[0.03] border-white/5"
          >
            <div className={`p-4 rounded-2xl bg-white/[0.02] mb-6 group-hover:scale-110 transition-transform ${cat.color}`}>
              <cat.icon size={24} sm-size={32} />
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-2">{cat.title}</h4>
            <p className="text-white/20 text-[8px] sm:text-[9px] uppercase font-bold tracking-widest mb-1">Starting at</p>
            <p className="text-accent font-black text-lg sm:text-xl">{cat.rate}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoanCategories;
