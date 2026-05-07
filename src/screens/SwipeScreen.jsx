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
        height: '460px', /* Increased height to fit the example text cleanly */
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
      
      <div style={{ backgroundColor: 'var(--bg-color)', padding: '16px', borderRadius: '16px', border: '1px solid var(--primary-light)', width: '100%' }}>
        <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: 'var(--primary-dark)', marginBottom: '6px' }}>
          Real Life Example
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.4, fontStyle: 'italic' }}>
          "{card.example}"
        </p>
      </div>

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

  const removeCard = (id, result) => {
    if (result === 'known') {
      const card = cards.find(c => c.id === id);
      setKnownItems(prev => [...prev, card.title]);
    }
    
    setCards((prev) => prev.filter((c) => c.id !== id));
    
    if (cards.length === 1) {
      setTimeout(() => onComplete(knownItems), 500);
    }
  };

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>Let's gauge your knowledge</h2>
        <p style={{ color: 'var(--text-light)', marginTop: '8px' }}>
          Swipe right if you know it, left if it's new.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '480px', marginTop: '10px' }}>
        <AnimatePresence>
          {cards.map((card, index) => (
            <Card 
              key={card.id} 
              card={card} 
              active={index === cards.length - 1} 
              removeCard={removeCard} 
            />
          ))}
        </AnimatePresence>
        {cards.length === 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--text-light)' }}>
            Preparing your dashboard...
          </div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', marginTop: 'auto', marginBottom: '40px' }}>
        <div style={{ textAlign: 'center', color: '#ff6b6b' }}>
          <div style={{ fontSize: '24px' }}>←</div>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>NEW</span>
        </div>
        <div style={{ textAlign: 'center', color: '#51cf66' }}>
          <div style={{ fontSize: '24px' }}>→</div>
          <span style={{ fontSize: '12px', fontWeight: 'bold' }}>KNOW IT</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SwipeScreen;
