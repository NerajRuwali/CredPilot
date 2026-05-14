import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, Clock, Shield, ArrowRight, Activity, TrendingDown, Building2, Landmark, Wallet } from 'lucide-react';

const banks = [
  {
    id: 1,
    name: "Stellar Finance",
    sub: "Direct Digital Lender",
    logo: <Activity size={28} />,
    rate: "8.25%",
    emi: "₹1,24,000",
    fee: "0.5%",
    speed: "24 Hours",
    maxTenure: "30 Years",
    rating: 4.8,
    popular: true,
    color: "bg-blue-600"
  },
  {
    id: 2,
    name: "Apex Capital",
    sub: "Premium Banking",
    logo: <Landmark size={28} />,
    rate: "8.50%",
    emi: "₹1,26,500",
    fee: "Nil",
    speed: "12 Hours",
    maxTenure: "25 Years",
    rating: 4.9,
    popular: false,
    color: "bg-accent"
  },
  {
    id: 3,
    name: "Nova Bank",
    sub: "Next-Gen Fintech",
    logo: <Wallet size={28} />,
    rate: "7.90%",
    emi: "₹1,21,500",
    fee: "1.0%",
    speed: "48 Hours",
    maxTenure: "20 Years",
    rating: 4.5,
    popular: false,
    color: "bg-purple-600"
  }
];

const CompareLoans = () => {
  const [hoveredBank, setHoveredBank] = useState(null);

  const features = [
    { label: "Rate (p.a)", key: "rate" },
    { label: "EMI (est)", key: "emi" },
    { label: "Fee", key: "fee" },
    { label: "Speed", key: "speed" },
    { label: "Tenure", key: "maxTenure" },
    { label: "Rating", key: "rating" },
  ];

  return (
    <div className="section-padding">
      <div className="max-w-3xl mb-12 sm:mb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] block mb-3 sm:mb-4">The Comparison</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Uncover Your <br /><span className="text-accent italic font-serif">Perfect Match.</span></h1>
          <p className="text-white/40 text-base sm:text-lg font-medium leading-relaxed">Negotiated exclusive rates based on the collective borrowing power of our network.</p>
        </motion.div>
      </div>

      {/* Desktop Comparison Table */}
      <div className="hidden md:block overflow-x-auto pb-12 no-scrollbar">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col justify-end pb-8">
              <h3 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Lender Profile</h3>
            </div>
            {banks.map((bank) => (
              <motion.div key={bank.id} onMouseEnter={() => setHoveredBank(bank.id)} onMouseLeave={() => setHoveredBank(null)} className={`glass-card p-10 text-center relative transition-all duration-700 ${bank.popular ? 'border-accent/40 bg-accent/[0.03]' : 'bg-white/[0.01] border-white/5'}`}>
                {bank.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-background text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-glow-strong">Recommended</span>}
                <div className={`w-14 h-14 rounded-2xl ${bank.color} mx-auto mb-6 flex items-center justify-center text-background shadow-2xl`}>{bank.logo}</div>
                <h3 className="font-bold text-white text-lg tracking-tight mb-1">{bank.name}</h3>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{bank.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <div key={feature.key} className="grid grid-cols-4 gap-6 items-center">
                <div className="p-6 text-white/30 font-bold text-[10px] uppercase tracking-[0.2em]">{feature.label}</div>
                {banks.map((bank) => (
                  <div key={bank.id} className={`glass-card p-8 text-center text-white font-bold tracking-tight text-lg transition-all duration-500 ${hoveredBank === bank.id ? 'bg-white/[0.03] border-white/10' : 'bg-transparent border-transparent'}`}>
                    {bank[feature.key]}
                    {feature.key === 'rate' && <TrendingDown size={14} className="inline ml-2 text-green-500" />}
                  </div>
                ))}
              </div>
            ))}
            <div className="grid grid-cols-4 gap-6 items-center pt-12">
              <div className="p-6"></div>
              {banks.map((bank) => (
                <div key={bank.id} className="px-2">
                  <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all flex items-center justify-center gap-2 ${bank.popular ? 'btn-primary' : 'bg-white/[0.03] border border-white/10 text-white hover:bg-white/10'}`}>Select Match <ArrowRight size={16} /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Comparison Cards */}
      <div className="md:hidden flex flex-col gap-8">
        {banks.map((bank) => (
          <div key={bank.id} className={`glass-card p-6 relative ${bank.popular ? 'border-accent/40 bg-accent/[0.03]' : 'bg-white/[0.01] border-white/5'}`}>
            {bank.popular && <span className="absolute top-0 right-6 -translate-y-1/2 bg-accent text-background text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-glow">Recommended</span>}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-12 h-12 rounded-xl ${bank.color} flex items-center justify-center text-background shadow-lg shrink-0`}>{bank.logo}</div>
              <div>
                <h3 className="font-bold text-white text-lg tracking-tight leading-none mb-1">{bank.name}</h3>
                <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{bank.sub}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-6 mb-8">
              {features.map((feature) => (
                <div key={feature.key}>
                  <p className="text-[9px] text-white/20 uppercase tracking-widest font-bold mb-1">{feature.label}</p>
                  <p className="text-white font-bold text-base">{bank[feature.key]}</p>
                </div>
              ))}
            </div>
            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[9px] flex items-center justify-center gap-2 ${bank.popular ? 'btn-primary' : 'btn-outline'}`}>Select Offer <ArrowRight size={16} /></button>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-20 sm:mt-32 pt-16 sm:pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
        {[
          { icon: Shield, title: 'Pre-Vetted', desc: 'Every lender undergoes a 48-point audit for transparency.', color: 'accent' },
          { icon: Zap, title: 'Arbitrage', desc: 'Constant monitoring to ensure the absolute lowest rates.', color: 'blue-500' },
          { icon: Clock, title: 'Fast-Track', desc: 'Priority lane reduces wait times by up to 60%.', color: 'green-500' }
        ].map((badge, i) => (
          <div key={i} className="flex flex-col gap-5 text-center sm:text-left items-center sm:items-start">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${badge.color}/10 rounded-2xl flex items-center justify-center text-${badge.color}`}><badge.icon size={22} sm-size={24} /></div>
            <div>
              <h4 className="font-bold text-white text-base sm:text-lg mb-2">{badge.title}</h4>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-medium">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareLoans;
