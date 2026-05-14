import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  ShieldCheck, 
  AlertCircle, 
  DollarSign, 
  Percent, 
  Clock,
  ArrowUpRight,
  BrainCircuit,
  CreditCard,
  Zap,
  Activity,
  History,
  Download
} from 'lucide-react';

const data = [
  { name: 'Jan', value: 4200 },
  { name: 'Feb', value: 4800 },
  { name: 'Mar', value: 5200 },
  { name: 'Apr', value: 5100 },
  { name: 'May', value: 5800 },
  { name: 'Jun', value: 6200 },
];

const riskData = [
  { name: 'Safety', value: 88 },
  { name: 'Risk', value: 12 },
];

const COLORS = ['#FFD600', '#1A1A1A'];

const Dashboard = () => {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('credpilot_application');
    if (savedData) {
      setAppData(JSON.parse(savedData));
    } else {
      setAppData({
        fullName: 'Jatin Kala',
        creditScore: 824,
        monthlyIncome: 85000,
        loanAmount: 1500000,
        loanType: 'Personal'
      });
    }
  }, []);

  if (!appData) return null;

  return (
    <div className="section-padding">
      {/* Dashboard Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-8 sm:gap-12">
        <div className="text-center lg:text-left w-full lg:w-auto">
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[8px] sm:text-[10px] font-bold uppercase tracking-widest border border-accent/20">Active Analysis</span>
            <span className="text-white/20 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Clock size={12} /> 2 mins ago</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Analysis for <br className="sm:hidden" /><span className="text-accent">{appData.fullName.split(' ')[0]}.</span>
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <button className="btn-outline py-3 px-6 text-[10px] uppercase tracking-widest w-full">
            <History size={16} /> Timeline
          </button>
          <button className="btn-primary py-3 px-8 text-[10px] uppercase tracking-widest w-full">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {[
          { label: 'Approval Odds', value: '94%', icon: ShieldCheck, color: 'text-green-400', sub: 'High Probability' },
          { label: 'Borrowing Power', value: `₹${(appData.monthlyIncome * 60 / 100000).toFixed(1)}L`, icon: DollarSign, color: 'text-accent', sub: 'At 8.4% APR' },
          { label: 'Market Rate', value: '8.25%', icon: Percent, color: 'text-blue-400', sub: 'Top 1% Offers' },
          { label: 'Health Score', value: appData.creditScore, icon: Activity, color: 'text-purple-400', sub: 'Ranked Excellent' },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-6 sm:p-8 bg-white/[0.01]">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5 ${stat.color}`}><stat.icon size={18} sm-size={20} /></div>
              <span className="flex items-center gap-1 text-[8px] sm:text-[9px] font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-full uppercase tracking-tighter">
                <ArrowUpRight size={10} /> Stable
              </span>
            </div>
            <p className="text-white/20 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{stat.label}</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">{stat.value}</h3>
            <p className="text-[9px] sm:text-[10px] text-white/40 font-medium">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Main Chart Section */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-8 glass-card p-6 sm:p-10 bg-white/[0.01]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-12 gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1">Market Sentiment</h3>
              <p className="text-white/30 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Rate Variance (6M)</p>
            </div>
            <div className="flex bg-white/[0.03] p-1 rounded-xl border border-white/5 w-full md:w-auto overflow-x-auto no-scrollbar">
              {['1M', '3M', '6M', '1Y'].map(t => (
                <button key={t} className={`flex-1 md:flex-none px-4 py-1.5 rounded-lg text-[9px] sm:text-[10px] font-bold transition-all ${t === '6M' ? 'bg-accent text-background' : 'text-white/30 hover:text-white'}`}>{t}</button>
              ))}
            </div>
          </div>
          
          <div className="h-[250px] sm:h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs><linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#FFD600" stopOpacity={0.15}/><stop offset="95%" stopColor="#FFD600" stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff10" fontSize={9} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#ffffff10" fontSize={9} tickLine={false} axisLine={false} dx={-10} />
                <Tooltip contentStyle={{ backgroundColor: '#0B0B0B', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }} itemStyle={{ color: '#FFD600', fontSize: '10px' }} />
                <Area type="monotone" dataKey="value" stroke="#FFD600" strokeWidth={2} fillOpacity={1} fill="url(#chartGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Risk & Distribution */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-4 glass-card p-6 sm:p-10 flex flex-col bg-white/[0.01]">
          <h3 className="text-lg sm:text-xl font-bold mb-8 flex items-center gap-3"><Zap size={18} sm-size={20} className="text-accent" /> Risk Profile</h3>
          <div className="relative h-[200px] sm:h-[220px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={riskData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={8} dataKey="value" stroke="none">
                  {riskData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black text-white">LOW</span>
              <span className="text-[8px] sm:text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] mt-1">Classification</span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
            <div className="flex justify-between items-center text-[10px] font-bold"><span className="text-white/30 uppercase tracking-widest">Stability</span><span className="text-white">92/100</span></div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden"><div className="w-[92%] h-full bg-accent"></div></div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-4 glass-card p-6 sm:p-10 bg-white/[0.01]">
          <div className="flex justify-between items-center mb-8 sm:mb-10"><h3 className="text-lg sm:text-xl font-bold">Credit Pulse</h3><div className="p-2 rounded-lg bg-white/[0.03] border border-white/5"><CreditCard size={18} className="text-white/40" /></div></div>
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-2">{appData.creditScore}</div>
            <div className="px-4 py-1 rounded-full bg-accent text-background text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em]">Tier One</div>
            <div className="w-full mt-10 grid grid-cols-5 gap-1">{[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-1 sm:h-1.5 rounded-full ${i <= 4 ? 'bg-accent' : 'bg-white/5'}`}></div>)}</div>
            <p className="text-[8px] sm:text-[9px] text-white/30 font-bold uppercase tracking-widest mt-4">Top 3.4% Network</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-8 glass-card p-6 sm:p-10 bg-accent/[0.02] border-accent/10">
          <div className="flex justify-between items-center mb-8 sm:mb-10"><h3 className="text-lg sm:text-xl font-bold flex items-center gap-3"><BrainCircuit className="text-accent" size={20} sm-size={24} /> Smart Actions</h3><span className="text-[8px] sm:text-[10px] font-bold text-accent uppercase tracking-[0.2em] bg-accent/10 px-3 py-1 rounded-full">AI Driven</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Optimization', desc: 'Refinance current loan at 10.4% to save ₹8,400 monthly.', icon: AlertCircle, color: 'accent' },
              { title: 'Balance Transfer', desc: 'Stellar Bank offering 7.9% for your profile. 48hr validity.', icon: Zap, color: 'blue-400' }
            ].map((action, i) => (
              <div key={i} className={`p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-${action.color}/40 transition-all group`}>
                <div className="flex gap-3 sm:gap-4 items-start mb-6">
                  <div className={`p-2 sm:p-2.5 rounded-xl bg-${action.color}/10 text-${action.color}`}><action.icon size={18} sm-size={20} /></div>
                  <div><h4 className="font-bold text-sm sm:text-base text-white mb-1">{action.title}</h4><p className="text-[11px] sm:text-xs text-white/30 leading-relaxed font-medium">{action.desc}</p></div>
                </div>
                <button className="btn-outline w-full py-2.5 text-[9px] sm:text-[10px] tracking-widest">Execute Action</button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
