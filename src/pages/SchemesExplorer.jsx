import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowRight, ExternalLink, Shield, Info, CheckCircle2, ChevronRight } from 'lucide-react';

const categories = ['All', 'Agriculture', 'SME', 'Housing', 'Education', 'Startup'];

const schemes = [
  {
    id: 1,
    title: "PMEGP Loan Scheme",
    category: "SME",
    desc: "Generate employment opportunities in rural as well as urban areas through setting up of new self-employment projects.",
    benefit: "Subsidy up to 35%",
    link: "#"
  },
  {
    id: 2,
    title: "PM SVANidhi",
    category: "Startup",
    desc: "Special Micro-Credit Facility Scheme for providing affordable loans to street vendors to resume their livelihoods.",
    benefit: "Collateral free",
    link: "#"
  },
  {
    id: 3,
    title: "PMAY Urban",
    category: "Housing",
    desc: "Credit Linked Subsidy Scheme (CLSS) for providing housing for all in urban areas by 2024.",
    benefit: "6.5% Interest Subsidy",
    link: "#"
  },
  {
    id: 4,
    title: "Kisan Credit Card",
    category: "Agriculture",
    desc: "Provide adequate and timely credit support from the banking system under a single window to the farmers.",
    benefit: "Low Interest Rate",
    link: "#"
  }
];

const SchemesExplorer = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filteredSchemes = schemes.filter(s => 
    (activeTab === 'All' || s.category === activeTab) &&
    (s.title.toLowerCase().includes(search.toLowerCase()) || s.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="section-padding">
      <div className="max-w-3xl mb-12 sm:mb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] block mb-3 sm:mb-4">Govt Portal</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">Direct Support <br /><span className="text-accent italic font-serif">Gateways.</span></h1>
          <p className="text-white/40 text-base sm:text-lg font-medium leading-relaxed">Search through curated government-backed financial schemes designed to catalyze your growth.</p>
        </motion.div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col gap-6 mb-12 sm:mb-16">
        <div className="relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search schemes, benefits, or categories..." 
            className="input-field w-full pl-14 py-4 sm:py-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${activeTab === cat ? 'bg-accent text-background border-accent shadow-glow' : 'bg-white/[0.03] border-white/5 text-white/40 hover:border-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredSchemes.map((scheme) => (
            <motion.div
              key={scheme.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-6 sm:p-10 group hover:bg-white/[0.03] flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6 sm:mb-8">
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[8px] sm:text-[9px] font-bold uppercase tracking-widest border border-accent/20">
                  {scheme.category}
                </span>
                <div className="p-2 rounded-lg bg-white/[0.03] text-white/20 group-hover:text-accent transition-colors">
                  <Shield size={18} />
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 tracking-tight group-hover:text-accent transition-colors">
                {scheme.title}
              </h3>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed font-medium mb-8 flex-grow">
                {scheme.desc}
              </p>
              
              <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  <span className="text-xs sm:text-sm font-bold text-white/80">{scheme.benefit}</span>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                  Full Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredSchemes.length === 0 && (
        <div className="text-center py-20 glass-card bg-white/[0.01]">
          <Info size={48} className="text-white/10 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-white/40">No matching schemes found</h3>
          <p className="text-white/20 text-sm mt-2">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
};

export default SchemesExplorer;
