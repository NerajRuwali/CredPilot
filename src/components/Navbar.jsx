import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, LayoutDashboard, Calculator, Search, GitCompare, FileText, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Power', shortName: 'Power', path: '/eligibility', icon: FileText },
    { name: 'Analytics', shortName: 'Data', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Repayment', shortName: 'EMI', path: '/calculator', icon: Calculator },
    { name: 'Govt', shortName: 'Govt', path: '/schemes', icon: Search },
    { name: 'Compare', shortName: 'Comp', path: '/compare', icon: GitCompare },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-2 sm:py-4' : 'py-4 sm:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`relative flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled || isOpen ? 'bg-black/60 backdrop-blur-xl border border-white/5 shadow-2xl' : 'bg-transparent'}`}>
          
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
              <Activity className="text-background" size={18} sm-size={22} />
            </div>
            <span className="text-xl sm:text-2xl font-display font-bold tracking-tighter text-white">
              Cred<span className="text-accent">Pilot</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-3 xl:px-4 py-2 text-[11px] xl:text-[13px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2 rounded-lg ${location.pathname === link.path ? 'text-accent' : 'text-white/40 hover:text-white'}`}
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-white/[0.03] border border-white/5 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-[1px] left-3 xl:left-4 right-3 xl:right-4 h-[1px] bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/eligibility" className="btn-primary py-2 px-5 xl:px-6 text-[10px] xl:text-[11px] uppercase tracking-widest">
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors shrink-0" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-[72px] sm:top-[88px] z-50 bg-background/98 backdrop-blur-2xl border-t border-white/5 px-6 py-10"
          >
            <div className="flex flex-col gap-6 h-full max-w-lg mx-auto">
              <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-2">Navigation</span>
              <div className="grid grid-cols-1 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${location.pathname === link.path ? 'bg-accent/10 border-accent/30 text-accent' : 'bg-white/[0.02] border-white/5 text-white/40'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${location.pathname === link.path ? 'bg-accent text-background' : 'bg-white/5'}`}>
                        <link.icon size={20} />
                      </div>
                      <span className="text-lg font-display font-bold">{link.name}</span>
                    </div>
                    <Activity size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${location.pathname === link.path ? 'opacity-100' : ''}`} />
                  </Link>
                ))}
              </div>
              <div className="mt-auto">
                <Link to="/eligibility" className="btn-primary w-full py-5 text-sm uppercase tracking-widest">
                  Start Analysis
                </Link>
                <p className="text-center text-[10px] text-white/20 font-bold uppercase tracking-widest mt-6">
                  © 2026 CredPilot Precision Systems
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
