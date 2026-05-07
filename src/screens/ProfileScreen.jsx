import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, Wallet, Gift, TrendingUp, ChevronRight, LogOut, Award, HeartPulse, Tablet, Smartphone, Headphones, Coins, CheckCircle2, X, Info, Home, GraduationCap } from 'lucide-react';

const ProfileScreen = ({ onTabChange }) => {
  const [showRedeem, setShowRedeem] = React.useState(false);
  const [conversionCoins, setConversionCoins] = React.useState(1000);
  
  const rewards = [
    { id: 1, name: 'Eco Phone Cover', price: 1500, icon: Smartphone, color: '#3498db' },
    { id: 2, name: 'Inspiration Stickers', price: 300, icon: Gift, color: '#e74c3c' },
    { id: 3, name: 'Comfort Buds', price: 5000, icon: Headphones, color: '#2ecc71' },
    { id: 4, name: 'Mindfulness Toolkit', price: 1200, icon: HeartPulse, color: '#FF4081' },
  ];

  const estimatedCash = (conversionCoins / 100) * 10;

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '100px' }}>
        {/* Header */}
        <header style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '24px 20px 16px', 
          backgroundColor: 'var(--md-sys-color-surface)'
        }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>My Space</h1>
          <button style={{ padding: '8px', color: 'var(--md-sys-color-on-surface-variant)' }}>
            <Settings size={22} />
          </button>
        </header>

        <div style={{ padding: '0 20px' }}>
          {/* User Info Card */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '16px', 
            backgroundColor: 'var(--md-sys-color-surface-container-high)', 
            padding: '16px', borderRadius: '24px', marginBottom: '24px'
          }}>
            <div style={{ 
              width: '56px', height: '56px', 
              backgroundColor: 'var(--md-sys-color-primary)', 
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: 'white', fontSize: '1.2rem', fontWeight: 600
            }}>
              AS
            </div>
            <div>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Hello, Asmita</h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>You're doing amazing today!</p>
            </div>
          </div>

          {/* Dummy Coins Wallet */}
          <div style={{ 
            backgroundColor: 'var(--md-sys-color-primary-container)', 
            padding: '24px', borderRadius: '28px', marginBottom: '24px',
            color: 'var(--md-sys-color-on-primary-container)',
            boxShadow: '0 8px 24px rgba(103, 80, 164, 0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '4px' }}>Wisdom Earned</p>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>5,240 <span style={{ fontSize: '1rem', fontWeight: 600 }}>🪙</span></h2>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.4)', padding: '6px 12px', 
                borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                <TrendingUp size={14} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>Growing</span>
              </div>
            </div>
            <button 
              onClick={() => setShowRedeem(true)}
              style={{ 
                backgroundColor: 'var(--md-sys-color-primary)', color: 'white', 
                width: '100%', padding: '14px', borderRadius: '100px', fontWeight: 600, border: 'none',
                cursor: 'pointer', fontSize: '0.9rem'
              }}
            >
              Nurture Your Growth
            </button>
          </div>

          {/* Rewards Section */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--md-sys-color-on-surface)' }}>
            Gifts for Your Progress
          </h3>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '12px', scrollSnapType: 'x mandatory' }}>
            {rewards.map(item => (
              <div key={item.id} style={{ 
                minWidth: '140px', backgroundColor: 'var(--md-sys-color-surface-container)', 
                padding: '16px', borderRadius: '24px', textAlign: 'center',
                scrollSnapAlign: 'start', border: '1px solid var(--md-sys-color-outline-variant)'
              }}>
                <div style={{ 
                  width: '48px', height: '48px', backgroundColor: 'white', 
                  borderRadius: '16px', margin: '0 auto 12px', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', color: item.color,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  <item.icon size={24} />
                </div>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: 'var(--md-sys-color-on-surface)' }}>{item.name}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-primary)', fontWeight: 700 }}>{item.price} 🪙</p>
              </div>
            ))}
          </div>

          {/* Trading Summary */}
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--md-sys-color-on-surface)' }}>
            My Growth Path
          </h3>
          <div style={{ 
            backgroundColor: 'var(--md-sys-color-surface-container-high)', 
            borderRadius: '24px', padding: '4px 0', marginBottom: '24px'
          }}>
            <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
              <span style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.9rem' }}>Self-Investment</span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>₹0.00</span>
            </div>
            <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
              <span style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.9rem' }}>Current Growth</span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>₹0.00</span>
            </div>
            <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.9rem' }}>Guide ID</span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>STR-99421</span>
            </div>
          </div>

          {/* Action List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[
              { icon: Wallet, label: 'Empower My Journey', sub: 'Safely add funds to learn' },
              { icon: Gift, label: 'Share the Light', sub: 'Invite a friend to grow' },
              { icon: LogOut, label: 'Rest Your Eyes', sub: 'Safely sign out', color: 'var(--md-sys-color-outline)' }
            ].map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', alignItems: 'center', gap: '16px', 
                padding: '12px 0', cursor: 'pointer'
              }}>
                <div style={{ 
                  width: '40px', height: '40px', 
                  backgroundColor: 'var(--md-sys-color-surface-container-high)', 
                  borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  color: item.color || 'var(--md-sys-color-on-surface-variant)'
                }}>
                  <item.icon size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: item.color || 'var(--md-sys-color-on-surface)' }}>{item.label}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{item.sub}</p>
                </div>
                <ChevronRight size={16} color="var(--md-sys-color-outline)" />
              </div>
            ))}
          </div>
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
          { icon: TrendingUp, label: 'Trade', id: 'trade' },
          { icon: User, label: 'Profile', id: 'profile', active: true }
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

      {/* Redeem Modal */}
      <AnimatePresence>
        {showRedeem && (
          <div style={{ 
            position: 'absolute', inset: 0, zIndex: 1000, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' 
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowRedeem(false)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ 
                backgroundColor: 'var(--md-sys-color-surface)', 
                width: '100%', maxWidth: '340px', borderRadius: '32px', 
                padding: '32px 24px', position: 'relative', zIndex: 1001,
                textAlign: 'center'
              }}
            >
              <button 
                onClick={() => setShowRedeem(false)}
                style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--md-sys-color-outline)' }}
              >
                <X size={24} />
              </button>

              <div style={{ 
                width: '56px', height: '56px', backgroundColor: 'var(--md-sys-color-primary-container)', 
                borderRadius: '20px', margin: '0 auto 20px', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', color: 'var(--md-sys-color-primary)'
              }}>
                <Coins size={28} />
              </div>

              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>Celebrate Your Growth</h2>
              <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.85rem', marginBottom: '24px', lineHeight: 1.5 }}>
                You've gathered so much wisdom. Let's turn it into a step forward on your path.
              </p>

              <div style={{ 
                backgroundColor: 'var(--md-sys-color-surface-container)', 
                padding: '16px', borderRadius: '20px', marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Use 1,000 🪙</span>
                  <ChevronRight size={16} />
                  <span style={{ fontWeight: 700, color: '#2ecc71', fontSize: '0.9rem' }}>₹100 Growth Fund</span>
                </div>
                <div style={{ 
                  display: 'flex', alignItems: 'center', gap: '8px', 
                  fontSize: '0.7rem', color: 'var(--md-sys-color-primary)', 
                  backgroundColor: 'var(--md-sys-color-primary-container)',
                  padding: '8px 12px', borderRadius: '10px', textAlign: 'left'
                }}>
                  <Info size={12} />
                  <span>This fund is reserved for reinvesting in your future learning.</span>
                </div>
              </div>

              <button 
                onClick={() => setShowRedeem(false)}
                style={{ 
                  backgroundColor: 'var(--md-sys-color-primary)', color: 'white', 
                  width: '100%', padding: '14px', borderRadius: '100px', 
                  fontWeight: 600, fontSize: '0.9rem', border: 'none',
                  boxShadow: '0 8px 20px rgba(103, 80, 164, 0.15)'
                }}
              >
                Grow My Journey
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProfileScreen;
