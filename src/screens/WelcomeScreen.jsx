import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const WelcomeScreen = ({ onNext }) => {
  return (
    <motion.div 
      className="screen-container text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: 'var(--primary)', color: 'white', justifyContent: 'center' }}
    >
      <div className="flex-1 flex flex-col justify-center items-center" style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          style={{ marginBottom: '24px', background: 'white', padding: '24px', borderRadius: '50%', color: 'var(--primary)' }}
        >
          <TrendingUp size={48} strokeWidth={2.5} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.02em' }}
        >
          Stride
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.5, maxWidth: '280px' }}
        >
          Taking your first stride towards financial confidence.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-auto mb-8"
      >
        <button 
          onClick={onNext} 
          style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-dark)', 
            padding: '18px 40px', 
            borderRadius: '100px', 
            fontSize: '1.2rem', 
            fontWeight: 600, 
            width: '100%', 
            border: 'none', 
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
          }}
        >
          Get Started
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
