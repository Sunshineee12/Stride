import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, BookOpen } from 'lucide-react';

const ExperienceScreen = ({ onNext }) => {
  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div style={{ marginTop: '40px', marginBottom: '40px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '12px' }}
        >
          Where are you starting from?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: 'var(--text-light)', fontSize: '1.1rem', lineHeight: 1.5 }}
        >
          No judgment here. We just want to tailor Stride for you.
        </motion.p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          onClick={onNext}
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '24px',
            border: '2px solid var(--primary-light)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'left',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          whileHover={{ y: -4, borderColor: 'var(--primary)' }}
          whileTap={{ scale: 0.98 }}
        >
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '16px', borderRadius: '50%', color: 'var(--primary-dark)' }}>
            <Sprout size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-dark)' }}>I'm a Beginner</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>I want to learn the basics.</p>
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={onNext}
          style={{
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '24px',
            border: '2px solid var(--primary-light)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'left',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          whileHover={{ y: -4, borderColor: 'var(--primary)' }}
          whileTap={{ scale: 0.98 }}
        >
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '16px', borderRadius: '50%', color: 'var(--primary-dark)' }}>
            <BookOpen size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-dark)' }}>Some Knowledge</h3>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>I know a bit, but want more confidence.</p>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ExperienceScreen;
