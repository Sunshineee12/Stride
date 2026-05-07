import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, LayoutGrid, Info, Rocket, Home, GraduationCap, TrendingUp, User, HeartHandshake, X } from 'lucide-react';

const HomeScreen = ({ userKnowledge, onTabChange }) => {
  const [selectedPop, setSelectedPop] = useState(null);

  const indexDetails = {
    'NIFTY 50': {
      title: 'NIFTY 50',
      oneLiner: "Scorecard for India's 50 biggest companies."
    },
    'SENSEX': {
      title: 'SENSEX',
      oneLiner: "Scorecard for the 30 oldest large companies."
    }
  };

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', position: 'relative' }}
    >
      {/* Top App Bar (M3) */}
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '16px 16px 8px', 
        backgroundColor: 'var(--md-sys-color-surface)',
        zIndex: 10,
        opacity: selectedPop ? 0.4 : 1
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '40px', height: '40px', 
            backgroundColor: 'var(--md-sys-color-primary-container)', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: 'var(--md-sys-color-on-primary-container)' 
          }}>
            <TrendingUp size={20} />
          </div>
          <h1 style={{ 
            fontSize: '1.1rem', 
            fontWeight: 700, 
            color: 'var(--md-sys-color-on-surface)',
            textTransform: 'uppercase',
            letterSpacing: '0.01em'
          }}>Stride</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{ padding: '8px', color: 'var(--md-sys-color-on-surface-variant)' }}><Search size={22} /></button>
          <div style={{ 
            width: '40px', height: '40px', 
            backgroundColor: 'var(--md-sys-color-secondary-container)', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: 'var(--md-sys-color-on-secondary-container)', fontWeight: 500
          }}>
            S
          </div>
        </div>
      </header>

      {/* Tabs (M3 style) */}
      <div style={{ display: 'flex', padding: '0 16px', marginBottom: '16px', opacity: selectedPop ? 0.4 : 1 }}>
        <div style={{ 
          flex: 1, textAlign: 'center', padding: '14px 0', 
          borderBottom: '3px solid var(--md-sys-color-primary)', 
          color: 'var(--md-sys-color-on-surface)', fontWeight: 600 
        }}>
          Explore
        </div>
        <div style={{ 
          flex: 1, textAlign: 'center', padding: '14px 0', 
          color: 'var(--md-sys-color-on-surface-variant)', fontWeight: 500 
        }}>
          Portfolio
        </div>
      </div>

      <div style={{ padding: '0 16px', flex: 1, paddingBottom: '100px' }}>
        {/* Indices */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', position: 'relative' }}>
          {['NIFTY 50', 'SENSEX'].map((name) => (
            <div key={name} style={{ flex: 1, position: 'relative' }}>
              <motion.div 
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPop(selectedPop === name ? null : name);
                }}
                style={{ 
                  backgroundColor: 'var(--md-sys-color-surface-container)', 
                  borderRadius: 'var(--md-sys-shape-corner-large)', 
                  padding: '16px', 
                  cursor: 'pointer',
                  zIndex: selectedPop === name ? 110 : 1,
                  position: 'relative',
                  boxShadow: selectedPop === name ? '0 20px 40px rgba(103, 80, 164, 0.25)' : 'none',
                  transition: 'box-shadow 0.3s ease',
                  border: selectedPop === name ? '1px solid var(--md-sys-color-outline-variant)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-on-surface-variant)', fontWeight: 600 }}>{name}</span>
                  <Info size={14} color="var(--md-sys-color-primary)" />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>
                    {name === 'NIFTY 50' ? '22,453.30' : '73,876.82'}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#1B5E20' }}>+0.4%</span>
                </div>
              </motion.div>

              {/* Small Dialog Box beside it */}
              <AnimatePresence>
                {selectedPop === name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '180px',
                      backgroundColor: 'var(--md-sys-color-primary-container)',
                      color: 'var(--md-sys-color-on-primary-container)',
                      borderRadius: '16px',
                      padding: '12px',
                      marginTop: '12px',
                      zIndex: 120,
                      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      fontSize: '0.85rem',
                      lineHeight: 1.4,
                      pointerEvents: 'none'
                    }}
                  >
                    <div style={{ 
                      position: 'absolute', top: '-6px', left: '20px', 
                      width: '12px', height: '12px', 
                      backgroundColor: 'var(--md-sys-color-primary-container)', 
                      transform: 'rotate(45deg)' 
                    }} />
                    {indexDetails[name].oneLiner}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Action Cards (M3 Filled Cards) */}
        <motion.div 
          whileTap={{ scale: 0.99 }}
          style={{ 
            backgroundColor: 'var(--md-sys-color-secondary-container)', 
            borderRadius: 'var(--md-sys-shape-corner-large)', 
            padding: '20px', marginBottom: '16px', 
            opacity: selectedPop ? 0.4 : 1
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ 
              width: '48px', height: '48px', 
              backgroundColor: 'var(--md-sys-color-primary)', 
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' 
            }}>
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--md-sys-color-on-secondary-container)' }}>Learn without Risk</h3>
              <p style={{ color: 'var(--md-sys-color-on-secondary-container)', opacity: 0.8, fontSize: '0.85rem' }}>Start with dummy coins.</p>
            </div>
          </div>
          <button style={{ 
            backgroundColor: 'var(--md-sys-color-primary)', color: 'white', 
            padding: '12px', borderRadius: '100px', fontWeight: 600, width: '100%' 
          }}>
            Try Now
          </button>
        </motion.div>

        <motion.div 
          whileTap={{ scale: 0.99 }}
          style={{ 
            backgroundColor: 'var(--md-sys-color-surface-container-high)', 
            borderRadius: 'var(--md-sys-shape-corner-large)', 
            padding: '20px', 
            opacity: selectedPop ? 0.4 : 1,
            border: '1px solid var(--md-sys-color-outline-variant)'
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ 
              width: '48px', height: '48px', 
              backgroundColor: 'var(--md-sys-color-primary-container)', 
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: 'var(--md-sys-color-on-primary-container)' 
            }}>
              <Rocket size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface)' }}>First Trade</h3>
              <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.85rem' }}>Ready to grow wealth?</p>
            </div>
          </div>
          <button style={{ 
            backgroundColor: 'var(--md-sys-color-primary)', color: 'white', 
            padding: '12px', borderRadius: '100px', fontWeight: 600, width: '100%',
            boxShadow: '0 4px 12px rgba(103, 80, 164, 0.2)'
          }}>
            Find Stocks
          </button>
        </motion.div>
      </div>

      {/* Navigation Bar (M3 style) */}
      <div style={{ 
        position: 'sticky', bottom: 0, left: 0, width: '100%', 
        backgroundColor: 'var(--md-sys-color-surface-container)', 
        display: 'flex', justifyContent: 'space-around', padding: '12px 0 24px',
        zIndex: 50,
        opacity: selectedPop ? 0.4 : 1,
        boxShadow: '0 -4px 20px rgba(0,0,0,0.05)'
      }}>
        {[
          { icon: Home, label: 'Home', id: 'home', active: true },
          { icon: GraduationCap, label: 'Learn', id: 'learn' },
          { icon: TrendingUp, label: 'Trade', id: 'trade' },
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

      {/* Dull Overlay */}
      <AnimatePresence>
        {selectedPop && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPop(null)}
            style={{ 
              position: 'absolute', inset: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.2)', 
              zIndex: 100,
              backdropFilter: 'blur(2px)'
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HomeScreen;
