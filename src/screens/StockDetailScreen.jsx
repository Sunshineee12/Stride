import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, TrendingUp, Info, X, Star, ArrowUpRight, BarChart3, LineChart } from 'lucide-react';

const StockDetailScreen = ({ stockName = "TATA MOTORS", onBack }) => {
  const [activeInfo, setActiveInfo] = useState(null);

  const educationalData = {
    NSE: {
      title: "NSE (National Stock Exchange)",
      desc: "India's largest exchange where you buy/sell stocks."
    },
    LTP: {
      title: "LTP",
      desc: "Current price of one share. Changes every second!"
    },
    MarketCap: {
      title: "Market Cap",
      desc: "Total value of company: Price x Total Shares."
    },
    PERatio: {
      title: "P/E Ratio",
      desc: "Is it cheap or expensive? (Price / Earnings)."
    },
    Volume: {
      title: "Volume",
      desc: "Number of shares traded today."
    }
  };

  const InfoDialog = ({ type, style = {} }) => (
    <AnimatePresence>
      {activeInfo === type && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          style={{
            position: 'absolute',
            width: '180px',
            backgroundColor: 'var(--md-sys-color-primary-container)',
            color: 'var(--md-sys-color-on-primary-container)',
            borderRadius: '16px',
            padding: '12px',
            zIndex: 120,
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            fontSize: '0.8rem',
            lineHeight: 1.4,
            ...style
          }}
        >
          <div style={{ 
            position: 'absolute', top: '-6px', left: '20px', 
            width: '12px', height: '12px', 
            backgroundColor: 'var(--md-sys-color-primary-container)', 
            transform: 'rotate(45deg)' 
          }} />
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>{educationalData[type].title}</div>
          {educationalData[type].desc}
        </motion.div>
      )}
    </AnimatePresence>
  );

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
        <div style={{ flex: 1, position: 'relative' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{stockName}</h2>
          <div 
            onClick={() => setActiveInfo(activeInfo === 'NSE' ? null : 'NSE')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>NSE • EQ</span>
            <Info size={10} color="var(--md-sys-color-primary)" />
          </div>
          <InfoDialog type="NSE" style={{ top: '100%', left: 0, marginTop: '8px' }} />
        </div>
        <Star size={20} color="var(--md-sys-color-outline)" />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 40px' }}>
        {/* Price Section */}
        <div style={{ marginBottom: '32px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
            <h1 
              onClick={() => setActiveInfo(activeInfo === 'LTP' ? null : 'LTP')}
              style={{ fontSize: '2rem', fontWeight: 800, cursor: 'help', borderBottom: '2px dashed var(--md-sys-color-outline-variant)' }}
            >
              ₹984.50
            </h1>
            <span style={{ color: '#1B5E20', fontWeight: 700, fontSize: '1rem' }}>+12.30 (1.26%)</span>
          </div>
          <InfoDialog type="LTP" style={{ top: '100%', left: 0, marginTop: '4px' }} />
          <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>As on 07 May, 2024 15:59</p>
        </div>

        {/* Chart Visual */}
        <div style={{ height: '180px', width: '100%', backgroundColor: 'var(--md-sys-color-surface-container)', borderRadius: '24px', marginBottom: '32px', position: 'relative', overflow: 'hidden', padding: '16px' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
          {[
            { label: 'Market Cap', value: '₹3.27L Cr', key: 'MarketCap' },
            { label: 'P/E Ratio', value: '18.42', key: 'PERatio' },
            { label: 'Volume', value: '45.2M', key: 'Volume' },
            { label: '52W High', value: '₹1,050.00', key: null }
          ].map((stat, i) => (
            <div 
              key={i} 
              style={{ position: 'relative' }}
              onClick={() => stat.key && setActiveInfo(activeInfo === stat.key ? null : stat.key)}
            >
              <div style={{ 
                padding: '14px', backgroundColor: 'var(--md-sys-color-surface-container-high)', 
                borderRadius: '16px', cursor: stat.key ? 'pointer' : 'default',
                border: stat.key ? '1px dashed var(--md-sys-color-outline-variant)' : 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                  <span style={{ fontSize: '0.7rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{stat.label}</span>
                  {stat.key && <Info size={10} color="var(--md-sys-color-primary)" />}
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{stat.value}</span>
              </div>
              {stat.key && <InfoDialog type={stat.key} style={{ bottom: '100%', left: 0, marginBottom: '8px' }} />}
            </div>
          ))}
        </div>

        {/* Buy/Sell Buttons - Sleeker */}
        <div style={{ display: 'flex', gap: '12px', padding: '8px' }}>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            style={{ 
              flex: 1, backgroundColor: '#FFEBEE', color: '#B71C1C', 
              padding: '12px', borderRadius: '12px', fontWeight: 700, fontSize: '0.9rem',
              border: '1px solid #FFCDD2'
            }}
          >
            SELL
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            style={{ 
              flex: 1, backgroundColor: '#E8F5E9', color: '#1B5E20', 
              padding: '12px', borderRadius: '12px', fontWeight: 700, fontSize: '0.9rem',
              border: '1px solid #C8E6C9'
            }}
          >
            BUY
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default StockDetailScreen;
