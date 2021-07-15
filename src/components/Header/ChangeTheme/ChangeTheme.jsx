import React, { useMemo } from 'react';
import { icons } from 'constants';
import Button from '../../_common/Button';
import { useTheme } from '../../hooks';

const ChangeTheme = () => {
  const { theme, changeTheme } = useTheme();
  const icon = useMemo(() => {
    if (theme === 'dark') return icons.themeDark;
    return icons.themeLight;
  });
  return <Button icon={icon} onClick={changeTheme} />;
};

export default ChangeTheme;
