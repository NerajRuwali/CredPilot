import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Globe, Briefcase, MessageSquare, Mail, Phone, Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-white/10 pt-16 sm:pt-20 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 sm:mb-20">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-glow">
                <Activity className="text-background" size={20} />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-white">
                Cred<span className="text-accent">Pilot</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
              The precision instrument for modern borrowing. Real-time eligibility, risk-adjusted rates, and a roadmap to your financial goals.
            </p>
            <div className="flex gap-4">
              {[Globe, Briefcase, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:bg-accent hover:text-background hover:border-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/eligibility" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Borrowing Power</Link></li>
              <li><Link to="/calculator" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Repayment Sim</Link></li>
              <li><Link to="/schemes" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Govt Portal</Link></li>
              <li><Link to="/compare" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Lender Match</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Governance</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Security Audit</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Privacy Protocol</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">System Status</a></li>
              <li><a href="#" className="text-white/40 hover:text-accent transition-colors text-xs font-bold uppercase tracking-widest">Help Desk</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[10px]">Communication</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/40 text-xs font-bold">
                <Mail size={16} className="text-accent" />
                ops@credpilot.io
              </li>
              <li className="flex items-center gap-3 text-white/40 text-xs font-bold">
                <Phone size={16} className="text-accent" />
                +1 (555) 000-8888
              </li>
            </ul>
            <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-[9px] text-white/20 font-medium leading-relaxed italic">
                *Verified fintech partner. Interest rates subject to market variance and individual credit velocity.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            © 2026 CredPilot Precision Systems. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">AES-256 Encrypted</span>
            <span className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
