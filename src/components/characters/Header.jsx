/* eslint-disable max-len */
import React from 'react';
// import { useSelectedTheme, useSetSelectedTheme } from '../../state/CharacterProvider';

const Header = () => {
  // const availableThemes = useSelectedTheme();
  // const setSelectedTheme = useSetSelectedTheme();


  // const handleChange = ({ target }) => setSelectedTheme(target.value);

  return <header>
    <h1>Futurama</h1>

    {/* <ul>
      {availableThemes.map((theme) => (
        <li key={theme}>
          <label>{theme}</label>
          <input type="radio" name="theme" value={theme} onChange={handleChange} />
        </li>
      ))}
    </ul> */}
  </header>;

};

export default Header;
