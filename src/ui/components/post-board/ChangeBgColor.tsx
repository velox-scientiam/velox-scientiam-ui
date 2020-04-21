import React, { FunctionComponent, useState, useEffect } from 'react';
import Switch from '@material-ui/core/Switch';

import ButtonWrapper from './ChangeBgColor.style';
import themeColors from '../../global/themeColors';

const ChangeBgColor: FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const { white, black } = themeColors;

  const changeBackground = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): any => {
    setDarkMode(event.target.checked);
  };

  useEffect(() => {
    const { style } = document.body;
    style.backgroundColor = darkMode ? black : white;
    style.color = darkMode ? white : black;
  });

  const bgColor = darkMode ? 'default' : 'primary';

  return (
    <ButtonWrapper>
      <Switch color={bgColor} checked={darkMode} onChange={changeBackground} />
      {darkMode ? 'Dark mode' : 'Light mode'}
    </ButtonWrapper>
  );
};

export default ChangeBgColor;
