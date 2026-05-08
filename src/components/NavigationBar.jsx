import React from 'react';
import { Home, GraduationCap, TrendingUp, User } from 'lucide-react';

const NavigationBar = ({ activeTab, onTabChange }) => {
  const tabs = [
    { icon: Home, label: 'Home', id: 'home' },
    { icon: GraduationCap, label: 'Learn', id: 'learn' },
    { icon: TrendingUp, label: 'Trade', id: 'trade' },
    { icon: User, label: 'Profile', id: 'profile' }
  ];

  return (
    <div style={{ 
      position: 'sticky', bottom: 0, left: 0, width: '100%', 
      backgroundColor: 'var(--md-sys-color-surface-container)', 
      display: 'flex', justifyContent: 'space-around', padding: '12px 0 24px',
      zIndex: 50,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.05)',
      borderTop: '1px solid var(--md-sys-color-outline-variant)'
    }}>
      {tabs.map((item) => (
        <div 
          key={item.id} 
          onClick={() => onTabChange(item.id)}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
        >
          <div style={{ 
            backgroundColor: activeTab === item.id ? 'var(--md-sys-color-secondary-container)' : 'transparent', 
            padding: '4px 20px', borderRadius: '16px',
            color: activeTab === item.id ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface-variant)',
            transition: 'all 0.2s ease'
          }}>
            <item.icon size={24} />
          </div>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: activeTab === item.id ? 600 : 500,
            color: activeTab === item.id ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-surface-variant)'
          }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
