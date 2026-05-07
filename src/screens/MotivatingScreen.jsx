import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const MotivatingScreen = ({ onNext }) => {
  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{ 
        backgroundColor: 'var(--md-sys-color-primary-container)', 
        color: 'var(--md-sys-color-on-primary-container)', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ position: 'relative' }}
      >
        <div style={{ 
          width: '80px', height: '80px', 
          backgroundColor: 'var(--md-sys-color-primary)', 
          borderRadius: '24px', margin: '0 auto 32px', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', color: 'white',
          boxShadow: '0 12px 30px rgba(103, 80, 164, 0.2)'
        }}>
          <Heart size={40} fill="currentColor" />
        </div>
        
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
          style={{ position: 'absolute', top: '-10px', right: '40px', color: 'var(--md-sys-color-primary)' }}
        >
          <Sparkles size={24} />
        </motion.div>

        <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '16px', letterSpacing: '-0.02em', color: 'var(--md-sys-color-on-primary-container)' }}>
          You did it!
        </h2>
        <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>
          Taking the first step is the hardest part. We're so proud of you for showing up.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        style={{ position: 'absolute', bottom: '64px', width: '100%', padding: '0 24px', left: 0 }}
      >
        <button 
          onClick={onNext} 
          style={{ 
            backgroundColor: 'var(--md-sys-color-primary)', 
            color: 'white', 
            padding: '16px 32px', 
            borderRadius: '100px', 
            fontSize: '1rem', 
            fontWeight: 600, 
            width: '100%', 
            border: 'none', 
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(103, 80, 164, 0.2)'
          }}
        >
          Let's Go!
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MotivatingScreen;
