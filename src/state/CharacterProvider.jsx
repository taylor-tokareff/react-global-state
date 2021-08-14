/* eslint-disable max-len */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchFuturamaCharacters } from '../components/FuturamaApi';


const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedApi, setSelectedApi] = useState('futurama');
  // const [selectedTheme, setSelectedTheme] = useState('light');

  const apiMap = {
    futurama: fetchFuturamaCharacters,
  };


  useEffect(() => {
    apiMap[selectedApi]().then(setCharacters);
  }, [selectedApi]);



  return (
    <CharacterContext.Provider value={{ characters, setSelectedApi, apiMap }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  console.log('beans', characters);
  return characters;
};

export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(CharacterContext);
  return setSelectedApi;
};


export const useSelectedApi = () => {
  const { selectedApi } = useContext(CharacterContext);
  return selectedApi;
};




