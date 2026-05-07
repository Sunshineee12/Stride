import React from 'react';
import { motion } from 'framer-motion';
import { Search, LayoutGrid, Info, Rocket, Home, GraduationCap, TrendingUp, User, HeartHandshake } from 'lucide-react';

const HomeScreen = () => {
  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#FCFAFF', padding: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}
    >
      {/* Top Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 24px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <TrendingUp size={20} />
          </div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-dark)' }}>Stride</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-light)' }}>
          <Search size={22} />
          <LayoutGrid size={22} />
          <div style={{ width: '36px', height: '36px', backgroundColor: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>
            S
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #EAE5F0', padding: '0 24px' }}>
        <div style={{ padding: '0 16px 12px', borderBottom: '3px solid var(--primary)', fontWeight: 600, color: 'var(--primary-dark)', fontSize: '1.05rem' }}>
          Explore
        </div>
        <div style={{ padding: '0 16px 12px', fontWeight: 500, color: 'var(--text-light)', fontSize: '1.05rem' }}>
          Portfolio
        </div>
      </div>

      <div style={{ padding: '24px', flex: 1, paddingBottom: '100px' }}>
        {/* Indices */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div style={{ flex: 1, backgroundColor: 'white', border: '1px solid #F0ECF4', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>NIFTY 50</span>
              <Info size={14} color="var(--primary-dark)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-dark)' }}>22,453.30</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#51cf66' }}>+0.45%</span>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', border: '1px solid #F0ECF4', borderRadius: '16px', padding: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 600 }}>SENSEX</span>
              <Info size={14} color="var(--primary-dark)" />
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-dark)' }}>73,876.82</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#51cf66' }}>+0.38%</span>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <motion.div 
          whileHover={{ y: -2 }}
          style={{ backgroundColor: 'var(--primary-light)', borderRadius: '24px', padding: '24px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '4px' }}>Learn without any Risk</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.4 }}>Start with dummy coins and build your confidence before playing for real.</p>
            </div>
          </div>
          <button style={{ backgroundColor: 'var(--primary-dark)', color: 'white', padding: '14px', borderRadius: '16px', fontWeight: 600, fontSize: '1rem', border: 'none', width: '100%' }}>
            Try Now
          </button>
        </motion.div>

        <motion.div 
          whileHover={{ y: -2 }}
          style={{ backgroundColor: 'var(--primary-light)', borderRadius: '24px', padding: '24px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
              <Rocket size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '4px' }}>Start your first trade</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: 1.4 }}>Ready to grow your wealth? Start with a small investment and learn as you go.</p>
            </div>
          </div>
          <button style={{ backgroundColor: 'var(--primary-dark)', color: 'white', padding: '14px', borderRadius: '16px', fontWeight: 600, fontSize: '1rem', border: 'none', width: '100%' }}>
            Find your first stock
          </button>
        </motion.div>
      </div>

      {/* Bottom Nav */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#FCFAFF', borderTop: '1px solid #EAE5F0', display: 'flex', justifyContent: 'space-around', padding: '16px 0 24px', zIndex: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--primary-dark)' }}>
          <div style={{ backgroundColor: 'var(--primary-light)', padding: '8px 20px', borderRadius: '100px' }}>
            <Home size={20} />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Home</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-light)', paddingTop: '8px' }}>
          <GraduationCap size={20} />
          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Learn</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-light)', paddingTop: '8px' }}>
          <TrendingUp size={20} />
          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Trade</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-light)', paddingTop: '8px' }}>
          <User size={20} />
          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Profile</span>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeScreen;
