import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, PieChart, TrendingUp, X } from 'lucide-react';

const InfoModal = ({ title, content, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.4)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }}
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      onClick={(e) => e.stopPropagation()}
      style={{
        backgroundColor: 'white',
        padding: '32px',
        borderRadius: '24px',
        width: '100%',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}
    >
      <button 
        onClick={onClose}
        style={{ position: 'absolute', top: '20px', right: '20px', color: 'var(--text-light)' }}
      >
        <X size={24} />
      </button>
      <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-dark)', marginBottom: '16px' }}>
        <Sparkles size={24} />
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>{title}</h3>
      <p style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>{content}</p>
    </motion.div>
  </motion.div>
);

const HomeScreen = ({ userKnowledge }) => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const quickInfos = [
    { id: '1', title: 'Your first investment', content: 'You don\'t need thousands to start. Even $10 in a fractional share gets you in the game. Consistency matters more than the starting amount.' },
    { id: '2', title: 'Why index funds?', content: 'Instead of trying to pick one winning company, an index fund lets you buy a tiny slice of hundreds of top companies at once. It\'s the safest way to grow wealth.' },
  ];

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#FAFAFF', overflowY: 'auto' }}
    >
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', marginTop: '16px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-dark)' }}>Hello there,</h1>
          <p style={{ color: 'var(--text-light)' }}>Ready for your next stride?</p>
        </div>
        <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '1.2rem' }}>👋</span>
        </div>
      </header>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>Quick Insights</h2>
        <div style={{ display: 'grid', gap: '16px' }}>
          {quickInfos.map((info) => (
            <motion.div
              key={info.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedInfo(info)}
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '12px', borderRadius: '16px', color: 'var(--primary-dark)' }}>
                {info.id === '1' ? <TrendingUp size={24} /> : <PieChart size={24} />}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '4px' }}>{info.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {info.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div style={{ backgroundColor: 'var(--primary)', borderRadius: '24px', padding: '24px', color: 'white', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Start Small</h2>
            <p style={{ opacity: 0.9, marginBottom: '20px', fontSize: '0.95rem' }}>Confidence is built step by step. We'll guide you through your first SIP.</p>
            <button style={{ backgroundColor: 'white', color: 'var(--primary-dark)', padding: '12px 24px', borderRadius: '100px', fontWeight: 600, fontSize: '0.95rem' }}>
              Explore Options
            </button>
          </div>
          <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1, transform: 'scale(2)' }}>
            <Sparkles size={120} />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedInfo && (
          <InfoModal 
            title={selectedInfo.title} 
            content={selectedInfo.content} 
            onClose={() => setSelectedInfo(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HomeScreen;
