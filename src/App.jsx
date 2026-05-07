import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './screens/WelcomeScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import SwipeScreen from './screens/SwipeScreen';
import MotivatingScreen from './screens/MotivatingScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LearnScreen from './screens/LearnScreen';
import MentorFAB from './components/MentorFAB';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [activeTab, setActiveTab] = useState('home');
  const [userKnowledge, setUserKnowledge] = useState([]); // Store what they know

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
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
      {currentScreen === 'dashboard' && <MentorFAB />}
    </AnimatePresence>
  );
}

export default App;
