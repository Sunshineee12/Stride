import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, GraduationCap, MessageSquare, Users, Star, ChevronRight, Home, TrendingUp, User, Trophy, BookOpen, X, CheckCircle2, AlertCircle } from 'lucide-react';

const LearnScreen = ({ onTabChange }) => {
  const [streak, setStreak] = React.useState(7);
  const [quizState, setQuizState] = React.useState('start'); // start, active, feedback
  const [feedback, setFeedback] = React.useState(null);
  
  const groups = [
    { id: 1, name: 'Beginner Traders', members: '1.2k', mentor: 'Rohan S.', color: '#6750A4' },
    { id: 2, name: 'Market Analysis', members: '850', mentor: 'Priya M.', color: '#006A6A' },
    { id: 3, name: 'Psychology & Trading', members: '2.4k', mentor: 'Dr. Anita', color: '#BA1A1A' },
  ];

  const dailyQuiz = {
    question: "If a stock's RSI is 85, what does this visual signal usually mean?",
    visual: (
      <div style={{ height: '60px', width: '100%', display: 'flex', alignItems: 'flex-end', gap: '4px', marginBottom: '16px' }}>
        {[30, 45, 60, 75, 85].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 4 ? '#BA1A1A' : 'rgba(255,255,255,0.3)', borderRadius: '4px' }} />
        ))}
      </div>
    ),
    options: [
      { id: 'a', text: 'Overbought: Price might drop soon', correct: true, explanation: "RSI above 70 means the stock has been bought too much recently. Like a rubber band stretched too far, it's likely to snap back (price drop) soon!" },
      { id: 'b', text: 'Oversold: Great time to buy', correct: false, explanation: "Actually, 'Oversold' is when RSI is below 30. At 85, the stock is 'Overbought'—people are too excited, and a correction is usually around the corner." },
      { id: 'c', text: 'Neutral: No major change', correct: false, explanation: "Nope! Neutral is usually around 50. 85 is an extreme 'Overbought' signal, suggesting high heat in the market." }
    ]
  };

  const handleOptionSelect = (option) => {
    setFeedback(option);
    setQuizState('feedback');
    if (option.correct) {
      setStreak(prev => prev + 1);
    }
  };

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
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Learn & Earn</h1>
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
          {/* Daily Quiz Hero - Interactive */}
          <motion.div 
            layout
            style={{ 
              backgroundColor: quizState === 'feedback' && feedback?.correct ? '#1B5E20' : quizState === 'feedback' && !feedback?.correct ? '#BA1A1A' : 'var(--md-sys-color-primary)', 
              borderRadius: '28px', padding: '24px', marginBottom: '24px',
              color: 'white', position: 'relative', overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              transition: 'background-color 0.4s ease'
            }}
          >
            <AnimatePresence mode="wait">
              {quizState === 'start' && (
                <motion.div key="start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', opacity: 0.9 }}>
                    <Trophy size={16} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Challenge</span>
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Test Your Market Sense</h2>
                  <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '20px', maxWidth: '200px' }}>
                    Keep your {streak} day streak alive!
                  </p>
                  <button 
                    onClick={() => setQuizState('active')}
                    style={{ 
                      backgroundColor: 'white', color: 'var(--md-sys-color-primary)', 
                      padding: '10px 24px', borderRadius: '100px', fontWeight: 700, fontSize: '0.85rem'
                    }}
                  >
                    Start Quiz (+50 🪙)
                  </button>
                </motion.div>
              )}

              {quizState === 'active' && (
                <motion.div key="active" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px' }}>{dailyQuiz.question}</h3>
                  {dailyQuiz.visual}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {dailyQuiz.options.map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleOptionSelect(opt)}
                        style={{ 
                          backgroundColor: 'rgba(255,255,255,0.15)', padding: '12px 16px', 
                          borderRadius: '16px', color: 'white', textAlign: 'left',
                          fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.2)'
                        }}
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {quizState === 'feedback' && (
                <motion.div key="feedback" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    {feedback.correct ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />}
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{feedback.correct ? 'Spot on!' : 'Not quite...'}</h3>
                  </div>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '16px', borderRadius: '16px', marginBottom: '20px' }}>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>{feedback.explanation}</p>
                  </div>
                  <button 
                    onClick={() => { setQuizState('start'); setFeedback(null); }}
                    style={{ 
                      backgroundColor: 'white', color: feedback.correct ? '#1B5E20' : '#BA1A1A', 
                      padding: '10px 24px', borderRadius: '100px', fontWeight: 700, fontSize: '0.85rem'
                    }}
                  >
                    Continue
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            
            {quizState === 'start' && (
              <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.2, transform: 'rotate(-15deg)' }}>
                <BookOpen size={140} strokeWidth={1} />
              </div>
            )}
          </motion.div>

          {/* Ask a Mentor Card (Moved up) */}
          <motion.div 
            whileTap={{ scale: 0.98 }}
            style={{ 
              backgroundColor: 'var(--md-sys-color-secondary-container)', 
              padding: '20px', borderRadius: '28px', display: 'flex', gap: '16px', alignItems: 'center',
              marginBottom: '32px', cursor: 'pointer', border: '1px solid var(--md-sys-color-outline-variant)'
            }}
          >
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
          </motion.div>

          {/* Mentorship Circles */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>Mentorship Circles</h3>
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
