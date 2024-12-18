import React, { createContext, useContext, useState } from 'react';

const AudioLanguageContext = createContext({
  audioLanguage: 'English',
  setAudioLanguage: (language: string) => {},
});

export const AudioLanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [audioLanguage, setAudioLanguage] = useState('English');

  return (
    <AudioLanguageContext.Provider value={{ audioLanguage, setAudioLanguage }}>
      {children}
    </AudioLanguageContext.Provider>
  );
};

export const useAudioLanguage = () => useContext(AudioLanguageContext);
