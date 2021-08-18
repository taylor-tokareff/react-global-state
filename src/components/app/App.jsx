import React from 'react';
import CharacterList from '../characters/CharacterList';
import Header from '../characters/Header';
import styles from './App.css';
import { useSelectedTheme } from '../../state/CharacterProvider';




export default function App() {

  const selectedTheme = useSelectedTheme();
  console.log(selectedTheme);
  return (

    <div className={
      selectedTheme === 'light' ?
        styles.light : styles.dark
    }>

      <Header />
      <CharacterList />
    </ div>
  );
}
