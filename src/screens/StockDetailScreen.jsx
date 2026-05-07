import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, TrendingUp, Info, X, Star, ArrowUpRight, BarChart3, LineChart } from 'lucide-react';

const StockDetailScreen = ({ stockName = "TATA MOTORS", onBack }) => {
  const [activeInfo, setActiveInfo] = useState(null);

  const educationalData = {
    LTP: {
      title: "LTP (Last Traded Price)",
      desc: "This is the current price of one share. It changes every second when the market is open as people buy and sell."
    },
    MarketCap: {
      title: "Market Cap",
      desc: "Total value of the company. Calculated as: (Current Price) x (Total Number of Shares). It tells you how big the company is."
    },
    PERatio: {
      title: "P/E Ratio",
      desc: "Price-to-Earnings. It helps you check if a stock is 'expensive' or 'cheap' compared to its earnings. High P/E might mean high growth expectations!"
    },
    Volume: {
      title: "Volume",
      desc: "The total number of shares being traded right now. High volume means a lot of people are interested in this stock."
    }
  };

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      style={{ 
        position: 'absolute', inset: 0, backgroundColor: 'var(--md-sys-color-surface)', 
        zIndex: 200, display: 'flex', flexDirection: 'column' 
      }}
    >
      {/* Header */}
      <div style={{ padding: '20px 16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={onBack} style={{ color: 'var(--md-sys-color-on-surface)' }}>
          <ChevronLeft size={24} />
        </button>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{stockName}</h2>
          <span style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>NSE • EQ</span>
        </div>
        <Star size={20} color="var(--md-sys-color-outline)" />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 40px' }}>
        {/* Price & Chart Section */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
            <h1 
              onClick={() => setActiveInfo('LTP')}
              style={{ fontSize: '2rem', fontWeight: 800, cursor: 'help', borderBottom: '2px dashed var(--md-sys-color-outline-variant)' }}
            >
              ₹984.50
            </h1>
            <span style={{ color: '#1B5E20', fontWeight: 700, fontSize: '1rem' }}>+12.30 (1.26%)</span>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>As on 07 May, 2024 15:59</p>
        </div>

        {/* Simplified Chart Visual */}
        <div style={{ height: '200px', width: '100%', backgroundColor: 'var(--md-sys-color-surface-container)', borderRadius: '24px', marginBottom: '32px', position: 'relative', overflow: 'hidden', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--md-sys-color-outline)', fontSize: '0.7rem' }}>
            <span>1D</span><span>1W</span><span style={{ color: 'var(--md-sys-color-primary)', fontWeight: 700 }}>1M</span><span>1Y</span><span>5Y</span>
          </div>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <motion.path 
              d="M0,80 Q20,60 40,70 T80,30 T100,20 L100,100 L0,100 Z" 
              fill="url(#chartGradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--md-sys-color-primary)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--md-sys-color-primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Market Cap', value: '₹3.27L Cr', key: 'MarketCap' },
            { label: 'P/E Ratio', value: '18.42', key: 'PERatio' },
            { label: 'Dividend Yield', value: '0.61%', key: null },
            { label: 'Volume', value: '45.2M', key: 'Volume' }
          ].map((stat, i) => (
            <div 
              key={i} 
              onClick={() => stat.key && setActiveInfo(stat.key)}
              style={{ 
                padding: '16px', backgroundColor: 'var(--md-sys-color-surface-container-high)', 
                borderRadius: '16px', cursor: stat.key ? 'help' : 'default',
                border: stat.key ? '1px dashed var(--md-sys-color-outline-variant)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{stat.label}</span>
                {stat.key && <Info size={12} color="var(--md-sys-color-primary)" />}
              </div>
              <span style={{ fontSize: '1rem', fontWeight: 700 }}>{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Buy/Sell Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ flex: 1, backgroundColor: '#BA1A1A', color: 'white', padding: '16px', borderRadius: '100px', fontWeight: 700 }}>SELL</button>
          <button style={{ flex: 1, backgroundColor: 'var(--md-sys-color-primary)', color: 'white', padding: '16px', borderRadius: '100px', fontWeight: 700 }}>BUY</button>
        </div>
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {activeInfo && (
          <div style={{ position: 'absolute', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActiveInfo(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ 
                backgroundColor: 'var(--md-sys-color-surface)', width: '100%', maxWidth: '320px', 
                borderRadius: '28px', padding: '24px', position: 'relative', zIndex: 1001 
              }}
            >
              <div style={{ 
                width: '48px', height: '48px', backgroundColor: 'var(--md-sys-color-primary-container)', 
                borderRadius: '12px', marginBottom: '16px', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', color: 'var(--md-sys-color-primary)'
              }}>
                <TrendingUp size={24} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>{educationalData[activeInfo].title}</h3>
              <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '20px' }}>
                {educationalData[activeInfo].desc}
              </p>
              <button 
                onClick={() => setActiveInfo(null)}
                style={{ backgroundColor: 'var(--md-sys-color-primary)', color: 'white', width: '100%', padding: '12px', borderRadius: '100px', fontWeight: 600 }}
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StockDetailScreen;
