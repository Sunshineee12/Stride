import React from 'react';
import { motion } from 'framer-motion';
import { History, TrendingUp, TrendingDown, Home, GraduationCap, User, Search, Filter } from 'lucide-react';

const TradeScreen = ({ onTabChange }) => {
  const trades = [
    { id: 1, stock: 'TATA MOTORS', type: 'BUY', price: '₹984.50', qty: 10, status: 'COMPLETED', date: '07 May 2024', profit: '+₹120' },
    { id: 2, stock: 'RELIANCE', type: 'SELL', price: '₹2,540.20', qty: 5, status: 'COMPLETED', date: '06 May 2024', profit: '+₹450' },
    { id: 3, stock: 'ZOMATO', type: 'BUY', price: '₹185.00', qty: 100, status: 'COMPLETED', date: '05 May 2024', profit: '-₹50' },
  ];

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '100px' }}>
        {/* Header */}
        <header style={{ padding: '24px 20px 16px' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Trade History</h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Track your past trades and performance.</p>
        </header>

        {/* Filter/Search Bar */}
        <div style={{ padding: '0 20px 20px', display: 'flex', gap: '12px' }}>
          <div style={{ 
            flex: 1, backgroundColor: 'var(--md-sys-color-surface-container-high)', 
            borderRadius: '100px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px'
          }}>
            <Search size={18} color="var(--md-sys-color-outline)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-outline)' }}>Search trades...</span>
          </div>
          <div style={{ 
            width: '44px', height: '44px', backgroundColor: 'var(--md-sys-color-secondary-container)', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--md-sys-color-on-secondary-container)'
          }}>
            <Filter size={18} />
          </div>
        </div>

        {/* Trade List */}
        <div style={{ padding: '0 20px' }}>
          {trades.map(trade => (
            <motion.div 
              key={trade.id}
              whileTap={{ scale: 0.99 }}
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
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#1B5E20' }}>{trade.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
    </motion.div>
  );
};

export default TradeScreen;
