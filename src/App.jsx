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
import MentorFAB from './components/MentorFAB';
import NavigationBar from './components/NavigationBar';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [userKnowledge, setUserKnowledge] = useState([]); // Store what they know

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  const isDashboard = currentScreen === 'dashboard';

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          {currentScreen === 'welcome' && (
            <WelcomeScreen key="welcome" onNext={() => navigateTo('experience')} />
          )}
          {currentScreen === 'experience' && (
            <ExperienceScreen key="experience" onNext={() => navigateTo('swipe')} />
          )}
          {currentScreen === 'swipe' && (
            <SwipeScreen 
              key="swipe" 
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
          {isDashboard && activeTab === 'home' && (
            <HomeScreen 
              key="home" 
              userKnowledge={userKnowledge} 
              onTabChange={setActiveTab}
            />
          )}
          {isDashboard && activeTab === 'profile' && (
            <ProfileScreen 
              key="profile" 
              onTabChange={setActiveTab}
            />
          )}
          {isDashboard && activeTab === 'learn' && (
            <LearnScreen 
              key="learn" 
              onTabChange={setActiveTab}
            />
          )}
          {isDashboard && activeTab === 'trade' && (
            <TradeScreen 
              key="trade" 
              onTabChange={setActiveTab}
            />
          )}
        </AnimatePresence>
        
        {isDashboard && <MentorFAB />}
      </div>

      {isDashboard && (
        <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
}

export default App;
