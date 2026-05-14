import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import LoanCategories from '../sections/LoanCategories';
import HowItWorks from '../sections/HowItWorks';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <LoanCategories />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </motion.div>
  );
};

export default LandingPage;
