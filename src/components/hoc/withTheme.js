import React, { useEffect, useState } from 'react';

export const Theme = React.createContext();

export const withTheme = (Component) => (props) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const changeTheme = async () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <Theme.Provider value={{ theme, changeTheme }}>
      <Component {...props} />
    </Theme.Provider>
  );
};
