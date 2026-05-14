import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Wallet, Briefcase, FileText, ChevronRight, ChevronLeft, Sparkles, Loader2, Info, ArrowRight } from 'lucide-react';

const steps = [
  { id: 1, title: 'Profile', icon: User, desc: 'Personal details' },
  { id: 2, title: 'Income', icon: Wallet, desc: 'Financial footprint' },
  { id: 3, title: 'Needs', icon: Briefcase, desc: 'Loan requirements' },
  { id: 4, title: 'Verify', icon: FileText, desc: 'Final review' },
];

const EligibilityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm({
    defaultValues: {
      fullName: '',
      age: 28,
      employmentType: 'Salaried',
      monthlyIncome: 75000,
      existingEMI: 0,
      creditScore: 780,
      loanType: 'Personal',
      loanAmount: 1000000,
      loanTenure: 5,
    }
  });

  const nextStep = async () => {
    let fieldsToValidate = [];
    if (currentStep === 1) fieldsToValidate = ['fullName', 'age'];
    if (currentStep === 2) fieldsToValidate = ['monthlyIncome', 'creditScore'];
    if (currentStep === 3) fieldsToValidate = ['loanAmount', 'loanTenure'];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      localStorage.setItem('credpilot_application', JSON.stringify(data));
      navigate('/dashboard');
    }, 2500);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 sm:space-y-8">
            <div>
              <label className="block text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3 sm:mb-4">What should we call you?</label>
              <input {...register('fullName', { required: 'Full name is required' })} className="input-field w-full" placeholder="Ex: Jatin Kala" />
              {errors.fullName && <p className="text-red-500 text-[10px] sm:text-xs mt-2 font-bold">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="flex justify-between items-center mb-4 sm:mb-6">
                <span className="text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">How old are you?</span>
                <span className="text-accent font-bold text-lg sm:text-xl">{watch('age')} Years</span>
              </label>
              <input type="range" {...register('age')} min="18" max="70" className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-accent" />
            </div>
            <div>
              <label className="block text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3 sm:mb-4">Professional Status</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Salaried', 'Self-Employed', 'Business', 'Freelance'].map((type) => (
                  <label key={type} className={`relative flex items-center justify-center p-3 sm:p-4 rounded-2xl border transition-all cursor-pointer font-bold text-sm ${watch('employmentType') === type ? 'bg-accent/10 border-accent text-accent shadow-glow' : 'bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20'}`}>
                    <input type="radio" value={type} {...register('employmentType')} className="sr-only" />
                    {type}
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 sm:space-y-8">
            <div>
              <label className="block text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3 sm:mb-4">Net Monthly Income (₹)</label>
              <input type="number" {...register('monthlyIncome', { required: true, min: 10000 })} className="input-field w-full text-xl sm:text-2xl font-bold" placeholder="75000" />
              <p className="text-[9px] sm:text-[10px] text-white/20 mt-3 flex items-center gap-2"><Info size={12} /> Helps us calculate capacity.</p>
            </div>
            <div>
              <label className="flex justify-between items-center mb-4 sm:mb-6">
                <span className="text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Credit Score</span>
                <span className={`font-bold text-lg sm:text-xl ${watch('creditScore') > 750 ? 'text-green-400' : 'text-yellow-400'}`}>{watch('creditScore')}</span>
              </label>
              <input type="range" {...register('creditScore')} min="300" max="900" className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-accent" />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 sm:space-y-8">
            <div>
              <label className="block text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-3 sm:mb-4">Loan Requirement</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['Personal', 'Home', 'Business', 'Education'].map((type) => (
                  <label key={type} className={`relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border transition-all cursor-pointer font-bold ${watch('loanType') === type ? 'bg-accent/10 border-accent text-accent shadow-glow' : 'bg-white/[0.02] border-white/5 text-white/40 hover:border-white/20'}`}>
                    <input type="radio" value={type} {...register('loanType')} className="sr-only" />
                    <span className="text-sm">{type} Loan</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="flex justify-between items-center mb-4 sm:mb-6">
                <span className="text-[9px] sm:text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Required Amount</span>
                <span className="text-white font-bold text-lg sm:text-xl">₹{Number(watch('loanAmount')).toLocaleString()}</span>
              </label>
              <input type="range" {...register('loanAmount')} min="50000" max="5000000" step="50000" className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-accent" />
            </div>
          </motion.div>
        );
      case 4:
        const formData = watch();
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="space-y-6 sm:space-y-8 text-center sm:text-left">
            <div className="glass-card p-6 sm:p-10 bg-accent/[0.02] border-accent/20">
              <h4 className="text-accent font-bold text-sm mb-6 sm:mb-10 flex items-center justify-center sm:justify-start gap-3">
                <Sparkles size={20} /> Verification in Progress
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-1">
                  <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold">Applicant</p>
                  <p className="text-xl sm:text-2xl font-bold text-white">{formData.fullName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold">Borrowing Need</p>
                  <p className="text-xl sm:text-2xl font-bold text-white">₹{(Number(formData.loanAmount)/100000).toFixed(1)}L</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <div className="section-padding flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10 sm:mb-16 px-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight leading-tight">See Your <span className="text-accent italic font-serif">Power.</span></h1>
            <p className="text-white/40 text-sm sm:text-base font-medium">Takes 2 minutes. No impact on credit score.</p>
          </motion.div>
        </div>

        {/* Improved Progress UI */}
        <div className="mb-12 sm:mb-20 px-6 sm:px-10">
          <div className="flex justify-between items-center relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 -z-10"></div>
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${currentStep >= step.id ? 'bg-accent text-background shadow-glow scale-110' : 'bg-white/[0.03] text-white/20 border border-white/5'}`}>
                  <step.icon size={18} sm-size={22} className={currentStep === step.id ? 'animate-pulse' : ''} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 sm:p-10 md:p-16 relative overflow-hidden bg-white/[0.01]">
          {isSubmitting && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-background/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center text-center p-6">
              <Loader2 className="text-accent animate-spin mb-6" size={48} />
              <h3 className="text-xl font-bold mb-2">Analyzing...</h3>
              <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">Fetching real-time rates from 42 partner lenders.</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-10 sm:mb-12">
              <span className="text-accent font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mb-2 block">Step 0{currentStep}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">{steps[currentStep-1].desc}</h2>
            </div>

            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-between items-center gap-6">
              <button type="button" onClick={prevStep} disabled={currentStep === 1} className={`w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${currentStep === 1 ? 'hidden' : 'text-white/30 hover:text-white'}`}>
                <ChevronLeft size={16} /> Back
              </button>
              {currentStep < 4 ? (
                <button type="button" onClick={nextStep} className="btn-primary w-full sm:w-auto">Continue <ArrowRight size={20} /></button>
              ) : (
                <button type="submit" className="btn-primary w-full sm:w-auto !px-10">Generate Report <Sparkles size={20} /></button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
