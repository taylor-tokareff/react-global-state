/* eslint-disable max-len */
import React from 'react';
import { useSelectedTheme, useSetSelectedTheme } from '../../state/CharacterProvider';


const Header = () => {
  const selectedTheme = useSelectedTheme();
  const setSelectedTheme = useSetSelectedTheme();


  const handleChange = ({ target }) => setSelectedTheme(target.value);
  return <header>
    <h1>Futurama</h1>

    <ul>


      <label>light
        <input type="radio" name="theme" value="light" onChange={handleChange} />
      </label>

      <label>dark
        <input type="radio" name="theme" value="dark" onChange={handleChange} />
      </label>

    </ul>
  </header>;

};

export default Header;
