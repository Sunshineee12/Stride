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
      style={{ backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <div style={{ marginTop: '40px', marginBottom: '40px' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '12px', color: 'var(--md-sys-color-on-surface)' }}
        >
          Where are you starting from?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '1rem', lineHeight: 1.5 }}
        >
          No judgment here. We just want to tailor Stride for you.
        </motion.p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { title: "I'm a Beginner", desc: "I want to learn the basics.", icon: Sprout },
          { title: "Some Knowledge", desc: "I know a bit, but want more.", icon: BookOpen }
        ].map((item, idx) => (
          <motion.button
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            onClick={onNext}
            style={{
              backgroundColor: 'var(--md-sys-color-surface-container-high)',
              padding: '24px',
              borderRadius: 'var(--md-sys-shape-corner-large)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              textAlign: 'left',
              cursor: 'pointer',
              border: 'none'
            }}
            whileTap={{ scale: 0.98, backgroundColor: 'var(--md-sys-color-primary-container)' }}
          >
            <div style={{ 
              backgroundColor: 'var(--md-sys-color-primary-container)', 
              padding: '16px', borderRadius: '16px', 
              color: 'var(--md-sys-color-on-primary-container)' 
            }}>
              <item.icon size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '4px', color: 'var(--md-sys-color-on-surface)' }}>{item.title}</h3>
              <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceScreen;
