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
          style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px', color: 'var(--md-sys-color-on-surface)' }}
        >
          How is your journey starting?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '16px', lineHeight: 1.5 }}
        >
          Every path is unique. We're here to walk alongside you, no matter where you're starting.
        </motion.p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { title: "I'm new and curious", desc: "I'd love to learn the basics gently.", icon: Sprout },
          { title: "I've taken a few steps", desc: "I know a bit, and I'm ready to grow.", icon: BookOpen }
        ].map((item, idx) => (
          <motion.button
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            onClick={onNext}
            style={{
              backgroundColor: 'var(--md-sys-color-surface-container-high)',
              padding: '20px',
              borderRadius: 'var(--md-sys-shape-corner-large)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              textAlign: 'left',
              cursor: 'pointer',
              border: 'none'
            }}
            whileTap={{ scale: 0.98, backgroundColor: 'var(--md-sys-color-primary-container)' }}
          >
            <div style={{ 
              backgroundColor: 'var(--md-sys-color-primary-container)', 
              padding: '12px', borderRadius: '16px', 
              color: 'var(--md-sys-color-on-primary-container)' 
            }}>
              <item.icon size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: 'var(--md-sys-color-on-surface)' }}>{item.title}</h3>
              <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '14px' }}>{item.desc}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceScreen;
