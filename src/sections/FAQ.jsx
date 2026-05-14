import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the eligibility analysis work?",
    answer: "Our AI engine analyzes your credit score, income, existing liabilities, and employment history against current banking algorithms to give you an instant probability score."
  },
  {
    question: "Is my data safe with CredPilot?",
    answer: "Absolutely. We use bank-grade 256-bit AES encryption. We never share your personal data with third parties without your explicit consent."
  },
  {
    question: "Does checking eligibility affect my credit score?",
    answer: "No. CredPilot performs a 'soft' credit check which does not impact your credit score in any way."
  },
  {
    question: "How long does the loan approval take?",
    answer: "Digital approval typically happens within minutes. Final disbursement depends on the specific bank and can take anywhere from 24 to 72 hours."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all ${isOpen ? 'bg-white/5 border-accent/30' : 'bg-transparent border-white/10 hover:border-white/20'}`}
    >
      <span className="text-left font-bold text-white">{question}</span>
      <div className={`p-1 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-accent text-background' : 'bg-white/5 text-accent'}`}>
        <ChevronDown size={20} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-6 text-gray-400 text-sm leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Common <span className="text-accent">Questions</span></h2>
          <p className="text-gray-400">Everything you need to know about our platform.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
