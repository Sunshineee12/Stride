import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, GraduationCap, MessageSquare, Users, Star, ChevronRight, Home, TrendingUp, User, Trophy, BookOpen, X, CheckCircle2, AlertCircle, Coins } from 'lucide-react';

const LearnScreen = ({ onTabChange }) => {
  const [streak, setStreak] = React.useState(7);
  const [showQuiz, setShowQuiz] = React.useState(false);
  const [quizStep, setQuizStep] = React.useState('question'); // question, feedback
  const [feedback, setFeedback] = React.useState(null);
  
  const groups = [
    { id: 1, name: 'Beginner Traders', members: '1.2k', mentor: 'Rohan S.', color: '#6750A4' },
    { id: 2, name: 'Market Analysis', members: '850', mentor: 'Priya M.', color: '#006A6A' },
    { id: 3, name: 'Psychology & Trading', members: '2.4k', mentor: 'Dr. Anita', color: '#BA1A1A' },
  ];

  const simplifiedQuiz = {
    question: "What is the 'Golden Rule' to make money in the stock market?",
    options: [
      { id: 'a', text: 'Buy High, Sell Low', correct: false, explanation: "Wait! If you buy something for ₹100 and sell it for ₹80, you lose ₹20. We want to do the opposite!" },
      { id: 'b', text: 'Buy Low, Sell High', correct: true, explanation: "Exactly! Buy shares when they are cheap and sell them when they become expensive. This difference is your profit!" },
      { id: 'c', text: 'Just keep money in the bank', correct: false, explanation: "Banks are safe, but stocks can help your money grow much faster over time if you're patient!" }
    ]
  };

  const handleOptionSelect = (option) => {
    setFeedback(option);
    setQuizStep('feedback');
    if (option.correct) {
      setStreak(prev => prev + 1);
    }
  };

  const closeQuiz = () => {
    setShowQuiz(false);
    setQuizStep('question');
    setFeedback(null);
  };

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ backgroundColor: 'var(--md-sys-color-surface)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '100px', filter: showQuiz ? 'blur(8px)' : 'none', transition: 'filter 0.3s ease' }}>
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
          {/* Daily Quiz Hero Card */}
          <motion.div 
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowQuiz(true)}
            style={{ 
              backgroundColor: 'var(--md-sys-color-primary)', 
              borderRadius: '28px', padding: '24px', marginBottom: '24px',
              color: 'white', position: 'relative', overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(103, 80, 164, 0.25)',
              cursor: 'pointer'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', opacity: 0.9 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trophy size={16} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Challenge</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '40px', height: '4px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div style={{ width: '60%', height: '100%', backgroundColor: 'white' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>3/5</span>
                </div>
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>Today's Quick Quiz</h2>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '20px', maxWidth: '200px' }}>
                Answer correctly to earn 50 🪙 and boost your streak!
              </p>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', display: 'inline-flex', padding: '8px 16px', borderRadius: '100px',
                fontSize: '0.85rem', fontWeight: 600
              }}>
                Tap to Start
              </div>
            </div>
            <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.2, transform: 'rotate(-15deg)' }}>
              <Coins size={140} strokeWidth={1} />
            </div>
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

      {/* Quiz Modal Overlay */}
      <AnimatePresence>
        {showQuiz && (
          <div style={{ 
            position: 'absolute', inset: 0, zIndex: 1000, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' 
          }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeQuiz}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              style={{ 
                backgroundColor: 'var(--md-sys-color-surface)', 
                width: '100%', maxWidth: '360px', borderRadius: '32px', 
                padding: '32px 24px', position: 'relative', zIndex: 1001,
                boxShadow: '0 24px 60px rgba(0,0,0,0.3)'
              }}
            >
              <button 
                onClick={closeQuiz}
                style={{ position: 'absolute', top: '16px', right: '16px', color: 'var(--md-sys-color-outline)' }}
              >
                <X size={24} />
              </button>

              <AnimatePresence mode="wait">
                {quizStep === 'question' ? (
                  <motion.div key="question" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div style={{ 
                      width: '56px', height: '56px', backgroundColor: 'var(--md-sys-color-primary-container)', 
                      borderRadius: '16px', marginBottom: '24px', display: 'flex', 
                      alignItems: 'center', justifyContent: 'center', color: 'var(--md-sys-color-primary)'
                    }}>
                      <Trophy size={28} />
                    </div>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--md-sys-color-on-surface)' }}>
                      Daily Quiz
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.5, marginBottom: '24px' }}>
                      {simplifiedQuiz.question}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {simplifiedQuiz.options.map(opt => (
                        <button 
                          key={opt.id}
                          onClick={() => handleOptionSelect(opt)}
                          style={{ 
                            backgroundColor: 'var(--md-sys-color-surface-container-high)', padding: '16px', 
                            borderRadius: '16px', color: 'var(--md-sys-color-on-surface)', textAlign: 'left',
                            fontSize: '0.95rem', fontWeight: 500, border: '1px solid var(--md-sys-color-outline-variant)'
                          }}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="feedback" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <div style={{ 
                      width: '64px', height: '64px', 
                      backgroundColor: feedback.correct ? '#1B5E20' : '#BA1A1A', 
                      borderRadius: '20px', marginBottom: '24px', display: 'flex', 
                      alignItems: 'center', justifyContent: 'center', color: 'white'
                    }}>
                      {feedback.correct ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />}
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px', color: feedback.correct ? '#1B5E20' : '#BA1A1A' }}>
                      {feedback.correct ? 'Spot On!' : 'Wait a minute...'}
                    </h2>
                    <div style={{ 
                      backgroundColor: feedback.correct ? '#E8F5E9' : '#FFEBEE', 
                      padding: '20px', borderRadius: '20px', marginBottom: '24px',
                      border: `1px solid ${feedback.correct ? '#C8E6C9' : '#FFCDD2'}`
                    }}>
                      <p style={{ fontSize: '1rem', lineHeight: 1.5, color: feedback.correct ? '#1B5E20' : '#B71C1C' }}>
                        {feedback.explanation}
                      </p>
                    </div>
                    <button 
                      onClick={closeQuiz}
                      style={{ 
                        backgroundColor: 'var(--md-sys-color-primary)', color: 'white', 
                        width: '100%', padding: '16px', borderRadius: '100px', 
                        fontWeight: 700, fontSize: '1rem'
                      }}
                    >
                      {feedback.correct ? 'Claim 50 🪙' : 'I Understood'}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
