import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './screens/WelcomeScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import SwipeScreen from './screens/SwipeScreen';
import MotivatingScreen from './screens/MotivatingScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LearnScreen from './screens/LearnScreen';
import TradeScreen from './screens/TradeScreen';
import QuoteSplash from './screens/QuoteSplash';
import MentorFAB from './components/MentorFAB';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [userKnowledge, setUserKnowledge] = useState([]); 
  const [userLevel, setUserLevel] = useState('Beginner');
  const [userId] = useState(() => {
    // Generate a simple unique ID for this session if not using real auth
    return crypto.randomUUID();
  });

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <AnimatePresence mode="wait">
      {currentScreen === 'welcome' && (
        <WelcomeScreen key="welcome" onNext={() => navigateTo('quote')} />
      )}
      {currentScreen === 'quote' && (
        <QuoteSplash key="quote" onComplete={() => navigateTo('experience')} />
      )}
      {currentScreen === 'experience' && (
        <ExperienceScreen key="experience" onNext={(level) => {
          setUserLevel(level);
          navigateTo('swipe');
        }} />
      )}
      {currentScreen === 'swipe' && (
        <SwipeScreen 
          key="swipe" 
          userLevel={userLevel}
          userId={userId}
          onComplete={(knowledge, skipped) => {
            setUserKnowledge(knowledge);
            if (skipped) {
              navigateTo('dashboard');
            } else {
              navigateTo('motivating');
            }
          }} 
        />
      )}
      {currentScreen === 'motivating' && (
        <MotivatingScreen 
          key="motivating" 
          onNext={() => navigateTo('dashboard')} 
        />
      )}
      {currentScreen === 'dashboard' && activeTab === 'home' && (
        <HomeScreen 
          key="home" 
          userKnowledge={userKnowledge} 
          onTabChange={setActiveTab}
        />
      )}
      {currentScreen === 'dashboard' && activeTab === 'profile' && (
        <ProfileScreen 
          key="profile" 
          onTabChange={setActiveTab}
        />
      )}
      {currentScreen === 'dashboard' && activeTab === 'learn' && (
        <LearnScreen 
          key="learn" 
          onTabChange={setActiveTab}
        />
      )}
      {currentScreen === 'dashboard' && activeTab === 'trade' && (
        <TradeScreen 
          key="trade" 
          onTabChange={setActiveTab}
        />
      )}
      {currentScreen === 'dashboard' && <MentorFAB />}
    </AnimatePresence>
  );
}

export default App;
