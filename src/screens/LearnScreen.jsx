import React from 'react';
import { motion } from 'framer-motion';
import { Flame, GraduationCap, MessageSquare, Users, Star, ChevronRight, Home, TrendingUp, User, Trophy, BookOpen } from 'lucide-react';

const LearnScreen = ({ onTabChange }) => {
  const [streak, setStreak] = React.useState(7);
  
  const groups = [
    { id: 1, name: 'Beginner Traders', members: '1.2k', mentor: 'Rohan S.', color: '#6750A4' },
    { id: 2, name: 'Market Analysis', members: '850', mentor: 'Priya M.', color: '#006A6A' },
    { id: 3, name: 'Psychology & Trading', members: '2.4k', mentor: 'Dr. Anita', color: '#BA1A1A' },
  ];

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '100px' }}>
        {/* Header with Streak */}
        <header style={{ 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          padding: '24px 20px 16px', 
          backgroundColor: 'var(--md-sys-color-surface)'
        }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Academy</h1>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '6px', 
            backgroundColor: 'var(--md-sys-color-secondary-container)', 
            padding: '6px 12px', borderRadius: '100px',
            color: 'var(--md-sys-color-on-secondary-container)'
          }}>
            <Flame size={18} fill="#FF9800" stroke="#FF9800" />
            <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>{streak}</span>
          </div>
        </header>

        <div style={{ padding: '0 20px' }}>
          {/* Daily Quiz Hero */}
          <motion.div 
            whileTap={{ scale: 0.98 }}
            style={{ 
              backgroundColor: 'var(--md-sys-color-primary)', 
              borderRadius: '28px', padding: '24px', marginBottom: '24px',
              color: 'white', position: 'relative', overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(103, 80, 164, 0.25)'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', opacity: 0.9 }}>
                <Trophy size={16} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Challenge</span>
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Test Your Market Sense</h2>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '20px', maxWidth: '200px' }}>
                Complete today's quiz to keep your {streak} day streak alive!
              </p>
              <button style={{ 
                backgroundColor: 'white', color: 'var(--md-sys-color-primary)', 
                padding: '10px 24px', borderRadius: '100px', fontWeight: 700, fontSize: '0.85rem'
              }}>
                Start Quiz (+50 🪙)
              </button>
            </div>
            <div style={{ 
              position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.2, transform: 'rotate(-15deg)' 
            }}>
              <BookOpen size={140} strokeWidth={1} />
            </div>
          </motion.div>

          {/* Mentorship / Community Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Join Mentorship Circles</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-primary)', fontWeight: 600 }}>See all</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            {groups.map(group => (
              <motion.div 
                key={group.id}
                whileTap={{ scale: 0.99 }}
                style={{ 
                  backgroundColor: 'var(--md-sys-color-surface-container-high)', 
                  padding: '16px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '16px',
                  cursor: 'pointer', border: '1px solid var(--md-sys-color-outline-variant)'
                }}
              >
                <div style={{ 
                  width: '52px', height: '52px', backgroundColor: group.color, 
                  borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                }}>
                  <Users size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '2px' }}>{group.name}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                    Mentored by <span style={{ color: 'var(--md-sys-color-primary)', fontWeight: 600 }}>{group.mentor}</span>
                  </p>
                </div>
                <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>{group.members}</span>
                    <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>online</span>
                  </div>
                  <ChevronRight size={18} color="var(--md-sys-color-outline)" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learner Perks */}
          <div style={{ 
            backgroundColor: 'var(--md-sys-color-secondary-container)', 
            padding: '20px', borderRadius: '24px', display: 'flex', gap: '16px', alignItems: 'center'
          }}>
            <div style={{ 
              width: '44px', height: '44px', backgroundColor: 'var(--md-sys-color-on-secondary-container)', 
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
            }}>
              <MessageSquare size={20} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--md-sys-color-on-secondary-container)' }}>Ask a Mentor</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-secondary-container)', opacity: 0.8 }}>Get your doubts cleared in 1-on-1 chats.</p>
            </div>
            <Star size={20} fill="var(--md-sys-color-on-secondary-container)" />
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
          { icon: GraduationCap, label: 'Learn', id: 'learn', active: true },
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
    </motion.div>
  );
};

export default LearnScreen;
