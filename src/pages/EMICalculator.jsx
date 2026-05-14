import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Percent, Calendar, ArrowRight, PieChart as PieIcon, Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const EMICalculator = () => {
  const [amount, setAmount] = useState(1500000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  useEffect(() => {
    const p = amount;
    const r = rate / 12 / 100;
    const n = tenure * 12;
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emiValue * n;
    const totalInt = totalPayable - p;
    setEmi(Math.round(emiValue));
    setTotalInterest(Math.round(totalInt));
    setTotalRepayment(Math.round(totalPayable));
  }, [amount, rate, tenure]);

  const pieData = [{ name: 'Principal', value: amount }, { name: 'Interest', value: totalInterest }];
  const COLORS = ['#FFD600', '#1A1A1A'];

  return (
    <div className="section-padding">
      <div className="max-w-3xl mb-12 sm:mb-20">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] block mb-3 sm:mb-4">The Simulator</span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">Plan Your <br /><span className="text-accent italic font-serif">Repayment.</span></h1>
          <p className="text-white/40 text-base sm:text-lg font-medium leading-relaxed">Adjust the parameters to find the perfect balance between monthly commitment and interest savings.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
        {/* Sliders Section */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7 glass-card p-6 sm:p-10 lg:p-16 bg-white/[0.01]">
          <div className="space-y-12 sm:space-y-16">
            {/* Amount */}
            <div className="group">
              <div className="flex justify-between items-end mb-6 sm:mb-8">
                <label className="text-white/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">Loan Amount</label>
                <div className="text-right">
                  <span className="text-white/20 text-lg sm:text-xl font-medium mr-1">₹</span>
                  <span className="text-2xl sm:text-4xl font-bold text-white tracking-tighter">{(amount/100000).toFixed(1)}<span className="text-white/40 text-xl sm:text-2xl ml-1">L</span></span>
                </div>
              </div>
              <input type="range" min="100000" max="10000000" step="50000" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-accent" />
            </div>

            {/* Interest Rate */}
            <div className="group">
              <div className="flex justify-between items-end mb-6 sm:mb-8">
                <label className="text-white/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">Interest Rate (p.a)</label>
                <span className="text-2xl sm:text-4xl font-bold text-white tracking-tighter">{rate}<span className="text-white/40 text-xl sm:text-2xl ml-1">%</span></span>
              </div>
              <input type="range" min="5" max="20" step="0.05" value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-accent" />
            </div>

            {/* Tenure */}
            <div className="group">
              <div className="flex justify-between items-end mb-6 sm:mb-8">
                <label className="text-white/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">Tenure (Years)</label>
                <span className="text-2xl sm:text-4xl font-bold text-white tracking-tighter">{tenure}<span className="text-white/40 text-xl sm:text-2xl ml-1">Yrs</span></span>
              </div>
              <input type="range" min="1" max="30" value={tenure} onChange={(e) => setTenure(parseInt(e.target.value))} className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-accent" />
            </div>
          </div>

          <div className="mt-12 sm:mt-16 p-5 rounded-2xl bg-accent/[0.03] border border-accent/10 flex gap-4">
            <Info className="text-accent shrink-0" size={18} sm-size={20} />
            <p className="text-[10px] sm:text-xs text-accent/60 font-medium leading-relaxed">Reducing balance method. Actual rates may vary based on credit history.</p>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-6 sm:space-y-8">
          <div className="glass-card p-8 sm:p-10 bg-accent/5 border-accent/20 relative overflow-hidden group">
            <p className="text-white/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mb-3 sm:mb-4">Monthly Commitment</p>
            <div className="flex items-baseline gap-2 mb-8 sm:mb-12">
              <span className="text-2xl sm:text-4xl font-bold text-white/40">₹</span>
              <h2 className="text-5xl sm:text-7xl font-black text-accent tracking-tighter">{emi.toLocaleString()}</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-white/5">
              <div><p className="text-white/20 text-[8px] sm:text-[9px] font-bold uppercase mb-2">Interest</p><p className="text-lg sm:text-2xl font-bold text-white tracking-tight">₹{totalInterest.toLocaleString()}</p></div>
              <div><p className="text-white/20 text-[8px] sm:text-[9px] font-bold uppercase mb-2">Total</p><p className="text-lg sm:text-2xl font-bold text-white tracking-tight">₹{totalRepayment.toLocaleString()}</p></div>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/[0.01]">
            <div className="h-[160px] sm:h-[180px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={8} dataKey="value" stroke="none">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-white/10"><PieIcon size={20} sm-size={24} /></div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-white/30">Breakdown</h4>
              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div><span className="text-white/60 text-[10px] sm:text-xs font-bold">Principal</span></div><span className="text-white font-bold text-xs sm:text-sm">{Math.round((amount/totalRepayment)*100)}%</span></div>
              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white/5"></div><span className="text-white/60 text-[10px] sm:text-xs font-bold">Interest</span></div><span className="text-white font-bold text-xs sm:text-sm">{Math.round((totalInterest/totalRepayment)*100)}%</span></div>
            </div>
          </div>
          
          <button className="btn-primary w-full py-5 text-xs sm:text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2">Start Application <ArrowRight size={18} /></button>
        </motion.div>
      </div>
    </div>
  );
};

export default EMICalculator;
