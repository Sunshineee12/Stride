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
      style={{ backgroundColor: 'var(--md-sys-color-surface)', color: 'var(--md-sys-color-on-surface)', justifyContent: 'center' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          style={{ 
            marginBottom: '32px', 
            background: 'var(--md-sys-color-primary-container)', 
            padding: '24px', 
            borderRadius: '28px', 
            color: 'var(--md-sys-color-on-primary-container)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
          }}
        >
          <TrendingUp size={48} strokeWidth={2.5} />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.02em', color: 'var(--md-sys-color-primary)' }}
        >
          Stride
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ fontSize: '1.2rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.5, maxWidth: '280px' }}
        >
          Taking your first stride towards financial confidence.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-auto"
        style={{ marginBottom: '64px', display: 'flex', justifyContent: 'center' }}
      >
        <button 
          onClick={onNext} 
          style={{ 
            backgroundColor: 'var(--md-sys-color-primary)', 
            color: 'white', 
            padding: '16px 32px', 
            borderRadius: '100px', 
            fontSize: '1.1rem', 
            fontWeight: 600, 
            width: '80%', 
            border: 'none', 
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(103, 80, 164, 0.2)'
          }}
        >
          Get Started
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
