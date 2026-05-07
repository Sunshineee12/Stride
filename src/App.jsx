import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './screens/WelcomeScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import SwipeScreen from './screens/SwipeScreen';
import MotivatingScreen from './screens/MotivatingScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
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
              navigateTo('home');
            } else {
              navigateTo('motivating');
            }
          }} 
        />
      )}
      {currentScreen === 'motivating' && (
        <MotivatingScreen 
          key="motivating" 
          onNext={() => navigateTo('home')} 
        />
      )}
      {currentScreen === 'home' && (
        <HomeScreen key="home" userKnowledge={userKnowledge} />
      )}
    </AnimatePresence>
  );
}

export default App;
