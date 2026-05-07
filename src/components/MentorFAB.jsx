import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const MentorFAB = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Floating Bubble */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        style={{
          position: 'absolute',
          bottom: '100px',
          right: '20px',
          width: '56px',
          height: '56px',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, #6750A4 0%, #9581CE 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 8px 24px rgba(103, 80, 164, 0.4)',
          cursor: 'pointer',
          zIndex: 999
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Sparkles size={24} fill="white" />
        </motion.div>
        
        {/* Pulse Effect */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '28px',
            border: '2px solid #6750A4'
          }}
        />
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '16px' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                width: '100%',
                maxWidth: '360px',
                height: '70%',
                backgroundColor: 'var(--md-sys-color-surface)',
                borderRadius: '32px 32px 12px 12px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1001,
                boxShadow: '0 -10px 40px rgba(0,0,0,0.2)'
              }}
            >
              {/* Header */}
              <div style={{ padding: '20px', borderBottom: '1px solid var(--md-sys-color-outline-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', backgroundColor: 'var(--md-sys-color-primary-container)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--md-sys-color-primary)' }}>
                    <Sparkles size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Stride Mentor AI</h3>
                    <p style={{ fontSize: '0.7rem', color: '#1B5E20', fontWeight: 600 }}>● Online & Ready to help</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} style={{ color: 'var(--md-sys-color-outline)' }}><X size={24} /></button>
              </div>

              {/* Messages Area */}
              <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ 
                  alignSelf: 'flex-start', backgroundColor: 'var(--md-sys-color-surface-container-high)', 
                  padding: '12px 16px', borderRadius: '16px 16px 16px 4px', maxWidth: '80%', fontSize: '0.9rem', lineHeight: 1.4
                }}>
                  Hello! I'm your Stride Mentor. Ask me anything about stock markets, reinvesting, or how to grow your streak! 📈
                </div>
                <div style={{ 
                  alignSelf: 'flex-start', backgroundColor: 'var(--md-sys-color-surface-container-high)', 
                  padding: '12px 16px', borderRadius: '16px 16px 16px 4px', maxWidth: '80%', fontSize: '0.9rem', lineHeight: 1.4
                }}>
                  For example: "What is a PE ratio?" or "How do I redeem my coins?"
                </div>
              </div>

              {/* Input Area */}
              <div style={{ padding: '16px', backgroundColor: 'var(--md-sys-color-surface-container)', borderRadius: '0 0 12px 12px' }}>
                <div style={{ 
                  display: 'flex', alignItems: 'center', backgroundColor: 'var(--md-sys-color-surface)', 
                  borderRadius: '100px', padding: '8px 8px 8px 16px', border: '1px solid var(--md-sys-color-outline-variant)'
                }}>
                  <input 
                    type="text" 
                    placeholder="Ask anything..." 
                    style={{ flex: 1, border: 'none', background: 'none', outline: 'none', fontSize: '0.9rem', fontFamily: 'inherit' }}
                  />
                  <button style={{ 
                    width: '40px', height: '40px', borderRadius: '50%', 
                    backgroundColor: 'var(--md-sys-color-primary)', display: 'flex', 
                    alignItems: 'center', justifyContent: 'center', color: 'white' 
                  }}>
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MentorFAB;
