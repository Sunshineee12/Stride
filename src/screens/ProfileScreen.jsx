import React from 'react';
import { motion } from 'framer-motion';
import { User, Settings, Wallet, Gift, TrendingUp, ChevronRight, LogOut, Award, HeartPulse } from 'lucide-react';

const ProfileScreen = ({ onTabChange }) => {
  const rewards = [
    { id: 1, name: 'Premium Badge', price: 500, icon: Award, color: '#FFD700' },
    { id: 2, name: 'Psychology Guide', price: 1200, icon: HeartPulse, color: '#FF4081' },
    { id: 3, name: 'Exclusive Webinar', price: 2500, icon: GraduationCap, color: '#7C4DFF' },
  ];

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: 0, overflowY: 'auto' }}
    >
      {/* Header */}
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        padding: '24px 20px 16px', 
        backgroundColor: 'var(--md-sys-color-surface)'
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Profile</h1>
        <button style={{ padding: '8px', color: 'var(--md-sys-color-on-surface-variant)' }}>
          <Settings size={24} />
        </button>
      </header>

      <div style={{ padding: '0 20px 120px' }}>
        {/* User Info Card */}
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: '16px', 
          backgroundColor: 'var(--md-sys-color-surface-container-high)', 
          padding: '20px', borderRadius: '24px', marginBottom: '24px'
        }}>
          <div style={{ 
            width: '64px', height: '64px', 
            backgroundColor: 'var(--md-sys-color-primary)', 
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            color: 'white', fontSize: '1.5rem', fontWeight: 600
          }}>
            AS
          </div>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Asmita K.</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Verified Explorer</p>
          </div>
        </div>

        {/* Dummy Coins Wallet */}
        <div style={{ 
          backgroundColor: 'var(--md-sys-color-primary-container)', 
          padding: '24px', borderRadius: '28px', marginBottom: '24px',
          color: 'var(--md-sys-color-on-primary-container)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '4px' }}>Dummy Coins Earned</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>5,240 <span style={{ fontSize: '1rem', fontWeight: 600 }}>🪙</span></h2>
            </div>
            <div style={{ 
              backgroundColor: 'rgba(255,255,255,0.4)', padding: '8px 12px', 
              borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px'
            }}>
              <TrendingUp size={16} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>+12%</span>
            </div>
          </div>
          <button style={{ 
            backgroundColor: 'var(--md-sys-color-primary)', color: 'white', 
            width: '100%', padding: '12px', borderRadius: '100px', fontWeight: 600, border: 'none'
          }}>
            Redeem Rewards
          </button>
        </div>

        {/* Rewards Section */}
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--md-sys-color-on-surface)' }}>
          Reward Store
        </h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '8px' }}>
          {rewards.map(item => (
            <div key={item.id} style={{ 
              minWidth: '140px', backgroundColor: 'var(--md-sys-color-surface-container)', 
              padding: '16px', borderRadius: '20px', textAlign: 'center'
            }}>
              <div style={{ 
                width: '48px', height: '48px', backgroundColor: 'white', 
                borderRadius: '12px', margin: '0 auto 12px', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', color: item.color
              }}>
                <item.icon size={24} />
              </div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>{item.name}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-primary)', fontWeight: 700 }}>{item.price} 🪙</p>
            </div>
          ))}
        </div>

        {/* Trading Summary */}
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--md-sys-color-on-surface)' }}>
          Investment Summary
        </h3>
        <div style={{ 
          backgroundColor: 'var(--md-sys-color-surface-container-high)', 
          borderRadius: '24px', padding: '8px 0', marginBottom: '24px'
        }}>
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
            <span style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Total Invested</span>
            <span style={{ fontWeight: 600 }}>₹0.00</span>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
            <span style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Current Value</span>
            <span style={{ fontWeight: 600 }}>₹0.00</span>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--md-sys-color-on-surface-variant)' }}>Account ID</span>
            <span style={{ fontWeight: 600 }}>STR-99421</span>
          </div>
        </div>

        {/* Action List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { icon: Wallet, label: 'Add Money', sub: 'Instant bank transfer' },
            { icon: Gift, label: 'Refer & Earn', sub: 'Get 500 coins per friend' },
            { icon: LogOut, label: 'Logout', sub: 'Sign out of your account', color: '#B00020' }
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
                <p style={{ fontWeight: 600, fontSize: '0.95rem', color: item.color || 'var(--md-sys-color-on-surface)' }}>{item.label}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{item.sub}</p>
              </div>
              <ChevronRight size={18} color="var(--md-sys-color-outline)" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Bar (M3 style) */}
      <div style={{ 
        position: 'absolute', bottom: 0, left: 0, width: '100%', 
        backgroundColor: 'var(--md-sys-color-surface-container)', 
        display: 'flex', justifyContent: 'space-around', padding: '12px 0 24px',
        zIndex: 50
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
    </motion.div>
  );
};

// Add missing icons that were not imported but used in logic
const GraduationCap = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const Home = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

export default ProfileScreen;
