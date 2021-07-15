import React from 'react';
import ChangeLang from './ChangeLang';
import ChangeTheme from './ChangeTheme';
import Exit from './Exit';
import ChangeUserData from './ChangeUserData';

const AuthHeader = () => (
  <>
    <ChangeTheme />
    <ChangeLang />
    <ChangeUserData />
    <Exit />
  </>
);

export default AuthHeader;
