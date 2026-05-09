import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { History, TrendingUp, TrendingDown, Home, GraduationCap, User, Search, Filter, Star, Briefcase, ChevronRight, Target, ShieldCheck, Zap, Info } from 'lucide-react';

const TradeScreen = ({ onTabChange }) => {
  const [activeView, setActiveView] = useState('history'); // history, watchlist, portfolio
  const [riskLevel, setRiskLevel] = useState('low');
  const [showDailyGoal, setShowDailyGoal] = useState(true);

  const suggestions = {
    low: { name: 'NIFTY BEES (ETF)', risk: 'Safe & Steady', price: '₹10', icon: ShieldCheck },
    med: { name: 'TATA POWER', risk: 'Balanced Growth', price: '₹15', icon: Info },
    high: { name: 'ZOMATO', risk: 'High Volatility', price: '₹5', icon: Zap }
  };

  const trades = [
    { id: 1, stock: 'TATA MOTORS', type: 'BUY', price: '₹984.50', qty: 10, status: 'COMPLETED', date: '07 May 2024', profit: '+₹120' },
    { id: 2, stock: 'RELIANCE', type: 'SELL', price: '₹2,540.20', qty: 5, status: 'COMPLETED', date: '06 May 2024', profit: '+₹450' },
    { id: 3, stock: 'ZOMATO', type: 'BUY', price: '₹185.00', qty: 100, status: 'COMPLETED', date: '05 May 2024', profit: '-₹50' },
  ];

  const watchlist = [
    { id: 1, stock: 'TATA MOTORS', price: '₹984.50', change: '+1.2%', up: true },
    { id: 2, stock: 'RELIANCE', price: '₹2,840.10', change: '-0.5%', up: false },
    { id: 3, stock: 'INFY', price: '₹1,420.00', change: '+0.8%', up: true },
    { id: 4, stock: 'ZOMATO', price: '₹185.20', change: '+2.4%', up: true },
  ];

  const portfolio = {
    totalInvested: '₹45,200',
    currentValue: '₹48,850',
    totalPnL: '+₹3,650',
    holdings: [
      { stock: 'TATA MOTORS', qty: 20, avg: '₹950', current: '₹984.50', pnl: '+₹690' },
      { stock: 'RELIANCE', qty: 10, avg: '₹2,700', current: '₹2,840.10', pnl: '+₹1,401' },
    ]
  };

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '100px' }}>
        {/* Header */}
        <header style={{ padding: '24px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Trade</h1>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Manage your investments and history.</p>
          </div>
          <button 
            onClick={() => setShowDailyGoal(true)}
            style={{ 
              width: '40px', height: '40px', borderRadius: '12px', 
              backgroundColor: 'var(--md-sys-color-secondary-container)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: 'var(--md-sys-color-on-secondary-container)', border: 'none', cursor: 'pointer'
            }}
          >
            <Target size={20} />
          </button>
        </header>



        {/* Search Bar */}
        <div style={{ padding: '0 20px 16px', display: 'flex', gap: '12px' }}>
          <div style={{ 
            flex: 1, backgroundColor: 'var(--md-sys-color-surface-container-high)', 
            borderRadius: '100px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <Search size={18} color="var(--md-sys-color-outline)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-outline)' }}>Search stocks...</span>
          </div>
          <div style={{ 
            width: '44px', height: '44px', backgroundColor: 'var(--md-sys-color-secondary-container)', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--md-sys-color-on-secondary-container)'
          }}>
            <Filter size={18} />
          </div>
        </div>

        {/* Navigation Tabs (Watchlist, Portfolio, History) */}
        <div style={{ display: 'flex', padding: '0 20px', gap: '8px', marginBottom: '24px' }}>
          {[
            { id: 'watchlist', label: 'Watchlist', icon: Star },
            { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
            { id: 'history', label: 'History', icon: History }
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveView(tab.id)}
              whileTap={{ scale: 0.95 }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '10px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600,
                backgroundColor: activeView === tab.id ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container)',
                color: activeView === tab.id ? 'white' : 'var(--md-sys-color-on-surface-variant)',
                border: 'none', cursor: 'pointer',
                boxShadow: activeView === tab.id ? '0 4px 12px rgba(103, 80, 164, 0.2)' : 'none'
              }}
            >
              <tab.icon size={14} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeView === 'history' && (
            <motion.div 
              key="history" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              style={{ padding: '0 20px' }}
            >
              {trades.map(trade => (
                <div 
                  key={trade.id}
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-surface-container)', 
                    padding: '16px', borderRadius: '24px', marginBottom: '12px',
                    border: '1px solid var(--md-sys-color-outline-variant)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ 
                        padding: '4px 10px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 800,
                        backgroundColor: trade.type === 'BUY' ? '#E8F5E9' : '#FFEBEE',
                        color: trade.type === 'BUY' ? '#1B5E20' : '#B71C1C'
                      }}>
                        {trade.type}
                      </div>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{trade.stock}</h3>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: trade.profit.startsWith('+') ? '#1B5E20' : '#B71C1C' }}>
                      {trade.profit}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                        {trade.qty} Shares @ {trade.price}
                      </p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--md-sys-color-outline)', marginTop: '4px' }}>
                        {trade.date}
                      </p>
                    </div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#1B5E20' }}>{trade.status}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeView === 'watchlist' && (
            <motion.div 
              key="watchlist" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              style={{ padding: '0 20px' }}
            >
              {watchlist.map(item => (
                <div 
                  key={item.id}
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-surface-container)', 
                    padding: '16px', borderRadius: '24px', marginBottom: '12px',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    border: '1px solid var(--md-sys-color-outline-variant)'
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{item.stock}</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>NSE</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.95rem', fontWeight: 700 }}>{item.price}</p>
                    <p style={{ fontSize: '0.8rem', fontWeight: 600, color: item.up ? '#1B5E20' : '#B71C1C' }}>{item.change}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeView === 'portfolio' && (
            <motion.div 
              key="portfolio" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              style={{ padding: '0 20px' }}
            >
              <div style={{ 
                backgroundColor: 'var(--md-sys-color-primary)', borderRadius: '28px', padding: '24px', 
                color: 'white', marginBottom: '24px', boxShadow: '0 8px 32px rgba(103, 80, 164, 0.2)'
              }}>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '4px' }}>Portfolio Value</p>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px' }}>{portfolio.currentValue}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                  <div>
                    <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>Invested</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>{portfolio.totalInvested}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.7rem', opacity: 0.8 }}>Total P&L</p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>{portfolio.totalPnL}</p>
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--md-sys-color-on-surface)' }}>Your Holdings</h3>
              {portfolio.holdings.map((holding, i) => (
                <div 
                  key={i}
                  style={{ 
                    backgroundColor: 'var(--md-sys-color-surface-container)', 
                    padding: '16px', borderRadius: '24px', marginBottom: '12px',
                    border: '1px solid var(--md-sys-color-outline-variant)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{holding.stock}</h4>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1B5E20' }}>{holding.pnl}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                    <span>{holding.qty} shares • Avg. {holding.avg}</span>
                    <span>LTP {holding.current}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Bar (M3 style) */}
      <div style={{ 
        position: 'sticky', bottom: 0, left: 0, width: '100%', 
        backgroundColor: 'var(--md-sys-color-surface-container)', 
        display: 'flex', justifyContent: 'space-around', padding: '12px 0 24px',
        zIndex: 50,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.05)'
      }}>
        {[
          { icon: Home, label: 'Home', id: 'home' },
          { icon: GraduationCap, label: 'Learn', id: 'learn' },
          { icon: TrendingUp, label: 'Trade', id: 'trade', active: true },
          { icon: User, label: 'Profile', id: 'profile' }
        ].map((item) => (
          <div 
            key={item.label} 
            onClick={() => onTabChange(item.id)}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
          >
            <div style={{ 
              backgroundColor: item.active ? 'var(--md-sys-color-secondary-container)' : 'transparent', 
              padding: '4px 20px', borderRadius: '16px',
              color: item.active ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)'
            }}>
              <item.icon size={24} />
            </div>
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: item.active ? 600 : 500,
              color: item.active ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-surface-variant)'
            }}>{item.label}</span>
          </div>
        ))}
      </div>
      {/* Daily Learning Goal Modal */}
      <AnimatePresence>
        {showDailyGoal && (
          <div style={{ 
            position: 'absolute', inset: 0, zIndex: 1000, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' 
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDailyGoal(false)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{
                width: '100%', maxWidth: '340px', backgroundColor: 'var(--md-sys-color-surface)',
                borderRadius: '32px', padding: '32px 24px', position: 'relative', zIndex: 1001,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              <button 
                onClick={() => setShowDailyGoal(false)}
                style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--md-sys-color-outline)', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <ChevronRight size={24} style={{ rotate: '90deg' }} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ 
                  width: '56px', height: '56px', borderRadius: '16px', 
                  backgroundColor: 'var(--md-sys-color-primary-container)', 
                  margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--md-sys-color-primary)'
                }}>
                  <Target size={28} />
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Daily Learning Goal</h2>
                <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', marginTop: '8px', lineHeight: 1.5 }}>
                  The best way to learn is by doing. Even a ₹5 investment today helps you grow.
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '12px', color: 'var(--md-sys-color-on-surface-variant)', textAlign: 'center' }}>
                  Choose your risk level for today
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[
                    { id: 'low', label: 'Safe', icon: ShieldCheck, color: '#2E7D32' },
                    { id: 'med', label: 'Balanced', icon: Info, color: '#F57C00' },
                    { id: 'high', label: 'Bold', icon: Zap, color: '#C62828' }
                  ].map(risk => (
                    <button 
                      key={risk.id}
                      onClick={() => setRiskLevel(risk.id)}
                      style={{ 
                        flex: 1, 
                        backgroundColor: riskLevel === risk.id ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-container-high)', 
                        color: riskLevel === risk.id ? 'white' : 'var(--md-sys-color-on-surface-variant)',
                        border: 'none', borderRadius: '16px', padding: '12px 8px', 
                        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', 
                        cursor: 'pointer', transition: 'all 0.2s ease'
                      }}
                    >
                      <risk.icon size={20} color={riskLevel === risk.id ? 'white' : risk.color} />
                      <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>{risk.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ 
                backgroundColor: 'var(--md-sys-color-secondary-container)', 
                borderRadius: '24px', padding: '20px', textAlign: 'center'
              }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--md-sys-color-on-secondary-container)', opacity: 0.8, marginBottom: '4px' }}>
                  Our Suggestion
                </p>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--md-sys-color-on-secondary-container)' }}>
                  {suggestions[riskLevel].name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-on-secondary-container)', opacity: 0.9, marginTop: '4px' }}>
                  {suggestions[riskLevel].risk} • {suggestions[riskLevel].price}
                </p>
                
                <button 
                  onClick={() => setShowDailyGoal(false)}
                  style={{ 
                    marginTop: '16px', backgroundColor: 'var(--md-sys-color-primary)', color: 'white', 
                    width: '100%', padding: '12px', borderRadius: '100px', fontWeight: 600, border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TradeScreen;
