import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const CARD_DATA = [
  { id: 1, title: 'BSE & NSE', desc: 'The two main stock markets in India where shares are bought and sold.', example: 'Think of them as the Amazon and Flipkart of stocks—just two different digital malls where you buy company shares.' },
  { id: 2, title: 'Dividends', desc: 'A small bonus paid to you by a company just for owning their stock.', example: 'Like a bank giving you interest on your savings, but from a company\'s profits.' },
  { id: 3, title: 'SIP (Systematic)', desc: 'Investing a small, fixed amount regularly over time.', example: 'It\'s like a monthly Netflix subscription, but instead of buying movies, you\'re buying a piece of your future.' },
  { id: 4, title: 'Portfolio', desc: 'A term for your entire collection of investments.', example: 'Think of it as your digital wardrobe—you want a mix of everyday basics and party wear (safe and risky investments).' },
  { id: 5, title: 'Demat Account', desc: 'An account that holds your shares electronically.', example: 'Just like a digital wallet (like Paytm or GPay) holds your money, a Demat holds your stocks.' },
];

const Card = ({ card, active, removeCard }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const bgKnown = useTransform(x, [0, 150], ['rgba(255, 255, 255, 0)', 'rgba(230, 250, 230, 0.8)']);
  const bgNew = useTransform(x, [-150, 0], ['rgba(250, 230, 230, 0.8)', 'rgba(255, 255, 255, 0)']);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      removeCard(card.id, 'known');
    } else if (info.offset.x < -100) {
      removeCard(card.id, 'new');
    }
  };

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '400px',
        backgroundColor: 'white',
        borderRadius: '32px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '32px',
        textAlign: 'center',
        x,
        rotate,
        opacity: active ? opacity : 1,
        pointerEvents: active ? 'auto' : 'none',
        zIndex: active ? 10 : 1,
        scale: active ? 1 : 0.95,
        y: active ? 0 : 20,
      }}
      drag={active ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ cursor: 'grabbing' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div style={{ position: 'absolute', inset: 0, borderRadius: '32px', background: bgKnown, zIndex: -1 }} />
      <motion.div style={{ position: 'absolute', inset: 0, borderRadius: '32px', background: bgNew, zIndex: -1 }} />
      
      <div style={{ 
        width: '64px', height: '64px', backgroundColor: 'var(--primary-light)', 
        borderRadius: '50%', marginBottom: '20px', display: 'flex', 
        alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' 
      }}>
        💡
      </div>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px', color: 'var(--primary-dark)' }}>
        {card.title}
      </h2>
      <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.5, marginBottom: '24px' }}>
        {card.desc}
      </p>
      


      {/* Helper text overlay */}
      <motion.div style={{ position: 'absolute', bottom: '24px', left: '20px', color: '#ff6b6b', fontWeight: 'bold', opacity: useTransform(x, [-100, -50], [1, 0]) }}>
        NEW INFO
      </motion.div>
      <motion.div style={{ position: 'absolute', bottom: '24px', right: '20px', color: '#51cf66', fontWeight: 'bold', opacity: useTransform(x, [50, 100], [0, 1]) }}>
        I KNOW THIS
      </motion.div>
    </motion.div>
  );
};

const SwipeScreen = ({ onComplete }) => {
  const [cards, setCards] = useState(CARD_DATA);
  const [knownItems, setKnownItems] = useState([]);
  const [explanation, setExplanation] = useState(null);

  const removeCard = (id, result) => {
    const card = cards.find(c => c.id === id);
    
    if (result === 'known') {
      setKnownItems(prev => [...prev, card.title]);
      processRemoval(id);
    } else {
      setExplanation(card);
      processRemoval(id);
    }
  };

  const processRemoval = (id) => {
    setCards((prev) => {
      const newCards = prev.filter((c) => c.id !== id);
      if (newCards.length === 0 && !explanation) {
        setTimeout(() => onComplete(knownItems, false), 500);
      }
      return newCards;
    });
  };

  const handleCloseExplanation = () => {
    setExplanation(null);
    if (cards.length === 0) {
      setTimeout(() => onComplete(knownItems, false), 300);
    }
  };

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 50 }}>
        <button 
          onClick={() => onComplete(knownItems, true)}
          style={{ 
            background: 'none', border: 'none', color: 'var(--text-light)', 
            fontSize: '1rem', fontWeight: 600, cursor: 'pointer' 
          }}
        >
          Skip
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>Let's gauge your knowledge</h2>
        <p style={{ color: 'var(--text-light)', marginTop: '8px' }}>
          Swipe right if you know it, left if it's new.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '440px', marginTop: '10px' }}>
        <AnimatePresence>
          {cards.map((card, index) => (
            <Card 
              key={card.id} 
              card={card} 
              active={index === cards.length - 1 && !explanation} 
              removeCard={removeCard} 
            />
          ))}
        </AnimatePresence>
        
        <AnimatePresence>
          {explanation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '32px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                padding: '32px',
                textAlign: 'center',
                zIndex: 20,
                border: '2px solid var(--primary-light)'
              }}
            >
              <div style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: '0.85rem', letterSpacing: '0.05em', marginBottom: '16px' }}>
                THIS WAS A NEW CONCEPT
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px', color: 'var(--primary-dark)' }}>
                {explanation.title}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '24px', lineHeight: 1.5 }}>
                {explanation.desc}
              </p>
              
              <div style={{ backgroundColor: 'var(--bg-color)', padding: '16px', borderRadius: '16px', textAlign: 'left', marginBottom: '24px' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.4, fontStyle: 'italic' }}>
                  "{explanation.example}"
                </p>
              </div>

              <button 
                onClick={handleCloseExplanation}
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  padding: '14px 32px',
                  borderRadius: '100px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Got it
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginTop: 'auto', marginBottom: '40px' }}>
        <div style={{ textAlign: 'center', color: '#ff6b6b', opacity: explanation ? 0.3 : 1 }}>
          <div style={{ fontSize: '24px' }}>←</div>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>NEW</span>
        </div>
        <div style={{ textAlign: 'center', color: '#51cf66', opacity: explanation ? 0.3 : 1 }}>
          <div style={{ fontSize: '24px' }}>→</div>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>KNOW IT</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeScreen;
