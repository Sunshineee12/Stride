import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const quotes = [
  "Take a deep breath. You're here to learn, and that's already a win.",
  "Financial confidence is a journey, not a race. You're doing great.",
  "It's okay to not know everything. Every expert started where you are.",
  "Relax. Today is just about one small step toward your future.",
  "You're in a safe place to grow. Let's explore together."
];

const QuoteSplash = ({ onComplete }) => {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);

    // Auto-advance after 1.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ 
        backgroundColor: 'var(--md-sys-color-primary-container)', 
        color: 'var(--md-sys-color-on-primary-container)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginBottom: '32px' }}
      >
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '20px', 
          backgroundColor: 'rgba(255,255,255,0.5)', 
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Lightbulb size={32} />
        </div>
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          lineHeight: 1.4,
          maxWidth: '300px'
        }}
      >
        "{currentQuote}"
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        style={{ position: 'absolute', bottom: '60px' }}
      >
        <img src="/Stride/logo.png" alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
      </motion.div>
    </motion.div>
  );
};

export default QuoteSplash;
