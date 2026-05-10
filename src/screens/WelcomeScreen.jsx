import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const WelcomeScreen = ({ onNext }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onNext]);

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src="/Stride/logo.png" 
            alt="Stride Logo" 
            style={{ width: '120px', height: '120px', objectFit: 'contain' }} 
            onError={(e) => { e.target.src = 'https://api.iconify.design/lucide:trending-up.svg?color=%236750a4'; }}
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ 
            fontSize: '2rem', 
            fontWeight: 700, 
            marginBottom: '16px', 
            letterSpacing: '0.02em', 
            color: 'var(--md-sys-color-primary)',
            textTransform: 'uppercase'
          }}
        >
          Stride
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{ fontSize: '1.1rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.5, maxWidth: '280px' }}
        >
          Taking your first stride towards financial confidence.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
